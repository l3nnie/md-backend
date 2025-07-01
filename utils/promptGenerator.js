const generateMedicalPrompt = (topic, level = 'medical student', language = 'English') => `
As a medical professor with 25 years of experience teaching ${level} students, provide a comprehensive explanation of ${topic} in ${language}.

Structure your response with these sections:
1. Definition (2-3 sentences)
2. Key Pathophysiology (bullet points)
3. Clinical Presentation
4. Diagnostic Criteria
5. Management Guidelines
6. Clinical Pearls (3-5 key takeaways)

Use ${level}-appropriate terminology. Include:
- Relevant anatomical diagrams in text form
- Diagnostic algorithms when applicable
- Latest guidelines from credible sources
- Mnemonics for memorization
`;

module.exports = { generateMedicalPrompt };