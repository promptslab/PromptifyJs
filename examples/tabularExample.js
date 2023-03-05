import { tabular } from "../config/tabular.js";
import { OpenAI } from "../models/openai.js";
import { Prompter } from "../promptify/index.js";
import { tabularData } from "../examples/data/tabular.js";

const model = OpenAI("api-key");
const examples = tabularData.samples;
const firstExample = examples.slice(0, 5);

const prompt = tabular({
    text_input: examples[6],
    description: "Tabular Data Extraction",
    examples: firstExample,
});

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
