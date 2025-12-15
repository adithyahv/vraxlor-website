#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    { path: '/', output: 'index.html' },
    { path: '/services', output: 'services/index.html' },
    { path: '/industries', output: 'industries/index.html' },
    { path: '/case-studies', output: 'case-studies/index.html' },
    { path: '/about', output: 'about/index.html' },
    { path: '/contact', output: 'contact/index.html' }
];

const distPath = path.join(__dirname, '..', 'dist');
const baseURL = `file://${distPath}/index.html`;

async function prerender() {
    console.log('🚀 Starting pre-rendering process...\n');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        for (const route of routes) {
            console.log(`📄 Pre-rendering: ${route.path}`);

            const page = await browser.newPage();

            // Navigate to the route
            await page.goto(`${baseURL}#${route.path}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Wait a bit for React to fully render
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Get the rendered HTML
            const html = await page.content();

            // Create output directory if needed
            const outputPath = path.join(distPath, route.output);
            const outputDir = path.dirname(outputPath);
            await fs.mkdir(outputDir, { recursive: true });

            // Write the pre-rendered HTML
            await fs.writeFile(outputPath, html);

            console.log(`✅ Generated: ${route.output}`);
            await page.close();
        }

        console.log('\n🎉 Pre-rendering complete!');
    } catch (error) {
        console.error('❌ Pre-rendering failed:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

prerender();
