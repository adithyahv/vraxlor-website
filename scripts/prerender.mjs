#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

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
const PORT = 4173; // Default Vite preview port
const baseURL = `http://localhost:${PORT}`;

async function startServer() {
    console.log('🚀 Starting preview server...');
    const server = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit',
        shell: true
    });

    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 3000));
    return server;
}

async function prerender() {
    console.log('\n🚀 Starting pre-rendering process...\n');

    let server;
    let browser;

    try {
        server = await startServer();

        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        for (const route of routes) {
            console.log(`📄 Pre-rendering: ${route.path}`);

            const page = await browser.newPage();

            // Set viewport to standard desktop size
            await page.setViewport({ width: 1920, height: 1080 });

            // Navigate to the route
            await page.goto(`${baseURL}${route.path}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Wait a bit for React to fully render animations/effects
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

        // Generate Sitemap
        console.log('\n🗺️  Generating sitemap.xml...');
        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://vraxlor.com${route.path === '/' ? '' : route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

        await fs.writeFile(path.join(distPath, 'sitemap.xml'), sitemapContent);
        console.log('✅ Generated: sitemap.xml');

        console.log('\n🎉 Pre-rendering complete!');
    } catch (error) {
        console.error('❌ Pre-rendering failed:', error);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
        if (server) {
            server.kill();
            // Give it a moment to release the port
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        // Force exit to ensure server process is cleaned up
        process.exit(0);
    }
}

prerender();
