const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Helper to walk through directories
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(srcDir);

// Fix 1: Update LanguageContext.tsx
const langContextPath = files.find(f => f.endsWith('LanguageContext.tsx'));
if (langContextPath) {
    let content = fs.readFileSync(langContextPath, 'utf8');
    
    // Add import
    if (!content.includes('secureStorage')) {
        content = content.replace(
            "import React, { createContext, useContext, useState, ReactNode } from 'react';",
            "import React, { createContext, useContext, useState, ReactNode } from 'react';\nimport { secureStorage } from '../utils/security';"
        );
    }
    
    // Replace localStorage with secureStorage
    content = content.replace(/localStorage\.getItem\('msk-language'\)/g, "secureStorage.getItem('msk-language')");
    content = content.replace(/localStorage\.setItem\('msk-language'/g, "secureStorage.setItem('msk-language'");
    
    fs.writeFileSync(langContextPath, content);
    console.log('Fixed LanguageContext.tsx');
}

// Fix 2: Wrap partner.url and project.surveyLink with sanitizeUrl
// Fix 3: Wrap member.email in mailto with sanitizeEmail
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Check if file uses hrefs that need fixing
    const hasPartnerUrl = content.includes('href={partner.url}');
    const hasProjectUrl = content.includes('href={project.surveyLink}');
    const hasMemberEmail = content.includes('href={`mailto:${member.email}`}');
    const hasMemberEmailString = content.includes('href={"mailto:" + member.email}');

    if (hasPartnerUrl || hasProjectUrl || hasMemberEmail || hasMemberEmailString) {
        // Add imports if missing
        const importsToAdd = [];
        if ((hasPartnerUrl || hasProjectUrl) && !content.includes('sanitizeUrl')) {
            importsToAdd.push('sanitizeUrl');
        }
        if ((hasMemberEmail || hasMemberEmailString) && !content.includes('sanitizeEmail')) {
            importsToAdd.push('sanitizeEmail');
        }
        
        if (importsToAdd.length > 0) {
            // Very naive import addition - adjust path based on file location
            const depth = file.split('src/')[1].split('/').length - 1;
            const importPath = depth === 0 ? './utils/security' : '../'.repeat(depth) + 'utils/security';
            content = `import { ${importsToAdd.join(', ')} } from '${importPath}';\n` + content;
        }
        
        // Replacements
        content = content.replace(/href=\{partner\.url\}/g, 'href={sanitizeUrl(partner.url)}');
        content = content.replace(/href=\{project\.surveyLink\}/g, 'href={sanitizeUrl(project.surveyLink)}');
        content = content.replace(/href=\{\`mailto:\$\{member\.email\}\`\}/g, 'href={`mailto:${sanitizeEmail(member.email)}`}');
        content = content.replace(/href=\{"mailto:" \+ member\.email\}/g, 'href={"mailto:" + sanitizeEmail(member.email)}');
        
        if (content !== original) {
            fs.writeFileSync(file, content);
            console.log('Fixed links in ' + path.basename(file));
        }
    }
}

console.log('All automated fixes applied.');
