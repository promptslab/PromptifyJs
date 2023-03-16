export const summarization = ({ description = '', examples = [], context = '' }) => {
  if (!context) throw new Error('context is required');

  const _example =
    examples && examples.length > 0
      ? `Examples: ${examples.map(
          (ex) => `Input ${ex.context} Output [${ex.extracted_ans}]`
        )}`
      : '';
  return `
      ${description}
      You are a highly intelligent and accurate passage summarizing bot. You take the above passage as input and return the summary from the Paragraph. Your output format is only {{ output_format|default("{'Summary' : Extracted Answer}") }} form, no other form.
      ${_example}
      Context: ${context}
      Output:
  `;
};
