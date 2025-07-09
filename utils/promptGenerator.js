const generateMedicalPrompt = (topic, level = 'medical student', language = 'English') => {
  // Detect medical unit based on topic keywords
  const unit = detectKenyanMedicalUnit(topic);
  
  // Kenyan medical school unit templates
  const unitTemplates = {
    anatomy: generateAnatomyPrompt,
    physiology: generatePhysiologyPrompt,
    biochemistry: generateBiochemistryPrompt,
    pathology: generatePathologyPrompt,
    microbiology: generateMicrobiologyPrompt,
    pharmacology: generatePharmacologyPrompt,
    medicine: generateMedicinePrompt,
    surgery: generateSurgeryPrompt,
    pediatrics: generatePediatricsPrompt,
    obstetrics: generateObstetricsPrompt,
    gynecology: generateGynecologyPrompt,
    community: generateCommunityHealthPrompt,
    forensic: generateForensicMedicinePrompt,
    default: generateDefaultPrompt
  };

  // Get the appropriate template
  const templateFn = unitTemplates[unit] || unitTemplates.default;
  
  return templateFn(topic, level, language, unit);
};

// Helper function to detect Kenyan medical units
function detectKenyanMedicalUnit(topic) {
  const lowerTopic = topic.toLowerCase();
  
  // Anatomy & Histology
  if (/(anatomy|histology|gross|structure|organ|tissue|muscle|bone|nerve)/.test(lowerTopic)) 
    return 'anatomy';
  
  // Physiology
  if (/(physiology|function|mechanism|homeostasis|regulation)/.test(lowerTopic)) 
    return 'physiology';
  
  // Biochemistry
  if (/(biochem|metabolism|enzyme|protein|carbohydrate|lipid|molecular)/.test(lowerTopic)) 
    return 'biochemistry';
  
  // Pathology
  if (/(pathology|disease|lesion|necrosis|inflammation|neoplasm)/.test(lowerTopic)) 
    return 'pathology';
  
  // Microbiology
  if (/(microbio|bacter|virus|fung|parasite|infection|antimicrobial)/.test(lowerTopic)) 
    return 'microbiology';
  
  // Pharmacology
  if (/(pharma|drug|medication|therap|dose|toxic)/.test(lowerTopic)) 
    return 'pharmacology';
  
  // Medicine
  if (/(medicine|internal|cardio|pulmon|gastro|renal|neuro|endocrine)/.test(lowerTopic)) 
    return 'medicine';
  
  // Surgery
  if (/(surg|operation|procedure|trauma|fracture|anastomosis)/.test(lowerTopic)) 
    return 'surgery';
  
  // Pediatrics
  if (/(pediat|child|neonate|infant|adolescent)/.test(lowerTopic)) 
    return 'pediatrics';
  
  // Obstetrics
  if (/(obstetric|pregn|birth|delivery|labour|partum)/.test(lowerTopic)) 
    return 'obstetrics';
  
  // Gynecology
  if (/(gynec|uter|ovary|menstru|menopaus)/.test(lowerTopic)) 
    return 'gynecology';
  
  // Community Health
  if (/(community|public health|epidem|vaccin|prevent|health promotion)/.test(lowerTopic)) 
    return 'community';
  
  // Forensic Medicine
  if (/(forensic|medicolegal|autopsy|poison|violence)/.test(lowerTopic)) 
    return 'forensic';
  
  return 'default';
}

// ========== UNIT-SPECIFIC PROMPTS ========== //

function generateAnatomyPrompt(topic, level, language) {
  return `
  **Anatomy Module: ${topic}** (Kenyan MBChB Curriculum)
  
  1. **Gross Anatomy**
     - Location and relationships in Kenyan population
     - Surface landmarks for physical examination
     - Common anatomical variations in African populations
  
  2. **Clinical Anatomy**
     - Relevance to common Kenyan health conditions
     - Procedures performed at Kenyan referral hospitals
     - Surgical approaches used in local settings
  
  3. **Living Anatomy**
     - Ultrasound/CT correlation using Kenyan case examples
     - Physical exam techniques for resource-limited settings
     - Cross-sectional anatomy important for Kenyan interns
  `;
}

function generatePhysiologyPrompt(topic, level, language) {
  return `
  **Physiology Module: ${topic}** (Kenyan Context)
  
  1. **Core Principles**
     - Normal physiological ranges in Kenyan populations
     - Altitude adaptations for highland residents
     - Tropical climate considerations
  
  2. **Clinical Correlations**
     - Common physiological disturbances seen in Kenya
     - Resource-appropriate diagnostic methods
     - Physiological basis of prevalent Kenyan diseases
  `;
}

function generateBiochemistryPrompt(topic, level, language) {
  return `
  **Biochemistry Module: ${topic}** (Kenyan Relevance)
  
  1. **Metabolic Pathways**
     - Nutritional biochemistry for Kenyan diets
     - Genetic polymorphisms common in East Africa
     - Biochemical adaptations to local diets
  
  2. **Clinical Biochemistry**
     - Interpretation of lab results in Kenyan hospitals
     - Common metabolic disorders in Kenyan population
     - Point-of-care testing availability in Kenya
  `;
}

function generatePathologyPrompt(topic, level, language) {
  return `
  **Pathology Module: ${topic}** (Kenyan Perspective)
  
  1. **Disease Patterns**
     - Histopathology of common Kenyan conditions
     - Cancer registry data from Kenyan populations
     - Infectious disease pathology prevalent in Kenya
  
  2. **Laboratory Medicine**
     - Pathology services available in Kenyan counties
     - Grossing and sampling techniques used locally
     - Special stains available at Kenyan referral labs
  `;
}

// [Additional unit templates would follow the same pattern...]

function generateCommunityHealthPrompt(topic, level, language) {
  return `
  **Community Health Module: ${topic}** (Kenyan Public Health)
  
  1. **Epidemiology**
     - Disease burden data from Kenyan Ministry of Health
     - NHIF coverage and healthcare financing
     - Demographic health survey findings
  
  2. **Preventive Medicine**
     - Kenyan immunization schedules
     - Community health worker programs
     - AMREF and other local health initiatives
  `;
}

// ========== EXPORTS ========== //
module.exports = { 
  generateMedicalPrompt,
  detectKenyanMedicalUnit 
};
