const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && f !== 'Home.tsx' && f !== 'AboutPage.tsx' && f !== 'Services.tsx');

let updated = 0;
let skipped = [];

pages.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already seems to have PageHero
    if (content.includes('import { PageHero }')) {
        return;
    }

    // Find <Layout> to <Layout noPaddingTop>
    content = content.replace(/<Layout>/, '<Layout noPaddingTop>');

    // Add PageHero import
    content = content.replace(
        /import \{ Layout \} from "@\/components\/layout";/,
        'import { Layout } from "@/components/layout";\nimport { PageHero } from "@/components/sections/PageHero";'
    );

    // We need to find the first section/div that acts as the hero.
    // Patterns:
    // 1. <section className="pt-32 pb-16" style={{ backgroundColor: "#edf2f4" }}>
    // 2. <section className="section-padding bg-gradient-hero">
    // 3. <div className="pt-32 pb-16...

    const heroRegexes = [
        /<section[^>]*?(?:pt-32|section-padding bg-gradient-hero|bg-\[\#edf2f4\])[^>]*>([\s\S]*?)<\/section>/,
        /<div[^>]*?(?:pt-32|section-padding bg-gradient-hero|bg-\[\#edf2f4\])[^>]*>([\s\S]*?)<\/div>/
    ];

    let matchContext = null;
    let matchedFull = null;

    for (const regex of heroRegexes) {
        const match = content.match(regex);
        if (match) {
            matchContext = match[1];
            matchedFull = match[0];
            break;
        }
    }

    if (!matchContext) {
        skipped.push(file);
        return;
    }

    // Extract title (h1)
    const titleMatch = matchContext.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h1Content = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : "Mind Your Business Media";

    // Extract label (p, span, div before h1)
    let labelContent = "";
    const labelMatches = [...matchContext.matchAll(/<(?:p|span|div)[^>]*uppercase[^>]*>([\s\S]*?)<\/(?:p|span|div)>/g)];
    if (labelMatches.length > 0) {
        labelContent = labelMatches[0][1].trim().replace(/<[^>]+>/g, '');
    } else {
        // Try to find any accent color or medium text before H1
        const beforeH1 = matchContext.split('<h1')[0];
        const pMatch = beforeH1.match(/<p[^>]*>([\s\S]*?)<\/p>/);
        if (pMatch) labelContent = pMatch[1].trim().replace(/<[^>]+>/g, '');
    }

    // Extract description (p after h1)
    let descContent = "";
    const afterH1 = matchContext.split(/<\/h1>/)[1];
    if (afterH1) {
        const pMatch = afterH1.match(/<p[^>]*>([\s\S]*?)<\/p>/);
        if (pMatch) descContent = pMatch[1].trim().replace(/<[^>]+>/g, '');
    }

    // Format PageHero component string
    const labelAttr = labelContent ? `\n        label="${labelContent}"` : '';
    const descAttr = descContent ? `\n        description="${descContent}"` : '';

    const pageHeroString = `<PageHero${labelAttr}\n        title={\n          <>\n            ${h1Content}\n          </>\n        }${descAttr}\n      />`;

    // Replace matched hero section with PageHero
    content = content.replace(matchedFull, pageHeroString);

    // Wrap the rest in the sweep-over container.
    // The rest is everything between <PageHero...> and </Layout>, excluding <CTASection /> (or including it, better to include all inside the wrapper)
    // Actually, replace `<PageHero ... />` to `<PageHero ... />\n\n      {/* Main Content Wrapper for Sweep-Over Effect */}\n      <div className="relative z-10 -mt-[100vh] bg-[#141419]">`
    // And replace `</Layout>` with `      </div>\n    </Layout>`

    content = content.replace(
        /<\/Layout>/,
        '  </div>\n    </Layout>'
    );

    content = content.replace(
        /(<PageHero[\s\S]*?\/>)/,
        '$1\n\n      {/* Main Content Wrapper for Sweep-Over Effect */}\n      <div className="relative z-10 -mt-[100vh] bg-[#141419]">'
    );

    // Also replace light background colors globally in the file (basic heuristic)
    content = content.replace(/backgroundColor:\s*"#edf2f4"/g, 'backgroundColor: "#141419"');
    content = content.replace(/backgroundColor:\s*"#fff"/g, 'backgroundColor: "#141419"');
    content = content.replace(/backgroundColor:\s*"#f9fafb"/g, 'backgroundColor: "#1a1a24"');
    content = content.replace(/borderColor:\s*"#e5e7eb"/g, 'borderColor: "rgba(255,255,255,0.05)"');
    content = content.replace(/color:\s*"#0a0908"/g, 'color: "#fff"');
    content = content.replace(/color:\s*"#546a7b"/g, 'color: "rgba(244,244,245,0.7)"');

    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
});

console.log(`Updated ${updated} pages.`);
console.log(`Skipped ${skipped.length} pages:`, skipped);
