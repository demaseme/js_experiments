import {program} from "commander"
import { readFile } from "./file";
import { generateCoverLetter } from "./ai";

program
    .version("1.0.0")
    .description("AI Powered Cover Letter Generator")
    .requiredOption("-r --resume <path>", "Path to the resume file")
    .requiredOption("-j --job <description>", "Job description")
    .action(async (options) => {
        try {
            const resumeText = await readFile(options.resume);
            const coverLetter = await generateCoverLetter(resumeText, options.job);
            console.log("Generated Cover Letter: ", coverLetter);
        }
        catch(error) {
            console.error("❌ Error:", error);
        }
    });

program.parse(process.argv);
