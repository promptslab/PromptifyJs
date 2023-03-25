import { ner } from "../config/ner.js";
import { OpenAI } from "../models/openai.js";
import { Prompter } from "../promptify/index.js";
import { nerData } from "../examples/data/optimized_ner.js";

const model = OpenAI("openai-api");
const examples = nerData.samples[0].data;
const firstExample = examples.slice(0, 3);

const prompt = ner({
    text_input: "I have alzheimers diease, I need medicine for it",
    description: "Medicine NER Expert",
    domain: "medicine",
    labels: "",
    position: true,
    examples: [firstExample],
});

console.log(prompt)

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
