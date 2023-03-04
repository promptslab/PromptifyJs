export const ner = ({
    text_input = "",
    description = "",
    domain = "",
    labels = "",
    examples = [],
}) => {
    if (!text_input) throw new Error("input is required");

    const _domain = `${domain ? `${domain} domain` : ""}`;
    const _label = `${
        labels ? `following predefined entity types: ${labels}` : "entity types"
    }`;
    const _example =
        examples && examples.length > 0
            ? `Examples: ${examples.map(
                  (ex) => `Input ${ex.sentence} Output [${ex.sentence}]`
              )}`
            : "";
    return `
        ${description} 
        You are a highly intelligent and accurate ${_domain} Named-entity recognition(NER) system. You take Passage as input and your task is to recognize and extract specific types of ${_domain} named entities in that given passage and classify into a set of ${_label}.
        Your output format is only {{ output_format|default("[{{'T': type of entity from predefined entity types, 'E': entity in the input text}},...,{{'branch' : Appropriate branch of the passage ,'group': Appropriate Group of the passage}}]") }} form, no other form.
        ${_example}
        Input: ${text_input}
        Output:
    `;
};
