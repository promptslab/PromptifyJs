export const qa = ({
  description = "",
  domain = "",
  examples = [],
  context = "",
  question = ""
}) => {
  if (!context) throw new Error("context is required");
  if (!question) throw new Error("question is required");

  const _domain = domain ? `${domain} domain` : "";
  const _example =
      examples && examples.length > 0
          ? `Examples: ${examples.map(
                (ex) => `Input ${ex.sentence} Output [${ex.sentence}]`
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
