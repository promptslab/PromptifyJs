export const binaryClassification = ({
    text_input = "",
    description = "",
    labels = "",
    examples = [],
}: {
    text_input?: string;
    description?: string;
    labels?: string;
    examples?: Array<{ text: string; labels: string }>;
}) => {
    if (!text_input) throw new Error("input is required");

    const _label = `${
        labels ? `following predefined entity types: ${labels}` : "entity types"
    }`;
    const _example =
        examples && examples.length > 0
            ? `Examples: ${examples.map(
                  (ex) => `Input ${ex.text} Output [${ex.labels}] \n`
              )}`
            : "";
    return `
        ${description} 
        You are a highly intelligent and accurate Binary Classification system.
        You take Passage as input and classify that as either of the ${_label} only, nothing else.
        Your output format is only {{ output_format|default("[{'C':Category}]") }} form, no other form.
        ${_example}
        Input: ${text_input}
        Output:
    `;
};
