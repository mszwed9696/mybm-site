import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/blogData.ts');
let content = fs.readFileSync(dataPath, 'utf-8');

// Find where blogPosts ends
const blogPostsEnd = content.indexOf('];\n\nexport function getBlogPostBySlug');
// Find where blogCategories ends, which is where the mess starts
const messStart = content.indexOf('export const blogCategories = [\n    "All",\n    ...Array.from(new Set(blogPosts.map((p) => p.category))),\n');

if (blogPostsEnd !== -1 && messStart !== -1) {
    const afterMessStart = messStart + 'export const blogCategories = [\n    "All",\n    ...Array.from(new Set(blogPosts.map((p) => p.category))),\n'.length;

    // The injected JSON starts exactly at afterMessStart.
    // We want everything from afterMessStart to the end of the file (which ends with `];`)
    // But wait! Because fixBlogs ran after generateBlogs, it might have injected into the end of generateBlogs's injection!

    // Let's just find all the text that contains the JSON blocks.
    const injectedText = content.substring(afterMessStart, content.lastIndexOf('];'));

    // We put it before blogPostsEnd
    const cleanContent =
        content.substring(0, blogPostsEnd) +
        injectedText + '\n];\n\n' +
        'export function getBlogPostBySlug(slug: string): BlogPost | undefined {\n' +
        '    return blogPosts.find((p) => p.slug === slug);\n' +
        '}\n\n' +
        'export const blogCategories = [\n' +
        '    "All",\n' +
        '    ...Array.from(new Set(blogPosts.map((p) => p.category)))\n' +
        '];\n';

    fs.writeFileSync(dataPath, cleanContent, 'utf-8');
    console.log("Fixed blogData.ts syntax");
} else {
    console.error("Could not find markers.");
}
