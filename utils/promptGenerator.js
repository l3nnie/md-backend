const generateMedicalPrompt = (topic, level = 'medical student', language = 'English') => `
Generate a comprehensive medical explanation of **${topic}** for ${level}-level learners in ${language}, structured as follows:

1. **Definition & Core Concept**
   - Precise anatomical/physiological definition (2-3 sentences)
   - Key characteristics and clinical significance
   - Systemic relationships and functional importance

2. **Embryological Foundations**
   - Germ layer origin and developmental timeline
   - Critical developmental events with clinical correlations
   - Common congenital anomalies (if applicable)

3. **Anatomical Architecture**
   - Gross anatomical features and spatial relationships
   - Neurovascular supply (arteries, veins, nerves, lymphatics)
   - Surface landmarks and surgical/clinical relevance
   - [Text-based anatomical diagram description]

4. **Physiological Mechanisms**
   - Normal functional processes
   - Homeostatic relationships with other systems
   - Key regulatory mechanisms

5. **Pathological Spectrum** (bullet points)
   - Major disease processes affecting this structure/system
   - Pathoanatomical correlates of dysfunction
   - Characteristic histopathological changes

6. **Clinical Presentation Patterns**
   - Symptom complexes and physical findings
   - Anatomical basis of clinical manifestations
   - Red flags and danger signs

7. **Diagnostic Framework**
   - Evidence-based diagnostic approach:
     * History elements
     * Physical exam techniques
     * Laboratory markers
     * Imaging modalities
   - Diagnostic criteria/classification systems
   - [Flowchart description when applicable]

8. **Therapeutic Principles**
   - Current management guidelines (with citation sources)
   - Procedural/anatomical considerations
   - Emerging therapies and research directions

9. **Clinical Integration**
   - 3-5 high-yield clinical pearls
   - Mnemonics or memory aids
   - Common pitfalls and how to avoid them
   - Interdisciplinary collaboration points

**Technical Requirements:**
- Use ${level}-appropriate terminology with jargon explanations when needed
- Maintain strict clinical accuracy with anatomical precision
- Include conceptual diagrams described in text format
- Reference current guidelines (last 5 years) without direct quotes
- Emphasize clinical-anatomical correlations throughout
- Format headings clearly for easy navigation
- Omit introductory phrases - begin directly with content
`;

module.exports = { generateMedicalPrompt };
