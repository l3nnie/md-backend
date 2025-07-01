const { generateMedicalPrompt } = require('../utils/promptGenerator');
const model = require('../config/gemini.config');

exports.explainMedicalTopic = async (req, res) => {
  try {
    const { topic, level, language } = req.body;
    if (!topic) return res.status(400).json({ error: 'Topic is required' });
    
    const prompt = generateMedicalPrompt(topic, level, language);
    const result = await model.generateContent(prompt);
    const text = (await result.response).text();
    
    res.json({ explanation: text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate explanation' });
  }
};