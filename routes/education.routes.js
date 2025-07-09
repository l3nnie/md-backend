const express = require('express');
const { explainMedicalTopic } = require('../controllers/education.controller');
const { generateMedicalPrompt, detectKenyanMedicalUnit } = require('../utils/promptGenerator');

const router = express.Router();

router.post('/explain', (req, res, next) => {
  try {
    // Add Kenyan context to request
    req.body.kenyanContext = true;
    req.body.detectedUnit = detectKenyanMedicalUnit(req.body.topic);
    
    // Generate the appropriate prompt
    req.body.customPrompt = generateMedicalPrompt(
      req.body.topic,
      req.body.level || 'medical student',
      req.body.language || 'English'
    );
    
    // Proceed to controller
    explainMedicalTopic(req, res, next);
  } catch (error) {
    console.error('Route handler error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process medical explanation request',
      kenyanResources: [
        'Kenya Medical Practitioners Council: https://www.kmpdc.go.ke',
        'Ministry of Health: https://www.health.go.ke',
        'AMREF Health Africa: https://amref.org'
      ]
    });
  }
});

module.exports = router;
