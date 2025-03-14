# 🚀 AI Cover Letter Generator (CLI) [WIP]
An AI-powered CLI tool that generates **personalized cover letters** based on your **resume** and a **job description**. Built with **TypeScript** and powered by **OpenAI GPT-4**.

## 🎯 Features
✅ Reads resume files (`.txt` or `.pdf`)  
✅ Accepts a job description as input  
✅ Uses OpenAI API to generate a **custom cover letter**  
✅ Saves the output as a `.txt` file  
✅ Lightweight, simple, and easy to use  

---

## 🛠 Installation
1️⃣ **Clone the repository**  
I'm using the js_experiments repository to hold all JS related experiments, since TS is a superset of JS I believe this repo fits well. Each branch will hold a different project.
```sh
git clone https://github.com/demaseme/js_experiments.git
git checkout QuickVersion
cd QuickVersion
```

2️⃣ **Install dependencies**
```sh
npm install 
```

3️⃣ Set up environment variables
Create a .env file in the root folder and add:
```
OPENAI_API_KEY=your-openai-api-key-here
```
4️⃣ Run the CLI
```
npx ts-node index.ts -r resume.pdf -j "Backend Engineer at Stripe"
``` 

## 🚀 Usage
### Basic Command
```sh
npx ts-node index.ts -r <resume-file> -j <job-description>
```
- Example: 
```sh
npx ts-node index.ts -r resume.txt -j "Software Engineer at Google"
```

## 📂 File Support
The tool supports the following resume formats:
- 📌 TXT (.txt) – Plain text files
- 📌 PDF (.pdf) – Extracts text from PDFs using pdf-parse

## 🛠 Technologies Used

- TypeScript – Strongly typed JavaScript
- Node.js – CLI development
- Commander.js – CLI argument parsing
- OpenAI API – AI-powered text generation
- fs-extra – File system handling
- pdf-parse – PDF text extraction
- dotenv – Environment variable management

## 🌎 Future Enhancements
- Add support for DOCX files
- Allow users to select AI models (GPT-3.5, GPT-4)
- Generate output as a formatted PDF
- Cloud deployment on AWS

## 📝 License
This project is licensed under the MIT License.