export const relationExtraction = ({
    text_input = "",
    description = "",
    domain = "",
    examples = [],
}: {
    text_input?: string,
    description?: string,
    domain?: string,
    examples?: { text: string, labels: string }[],
}) => {
    const _example =
        examples && examples.length > 0
            ? `Examples: ${examples.map(
                  (ex) => `Input ${ex.text} Output [${ex.labels}] \n`
              )}`
            : "";

    return `
        ${description}
        You are a highly intelligent and accurate ${domain} domain Resource Description Framework (RDF) data model. You take Passage as input and convert it into ${domain} domain RDF triples. A triple is a set of three entities that codifies a statement about semantic data in the form of subject–predicate–object expressions.
        You are a highly intelligent and accurate Resource Description Framework (RDF) data model. You take Passage as input and convert it into RDF triples. A triple is a set of three entities that codifies a statement about semantic data in the form of subject–predicate–object expressions.
        Your output format is only {{ output_format|default("[[ subject, predicate, object ], ...]") }} nothing else
        ${_example}
        Input: ${text_input}
        Output:
    `;
};
