import { binaryClassification } from "../dist/config/binaryClassification.js";
import { OpenAI } from "../dist/models/openai.js";
import { Prompter } from "../dist/promptify/index.js";
import { binaryData } from "../examples/data/binary.js";

const model = OpenAI("api-key");
const examples = binaryData;
const firstExample = examples.slice(0, 5);

const prompt = binaryClassification({
    text_input: examples[6].text,
    description: "Binary Classification",
    examples: firstExample,
    labels: "positive, negative",
});

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
