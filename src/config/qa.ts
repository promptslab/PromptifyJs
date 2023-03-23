export const qa = ({
    description = "",
    domain = "",
    examples = [],
    context = "",
    question = "",
}: {
    description?: string;
    domain?: string;
    examples?: {
        context: string;
        question: string;
        extracted_answer: string;
    }[];
    context?: string;
    question?: string;
}) => {
    if (!context) throw new Error("context is required");
    if (!question) throw new Error("question is required");

    const _domain = domain ? `${domain} domain` : "";

    const _example =
        examples && examples.length > 0
            ? `Examples: ${examples.map(
                  (ex) =>
                      `Input: ${ex.context} Question: ${ex.question} Output: [${ex.extracted_answer}]`
              )}`
            : "";
    return `
      ${description} 
      You are a highly intelligent and accurate ${_domain} question answering bot. You take Context and Question as input and return the answer from the Paragraph. Retain as much information as needed to answer the question at a later time.
      Your output format is only {{ output_format|default("[{'A' : Extracted Answer}]") }} form, no other form.
      ${_example}
      Context: ${context}
      Question: ${question}
      Output:
  `;
};
