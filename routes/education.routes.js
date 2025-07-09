// education.controller.js
exports.explainMedicalTopic = async (req, res, next) => {
  try {
    const { topic, level, language, kenyanContext, detectedUnit, customPrompt } = req.body;
    
    if (!topic) {
      return res.status(400).json({ 
        success: false,
        error: 'Medical topic is required',
        suggestedUnits: suggestRelatedKenyanUnits(topic) // Helper function
      });
    }

    // Use the custom prompt if provided
    const prompt = customPrompt || generateMedicalPrompt(topic, level, language);
    
    // Get explanation from AI model
    const result = await model.generateContent(prompt);
    const text = (await result.response).text();

    res.status(200).json({
      success: true,
      data: {
        topic,
        level,
        unit: detectedUnit,
        kenyanContext,
        explanation: text
      }
    });
    
  } catch (error) {
    console.error('Error generating explanation:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to generate medical explanation',
      kenyanResources: getKenyanMedicalResources() // Fallback local resources
    });
  }
};

// Helper functions
function suggestRelatedKenyanUnits(topic) {
  // Implementation to suggest Kenyan medical units
  return [];
}

function getKenyanMedicalResources() {
  return {
    links: [
      'https://www.health.go.ke',
      'https://www.kmpdc.go.ke',
      'https://www.amref.org'
    ]
  };
}
