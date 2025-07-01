const express = require('express');
const { explainMedicalTopic } = require('../controllers/education.controller');

const router = express.Router();
router.post('/explain', explainMedicalTopic);
module.exports = router;