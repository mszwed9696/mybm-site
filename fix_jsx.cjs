const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Look for the broken PageHero pattern
            // The broken pattern looks like:
            // <PageHero ...
            //        title={
            //          <>
            //            ...
            //          </>
            //
            //      {/* Main Content Wrapper for Sweep-Over Effect */}
            //      <div className="relative z-10 -mt-[100vh] bg-[#141419]">
            //        }
            //        description="..."
            //      />

            const brokenPattern = /title=\{\s*<>\s*([\s\S]*?)\s*<\/>\s*(?:\{\/\*.*?\*\/\}\s*)?(<div className="relative z-10 -mt-\[100vh\] bg-\[\#141419\]">)\s*\}\s*description="([^"]*?)"\s*\/>/g;

            // A more generic replace for the exact breakage
            let modified = false;

            // We will fix it by matching the exact lines
            const brokenRegex2 = /(<PageHero[\s\S]*?)label="([^"]*)\s*\{([^}]*)\}"([\s\S]*?)title=\{\s*<>\s*([^<]*)\s*<\/>\s*\{\/\* Main Content Wrapper for Sweep-Over Effect \*\/\}\s*<div className="relative z-10 -mt-\[100vh\] bg-\[\#141419\]">\s*\}\s*description="\{([^}]*)\}"\s*\/>/g;

            content = content.replace(brokenRegex2, (match, beforeLabel, labelStr1, labelVar, middle, titleInner, descVar) => {
                modified = true;
                return `${beforeLabel}label={${labelVar}}\n        title={<>${titleInner.trim()}</>}\n        description={${descVar}}\n      />\n\n      {/* Main Content Wrapper for Sweep-Over Effect */}\n      <div className="relative z-10 -mt-[100vh] bg-[#141419]">`;
            });

            const brokenRegex3 = /(<PageHero[\s\S]*?)label="([^"]*)"([\s\S]*?)title=\{\s*<>\s*([\s\S]*?)\s*<\/>\s*\{\/\* Main Content Wrapper for Sweep-Over Effect \*\/\}\s*<div className="relative z-10 -mt-\[100vh\] bg-\[\#141419\]">\s*\}\s*description="([^"]*)"\s*\/>/g;

            content = content.replace(brokenRegex3, (match, beforeLabel, labelText, middle, titleInner, descText) => {
                modified = true;
                return `${beforeLabel}label="${labelText}"${middle}title={<>${titleInner.trim()}</>}\n        description="${descText}"\n      />\n\n      {/* Main Content Wrapper for Sweep-Over Effect */}\n      <div className="relative z-10 -mt-[100vh] bg-[#141419]">`;
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed ${fullPath}`);
            }
        }
    }
}

fixFiles(pagesDir);
