import { OpenAIClient } from "../infra/OpenAIClient";

export class CoverLetterService {
    private aiClient: OpenAIClient;

    constructor() {
        this.aiClient = new OpenAIClient();
    }

    async generate(resumeText: string, job: string) : Promise<string> {
        const prompt = `Heres is my resume:\n${resumeText}\n\nHere is the job description:\n${job}\n\nWrite a personalized cover letter.`;
        return await this.aiClient.getChatCompletion(prompt);
    }
}