#!/bin/bash

echo "════════════════════════════════════════════════════════"
echo "  🚀 VROXLAR WEBSITE - QUICK DEPLOY SCRIPT"
echo "════════════════════════════════════════════════════════"
echo ""

# Build the project
echo "📦 Building your website..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "════════════════════════════════════════════════════════"
    echo "  Choose your deployment platform:"
    echo "════════════════════════════════════════════════════════"
    echo ""
    echo "1. Vercel (Recommended - Easiest)"
    echo "2. Netlify"
    echo "3. Firebase"
    echo "4. Just build (I'll deploy manually)"
    echo ""
    read -p "Enter your choice (1-4): " choice

    case $choice in
        1)
            echo ""
            echo "🚀 Deploying to Vercel..."
            echo ""
            if ! command -v vercel &> /dev/null; then
                echo "Installing Vercel CLI..."
                npm install -g vercel
            fi
            vercel --prod
            ;;
        2)
            echo ""
            echo "🚀 Deploying to Netlify..."
            echo ""
            if ! command -v netlify &> /dev/null; then
                echo "Installing Netlify CLI..."
                npm install -g netlify-cli
            fi
            netlify deploy --prod --dir=dist
            ;;
        3)
            echo ""
            echo "🚀 Deploying to Firebase..."
            echo ""
            if ! command -v firebase &> /dev/null; then
                echo "Installing Firebase CLI..."
                npm install -g firebase-tools
            fi
            firebase deploy
            ;;
        4)
            echo ""
            echo "✅ Build complete! Your files are in the 'dist' folder."
            echo "📁 Upload the dist folder to your hosting provider."
            ;;
        *)
            echo "Invalid choice. Build complete, deploy manually."
            ;;
    esac
    
    echo ""
    echo "════════════════════════════════════════════════════════"
    echo "  ✅ DONE!"
    echo "════════════════════════════════════════════════════════"
    echo ""
    echo "📚 For detailed instructions, see: DEPLOYMENT_GUIDE.md"
    echo ""
else
    echo "❌ Build failed! Please check the errors above."
fi


