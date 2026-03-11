const fs = require('fs');
const path = require('path');

const dataFile = path.resolve(__dirname, '../src/data/blogData.ts');
let content = fs.readFileSync(dataFile, 'utf8');

// The regex finds `slug: "some-string",`
// We want to add `coverImage: "/images/blog/some-string.jpg",` right below it.

content = content.replace(/slug:\s*"([^"]+)",(\s*)(title:)/g, function (match, slug, spacing, titleBlock) {
    return 'slug: "' + slug + '",' + spacing + 'coverImage: "/images/blog/' + slug + '.jpg",' + spacing + titleBlock;
});

fs.writeFileSync(dataFile, content, 'utf8');
console.log('Successfully patched blogData.ts with cover images.');
