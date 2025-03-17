import { Command } from "commander";
import {CoverLetterService} from "./services/CoverLetterService";
import {FileService} from "./services/FileService"

const program = new Command();
const fileService = new FileService();
const coverLetterService  = new CoverLetterService();

program 
    .version("1.0.0")
    .description("AI Cover Letter Generator CLI (SOLID)")
    .requiredOption("-r, --resume <path>", "Path to resume file")
    .requiredOption("-j, --job <description>", "Job Description")
    .action( async (options) => {
        try{
            const resumeText = await fileService.readFile(options.resume)
            const coverLetter = await coverLetterService.generate(resumeText, options.job);

            await fileService.saveFile("cover_letter.txt", coverLetter);
            console.log("Cover letter saved as 'cover_letter.txt'");
        }
        catch(error) {
            console.error("Error:", error);
        }
    });

program.parseAsync(process.argv);
