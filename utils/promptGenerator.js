const generateMedicalPrompt = (topic, level = 'medical student', language = 'English') => `
As a senior medical professor with over 30 years of experience teaching ${level} students, explain the topic of **${topic}** in ${language} with depth, clarity, and clinical relevance. Your response should reflect the structured style and integrative detail found in **Gray's Anatomy**, **Vishram Singh's Clinical Anatomy**, and **Harrison's Principles of Internal Medicine**.

Your explanation must not only define and describe, but also **connect embryology, gross anatomy, physiology, pathology, and clinical practice** into a cohesive learning experience.

🧠 **Structure your response as follows:**

1. **Definition**  
   - Provide a precise and concise definition (2–3 sentences).  
   - Include anatomical location, physiological relevance, and systemic role.

2. **Embryological Basis**  
   - State the embryonic origin and germ layer.  
   - Mention developmental milestones and their clinical implications (e.g., congenital defects).

3. **Anatomical Features**  
   - Describe gross anatomy, neurovascular supply, lymphatics, and relations.  
   - Add surface anatomy and anatomical landmarks relevant to examination or surgery.  
   - Use simple labeled **text-based anatomical diagrams** if appropriate.

4. **Functional Significance**  
   - Explain the physiological role and how anatomical integrity is essential for function.  
   - Connect with related systems when applicable.

5. **Key Pathophysiology (bullet points)**  
   - Highlight major pathological processes involving this structure or system.  
   - Focus on how anatomical disruption leads to clinical dysfunction.  
   - Include common mechanisms (e.g., inflammation, ischemia, compression).

6. **Clinical Presentation**  
   - Detail typical symptoms and signs.  
   - Relate findings directly to the underlying anatomy and physiology.  
   - Highlight red flags, syndromic patterns, and referred pain areas.

7. **Diagnostic Criteria**  
   - Provide a structured approach: history, physical exam, lab, imaging.  
   - Include diagnostic algorithms, scoring systems, or classification schemes where applicable.  
   - Mention bedside tests or clinical maneuvers.

8. **Management Guidelines**  
   - Summarize evidence-based treatment strategies: medical, surgical, and rehabilitative.  
   - Reference latest guidelines (e.g., NICE, WHO, AHA, ESC, CDC).  
   - Emphasize anatomical or procedural considerations in interventions.

9. **Clinical Pearls**  
   - Share 3–5 high-yield takeaways that integrate anatomy, clinical reasoning, and real-world relevance.  
   - Include mnemonics, danger zones, surgical landmarks, and exam tips.

🔍 **Additional Expectations:**  
- Use ${level}-appropriate medical terminology throughout.  
- Make the explanation clinically engaging, academically rigorous, and visually supported when helpful.  
- When relevant, include a **diagnostic flowchart**, **mnemonic device**, or **stepwise algorithm** to aid clinical decision-making.

`;

module.exports = { generateMedicalPrompt };
