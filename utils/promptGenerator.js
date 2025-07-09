const generateMedicalPrompt = (topic, level = 'medical student', language = 'English') => {
  // Detect medical specialty based on topic keywords
  const specialty = detectMedicalSpecialty(topic);
  
  // Specialty-specific templates
  const specialtyTemplates = {
    anatomy: generateAnatomyPrompt,
    physiology: generatePhysiologyPrompt,
    pathology: generatePathologyPrompt,
    pharmacology: generatePharmacologyPrompt,
    clinical: generateClinicalPrompt,
    surgery: generateSurgicalPrompt,
    default: generateDefaultPrompt
  };

  // Get the appropriate template
  const templateFn = specialtyTemplates[specialty] || specialtyTemplates.default;
  
  return templateFn(topic, level, language, specialty);
};

// Helper function to detect medical specialty
function detectMedicalSpecialty(topic) {
  const lowerTopic = topic.toLowerCase();
  
  if (/(nerve|muscle|bone|organ|tissue|anatomy)/.test(lowerTopic)) return 'anatomy';
  if (/(mechanism|function|process|physiology)/.test(lowerTopic)) return 'physiology';
  if (/(disease|disorder|syndrome|pathology)/.test(lowerTopic)) return 'pathology';
  if (/(drug|medication|pharmaco|treatment)/.test(lowerTopic)) return 'pharmacology';
  if (/(procedure|operation|surgical|technique)/.test(lowerTopic)) return 'surgery';
  if (/(diagnosis|signs|symptoms|clinical)/.test(lowerTopic)) return 'clinical';
  
  return 'default';
}

// Specialty-specific prompt generators
function generateAnatomyPrompt(topic, level, language) {
  return `
  **Anatomical Deep Dive: ${topic}**
  
  1. **Structural Organization**
     - Gross anatomical description (shape, size, position)
     - Subdivisions/compartments
     - 3D spatial relationships [Describe in text]
  
  2. **Microanatomy**
     - Histological layers/components
     - Cell types present
     - Specialized structures
  
  3. **Neurovascular Supply**
     - Arterial supply (including variants)
     - Venous/lymphatic drainage
     - Innervation (sensory/motor/autonomic)
  
  4. **Clinical Correlations**
     - Surface anatomy landmarks
     - Common surgical approaches
     - Danger zones to avoid
  
  5. **Imaging Anatomy**
     - Appearance on X-ray/CT/MRI/US
     - Key identifying features
  `;
}

function generatePhysiologyPrompt(topic, level, language) {
  return `
  **Physiological Analysis: ${topic}**
  
  1. **Core Mechanisms**
     - Molecular/cellular processes
     - Energy requirements
     - Rate-limiting steps
  
  2. **Regulation**
     - Feedback mechanisms
     - Hormonal/neural control
     - Circadian variations
  
  3. **Integrated Function**
     - System interactions
     - Homeostatic role
     - Functional reserves
  
  4. **Clinical Measurements**
     - Relevant lab tests
     - Normal ranges
     - Interpretation pitfalls
  `;
}

function generatePathologyPrompt(topic, level, language) {
  return `
  **Pathological Profile: ${topic}**
  
  1. **Etiology**
     - Genetic factors
     - Environmental triggers
     - Risk stratification
  
  2. **Pathogenesis**
     - Molecular mechanisms
     - Disease progression
     - Organ/system impact
  
  3. **Morphology**
     - Gross pathological features
     - Histological hallmarks
     - Staging/grading
  
  4. **Clinical Manifestations**
     - Symptom complexes
     - Disease variants
     - Atypical presentations
  `;
}

function generatePharmacologyPrompt(topic, level, language) {
  return `
  **Pharmacological Review: ${topic}**
  
  1. **Drug Classes**
     - Mechanism of action
     - Structure-activity relationships
     - Therapeutic categories
  
  2. **Pharmacokinetics**
     - Absorption/distribution
     - Metabolism/excretion
     - Special populations
  
  3. **Clinical Use**
     - Indications (FDA/off-label)
     - Dosing regimens
     - Monitoring parameters
  
  4. **Safety Profile**
     - Adverse effects
     - Drug interactions
     - Contraindications
  `;
}

function generateClinicalPrompt(topic, level, language) {
  return `
  **Clinical Mastery: ${topic}**
  
  1. **Diagnostic Approach**
     - Key history questions
     - Physical exam findings
     - Diagnostic algorithms
  
  2. **Differential Diagnosis**
     - Common vs. dangerous causes
     - Distinguishing features
     - Rule-out strategies
  
  3. **Management Framework**
     - Acute stabilization
     - Definitive treatment
     - Long-term follow-up
  
  4. **Patient Communication**
     - Explanation strategies
     - Shared decision-making
     - Cultural considerations
  `;
}

function generateSurgicalPrompt(topic, level, language) {
  return `
  **Surgical Perspective: ${topic}**
  
  1. **Preoperative Planning**
     - Indications/contraindications
     - Imaging requirements
     - Risk assessment
  
  2. **Surgical Anatomy**
     - Critical landmarks
     - Approach options
     - Anatomical variations
  
  3. **Procedural Steps**
     - Step-by-step technique
     - Instrumentation
     - Tips/tricks
  
  4. **Complication Management**
     - Prevention strategies
     - Intraoperative rescue
     - Postoperative care
  `;
}

function generateDefaultPrompt(topic, level, language) {
  return `
  **Comprehensive Medical Review: ${topic}**
  
  1. **Fundamental Concepts**
     - Core definitions
     - Historical context
     - Current understanding
  
  2. **Scientific Basis**
     - Evidence foundation
     - Research gaps
     - Emerging knowledge
  
  3. **Clinical Relevance**
     - Practical applications
     - Case examples
     - Practice guidelines
  
  4. **Interdisciplinary Connections**
     - Related specialties
     - Collaborative care
     - Team-based approaches
  `;
}

module.exports = { 
  generateMedicalPrompt,
  detectMedicalSpecialty 
};
