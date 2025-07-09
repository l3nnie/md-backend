const express = require('express');
const { explainMedicalTopic } = require('../controllers/education.controller');
const { generateMedicalPrompt, detectKenyanMedicalUnit } = require('../utils/promptGenerator');

const router = express.Router();

// Enhanced explain endpoint with Kenyan medical context
router.post('/explain', (req, res, next) => {
  // Add Kenyan context to request body
  req.body.kenyanContext = true;
  req.body.detectedUnit = detectKenyanMedicalUnit(req.body.topic);
  
  // Generate appropriate prompt
  req.body.customPrompt = generateMedicalPrompt(
    req.body.topic,
    req.body.level || 'medical student',
    req.body.language || 'English'
  );
  
  // Proceed to controller
  explainMedicalTopic(req, res, next);
});

module.exports = router;
