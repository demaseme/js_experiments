import dotenv from "dotenv"
dotenv.config();

export class EnvConfig {
    static getOpenAIKey(): string {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) throw new Error("Missing OPENAI_API_KEY in .env");
        return apiKey;
    }
}