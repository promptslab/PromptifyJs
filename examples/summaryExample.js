import { summarization } from '../config/summarization.js';
import { summaryData } from '../examples/data/summary.js';
import { OpenAI } from '../models/openai.js';
import { Prompter } from '../promptify/index.js';

const model = OpenAI('api-key');

const prompt = summarization({
  examples: summaryData,
  context: `Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, built with free software components from Apple WebKit and Mozilla Firefox. Versions were later released for Linux, macOS, iOS, and also for Android, where it is the default browser. The browser is also the main component of ChromeOS, where it serves as the platform for web applications. Most of Chrome's source code comes from Google's free and open-source software project Chromium, but Chrome is licensed as proprietary freeware. WebKit was the original rendering engine, but Google eventually forked it to create the Blink engine; all Chrome variants except iOS now use Blink. As of October 2022, StatCounter estimates that Chrome has a 67% worldwide browser market share (after peaking at 72.38% in November 2018) on personal computers (PC), is most used on tablets (having surpassed Safari), and is also dominant on smartphones and at 65% across all platforms combined. Because of this success, Google has expanded the "Chrome" brand name to other products: ChromeOS, Chromecast, Chromebook, Chromebit, Chromebox, and Chromebase.`,
});

const result = await Prompter(model, prompt, 'text-davinci-003');

console.log(result);
