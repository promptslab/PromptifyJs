import { ner } from "../dist/config/ner.js";
import { OpenAI } from "../dist/models/openai.js";
import { Prompter } from "../dist/promptify/index.js";
import { nerData } from "../examples/data/optimized_ner.js";

const model = OpenAI("api-key");
const examples = nerData.samples[0].data;
const firstExample = examples.slice(0, 3);

const prompt = ner({
    text_input: "I have alzheimers diease, I need medicine for it",
    description: "Medicine NER Expert",
    domain: "medicine",
    labels: "",
    examples: [firstExample],
});

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
