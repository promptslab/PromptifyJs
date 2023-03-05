export const tabular = ({
    text_input = "",
    description = "",
    examples = [],
}) => {
    if (!text_input) throw new Error("input is required");
    if (!description) throw new Error("description is required");
    if (!examples) throw new Error("examples is required");

    const _example =
        examples && examples.length > 0
            ? `Examples: ${examples.map(
                  (ex) => `Input ${ex.text} Output: [${ex.tabulardata}]`
              )}`
            : "";
    return `
        Description: ${description}

        You are a highly intelligent and accurate tabular data extractor from plain text input, your inputs can be text of arbitrary size, but the output should be in [{'tabular': {'entity_type': 'entity'} }] JSON format
        
        Examples Below:
        ${_example}

        Target Input Below:
        ${text_input.text}
        Output for the target input:
    `;
};
