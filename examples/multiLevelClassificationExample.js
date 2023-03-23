import { multiLevelClassification } from '../config/multiLevelClassification.js';
import { multilabelClassificationData } from '../examples/data/mutliLevelClassification.js';
import { OpenAI } from '../models/openai.js';
import { Prompter } from '../promptify/index.js';

const model = OpenAI('api-key');

const prompt = multiLevelClassification({
  examples: multilabelClassificationData.samples,
  context: `The first web browser, called WorldWideWeb, was created in 1990 by Sir Tim Berners-Lee. He then recruited Nicola Pellow to write the Line Mode Browser, which displayed web pages on dumb terminals. The Mosaic web browser was released in April 1993, and was later credited as the first web browser to find mainstream popularity. Its innovative graphical user interface made the World Wide Web easy to navigate and thus more accessible to the average person. This, in turn, sparked the Internet boom of the 1990s, when the Web grew at a very rapid rate. Marc Andreessen, the leader of the Mosaic team, started his own company, Netscape, which released the Mosaic-influenced Netscape Navigator in 1994. Navigator quickly became the most popular browser.

Microsoft debuted Internet Explorer in 1995, leading to a browser war with Netscape. Within a few years, Microsoft gained a dominant position in the browser market for two reasons: it bundled Internet Explorer with Microsoft Windows, their popular operating system and did so as freeware with no restrictions on usage. The market share of Internet Explorer peaked at over 95% in the early 2000s. In 1998, Netscape launched what would become the Mozilla Foundation to create a new browser using the open-source software model. This work evolved into the Firefox browser, first released by Mozilla in 2004. Firefox's market share peaked at 32% in 2010. Apple released its Safari browser in 2003. Safari remains the dominant browser on Apple devices, though it did not become popular elsewhere.`,
});

const result = await Prompter(model, prompt, 'text-davinci-003');

console.log(result);
