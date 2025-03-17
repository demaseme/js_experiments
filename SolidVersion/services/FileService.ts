import fs from "fs-extra"
import PdfParse from "pdf-parse";
export class FileService {
    
    async saveFile(fileName: string, coverLetter: any) : Promise<boolean>{
        try {
            await fs.writeFile(fileName, coverLetter);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }

    }
    async readFile(filePath: string) : Promise<string> {
        const fileExt = filePath.split(".").pop()?.toLocaleLowerCase(); 
        
        if(!fileExt) throw new Error("Invalid file extension");

        switch (fileExt){
            case "txt": 
                return await fs.readFile(filePath, "utf-8");
            case "pdf":
                const dataBuffer = await fs.readFile(filePath);
                const pdfData = await PdfParse(dataBuffer);
                return pdfData.text;
            default:
                throw new Error("Unsupported file type. Use .txt or .pdf");
        }
    }
}