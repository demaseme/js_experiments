import OpenAIApi from "openai";
import {EnvConfig} from "./EnvConfig";

export class OpenAIClient {
    private openai: OpenAIApi;

    /**
     *
     */
    constructor() {
        const apiKey = EnvConfig.getOpenAIKey();
        this.openai = new OpenAIApi();   
    }

    async getChatCompletion(prompt: string) : Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{role: "system", content: prompt}],
        });

        return response.choices[0].message?.content ?? "No response from AI";
    }
}