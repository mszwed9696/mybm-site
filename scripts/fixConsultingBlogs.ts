import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const apiKey = process.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const industries = [
    { name: "Med Spas", slug: "med-spas", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2670&auto=format&fit=crop" },
    { name: "Law Firms", slug: "law-firms", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2712&auto=format&fit=crop" },
];

async function fixBlogs() {
    const posts: any[] = [];
    const msPerDay = 24 * 60 * 60 * 1000;

    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 10);

    for (let i = 0; i < industries.length; i++) {
        const ind = industries[i];
        const promptText = `
        You are an expert copywriter and SEO specialist. Write a high-converting, SEO-optimized blog post for ${ind.name} about scaling their business through direct Marketing Consulting.
        
        The audience: Owner-operators or companies with internal marketing teams in the ${ind.name} industry who are going through extreme growth phases, expect a big jump in ad spend, and need operational guidance without hiring a full agency.
        The Offer: Mike Szwed's $10,000/month (or $100k/year) no-commitment Marketing Consulting. The benefit is DIRECT knowledge transfer and skill transfer from an industry leader who has generated massive results.
        
        Instructions:
        1. Use copywriting principles from "Breakthrough Advertising"
        2. Format using HTML tags (<h2>, <h3>, <p>, <ul>, <li>, <strong>, etc.) so it drops right into a React dangerouslySetInnerHTML div. Do NOT use markdown markdown blocks (\`\`\`). Do NOT include the <h1> title inside the body.
        3. Make the title exactly: "Marketing Consulting for ${ind.name}: Scaling Your Internal Acquisition Systems".
        4. Provide an SEO excerpt (under 160 characters).
        5. Provide SEO meta description (under 160 characters).
        6. Include a clear Call to Action at the end driving traffic to "/consulting".
        
        CRITICAL INSTRUCTION: You MUST return ONLY valid JSON. Escape any double quotes inside the HTML strings using a backslash (\"). Do NOT include trailing commas. Ensure valid JSON parsing.
        Structure:
        {
          "title": "...",
          "excerpt": "...",
          "metaDescription": "...",
          "body": "..."
        }
        `;

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: promptText,
            });

            let text = response.text || "";
            text = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const data = JSON.parse(text);

            const postDate = new Date(currentDate.getTime() - (i * 3 * msPerDay));
            posts.push({
                slug: `marketing-consulting-for-${ind.slug}`,
                title: data.title,
                excerpt: data.excerpt,
                category: "Marketing Consulting",
                industryTags: [ind.slug],
                author: "Mike Szwed",
                readTime: "6 min read",
                date: postDate.toISOString().split('T')[0],
                metaDescription: data.metaDescription,
                body: data.body,
                coverImage: ind.image
            });
            console.log(`Success for ${ind.name}`);
        } catch (err) {
            console.error(`Failed ${ind.name}`, err);
        }
    }

    const dataPath = path.join(process.cwd(), 'src/data/blogData.ts');
    let fileContent = fs.readFileSync(dataPath, 'utf-8');
    const insertionPoint = fileContent.lastIndexOf('];');
    if (insertionPoint !== -1) {
        const postsString = posts.map(p => JSON.stringify(p, null, 4)).join(',\n');
        const newFileContent = fileContent.substring(0, insertionPoint) +
            ',\n' + postsString + '\n' + fileContent.substring(insertionPoint);
        fs.writeFileSync(dataPath, newFileContent, 'utf-8');
        console.log("Injected 2 missing blogs");
    }
}
fixBlogs();
