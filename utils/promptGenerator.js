// utils/promptGenerator.js

// Helper function to detect Kenyan medical units
function detectKenyanMedicalUnit(topic) {
  const lowerTopic = topic.toLowerCase();
  
  if (/(anatomy|histology|gross|structure|organ|tissue|muscle|bone|nerve)/.test(lowerTopic)) 
    return 'anatomy';
  if (/(physiology|function|mechanism|homeostasis|regulation)/.test(lowerTopic)) 
    return 'physiology';
  if (/(biochem|metabolism|enzyme|protein|carbohydrate|lipid|molecular)/.test(lowerTopic)) 
    return 'biochemistry';
  if (/(pathology|disease|lesion|necrosis|inflammation|neoplasm)/.test(lowerTopic)) 
    return 'pathology';
  if (/(microbio|bacter|virus|fung|parasite|infection|antimicrobial)/.test(lowerTopic)) 
    return 'microbiology';
  if (/(pharma|drug|medication|therap|dose|toxic)/.test(lowerTopic)) 
    return 'pharmacology';
  if (/(medicine|internal|cardio|pulmon|gastro|renal|neuro|endocrine)/.test(lowerTopic)) 
    return 'medicine';
  if (/(surg|operation|procedure|trauma|fracture|anastomosis)/.test(lowerTopic)) 
    return 'surgery';
  if (/(pediat|child|neonate|infant|adolescent)/.test(lowerTopic)) 
    return 'pediatrics';
  if (/(obstetric|pregn|birth|delivery|labour|partum)/.test(lowerTopic)) 
    return 'obstetrics';
  if (/(gynec|uter|ovary|menstru|menopaus)/.test(lowerTopic)) 
    return 'gynecology';
  if (/(community|public health|epidem|vaccin|prevent|health promotion)/.test(lowerTopic)) 
    return 'community';
  if (/(forensic|medicolegal|autopsy|poison|violence)/.test(lowerTopic)) 
    return 'forensic';
  
  return 'default';
}

// Unit-specific prompt generators
const generateAnatomyPrompt = (topic, level, language) => `...`; // Your anatomy template
const generatePhysiologyPrompt = (topic, level, language) => `...`; // Your physiology template
const generateBiochemistryPrompt = (topic, level, language) => `...`; // Your biochem template
const generatePathologyPrompt = (topic, level, language) => `...`; // Your pathology template
const generateMicrobiologyPrompt = (topic, level, language) => `...`; // Your micro template
const generatePharmacologyPrompt = (topic, level, language) => `...`; // Your pharma template
const generateMedicinePrompt = (topic, level, language) => `...`; // Your medicine template
const generateSurgeryPrompt = (topic, level, language) => `...`; // Your surgery template
const generatePediatricsPrompt = (topic, level, language) => `...`; // Your peds template
const generateObstetricsPrompt = (topic, level, language) => `...`; // Your OB template
const generateGynecologyPrompt = (topic, level, language) => `...`; // Your GYN template
const generateCommunityHealthPrompt = (topic, level, language) => `...`; // Your community health template
const generateForensicMedicinePrompt = (topic, level, language) => `...`; // Your forensic template
const generateDefaultPrompt = (topic, level, language) => `...`; // Your default template

const generateMedicalPrompt = (topic, level = 'medical student', language = 'English') => {
  const unit = detectKenyanMedicalUnit(topic);
  
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

  const templateFn = unitTemplates[unit] || unitTemplates.default;
  return templateFn(topic, level, language);
};

module.exports = { 
  generateMedicalPrompt,
  detectKenyanMedicalUnit,
  // Explicitly export all generator functions if needed elsewhere
  generateAnatomyPrompt,
  generatePhysiologyPrompt,
  generateBiochemistryPrompt,
  generatePathologyPrompt,
  generateMicrobiologyPrompt,
  generatePharmacologyPrompt,
  generateMedicinePrompt,
  generateSurgeryPrompt,
  generatePediatricsPrompt,
  generateObstetricsPrompt,
  generateGynecologyPrompt,
  generateCommunityHealthPrompt,
  generateForensicMedicinePrompt,
  generateDefaultPrompt
};
