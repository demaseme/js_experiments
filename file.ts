import fs from "fs-extra";
import pdfParse from "pdf-parse";

export const readFile = async (fileName : string ) : Promise<string> => {
    const fileExt = fileName.split(".").pop()?.toLocaleLowerCase();
    if (!fileExt) throw new Error("Invalid file type");
    switch (fileExt){
        case "txt":
            return fs.readFile(fileName, "utf-8");
        case "pdf":
            const dataBuffer = await fs.readFile(fileName);
            const pdfData = await pdfParse(dataBuffer);
            return pdfData.text;
        default: 
            throw new Error("Unsupported file type. Use .txt or .pdf");
    }


}