import OpenAIApi from "openai"
import dotenv from "dotenv"
import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";


dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
if(!apiKey) throw new Error("Missing OPENAI_API_KEY in .env");
const openai = new OpenAIApi();

export const generateCoverLetter = async (resumeText: string, job: any) : Promise<string> => {
    const response = await openai.chat.completions.create(
        {
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are an expert in writing professional cover letters." },
                { role: "user", content: `Here is my resume:\n${resumeText}\n\nHere is the job description:\n${job}\n\nWrite a personalized cover letter.` }
            ],
            
        } as ChatCompletionCreateParamsNonStreaming
    );
    return response.choices[0].message?.content ?? "No response from API.";
}
 