export const sql = ({
    text_input = "",
    description = "",
    example_schema = {},
    target_schema = {},
    examples = [],
}: {
    text_input?: string;
    description?: string;
    example_schema?: any;
    target_schema?: any;
    examples?: { sentence: string; query: string }[];
}) => {
    if (!text_input) throw new Error("input is required");
    if (!example_schema) throw new Error("example_schema is required");
    if (!examples) throw new Error("examples is required");
    if (!target_schema) throw new Error("target_schema is required");

    const _example =
        examples && examples.length > 0
            ? `Examples: ${examples.map(
                  (ex) => `Input: ${ex.sentence} Output: [{'Q': ${ex.query}}]`
              )}`
            : "";
    return `
        ${description} 
        You are a highly intelligent and accurate SQL query creator. You take a sentence and turn it into a SQL query. 
        Sometimes you are also provided with a table and you have to create a query that returns the correct answer.
        Your output format is a dictionary with a single key 'Q' and the value is the SQL query, so {{ output_format|default("[{'Q':Query}]") }} form, no other form.
        The example schema for the examples below is: ${example_schema}
        ${_example}

        The target schema is: ${target_schema}
        Input: ${text_input}
        Output:
    `;
};
