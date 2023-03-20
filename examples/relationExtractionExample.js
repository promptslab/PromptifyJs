import { relationExtraction } from "../dist/config/relationExtraction.js";
import { OpenAI } from "../dist/models/openai.js";
import { Prompter } from "../dist/promptify/index.js";
import { relationExtractionData } from "../examples/data/relation_extraction.js";

const model = OpenAI("api key");
const examples = relationExtractionData;

const prompt = relationExtraction({
    text_input:
        "Eren is a Person. Working for XYZ company, his job title is Software Engineer. He lives in Bielefeld, Germany",
    description: "Relation Extraction",
    domain: "Personal Information",
    examples: examples,
});

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
