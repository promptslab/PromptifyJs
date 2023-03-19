<div align="center">
<img width="110px" src="https://raw.githubusercontent.com/promptslab/Promptify/main/assets/logo.png">
<h1>PromptifyJs</h1></div>

<div align="center"><img width="110px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png">
</div>

<!--
<h2 align="center">PromptifyJs</h2> -->

<p align="center">
  <p align="center">Prompt Engineering, Solve NLP Problems with LLM's & Easily generate different NLP Task prompts for popular generative models like GPT, PaLM, and more with Promptify in Javascript
</p>
</p>

 <h4 align="center">
  <a href="https://github.com/promptslab/Promptify/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="Promptify is released under the Apache 2.0 license." />
  </a>
  <a href="https://pypi.org/project/promptify/">
    <img src="https://badge.fury.io/js/Promptify.svg" alt="npm version" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="http://makeapullrequest.com" />
  </a>
  <a href="https://discord.gg/m88xfYMbK6">
    <img src="https://img.shields.io/badge/Discord-Community-orange" alt="Community" />
  </a>
  <a href="#">
    <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="colab" />
  </a>
</h4>

## Quick tour

To immediately use a LLM model for your NLP task, we provide the `Prompter` API.

```js
import { ner } from "../config/ner.js";
import { OpenAI } from "../models/openai.js";
import { Prompter } from "../promptify/index.js";
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
                          
                          
### Output

[{'E': '93-year-old', 'T': 'Age'},
 {'E': 'chronic right hip pain', 'T': 'Medical Condition'},
 {'E': 'osteoporosis', 'T': 'Medical Condition'},
 {'E': 'hypertension', 'T': 'Medical Condition'},
 {'E': 'depression', 'T': 'Medical Condition'},
 {'E': 'chronic atrial fibrillation', 'T': 'Medical Condition'},
 {'E': 'severe nausea and vomiting', 'T': 'Symptom'},
 {'E': 'urinary tract infection', 'T': 'Medical Condition'},
 {'Branch': 'Internal Medicine', 'Group': 'Geriatrics'}]
 
```
