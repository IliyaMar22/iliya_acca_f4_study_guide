#!/bin/bash

# ACCA F4 Study App - Quick Vercel Deployment Script
# Run this script to deploy your app to Vercel

echo "🚀 ACCA F4 Study App - Vercel Deployment"
echo "========================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed successfully!"
    echo ""
fi

# Navigate to app directory
cd "$(dirname "$0")"

echo "📦 Current directory: $(pwd)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
    echo ""
fi

# Run build test locally (optional)
echo "🏗️  Testing build locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo ""
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your app is now live on Vercel!"
echo "📊 Check the URL above to access your study app"
echo ""
echo "📚 Features deployed:"
echo "   ✅ 19 Chapters (All parts A-H)"
echo "   ✅ 125 Flashcards"
echo "   ✅ 102 Quiz Questions"
echo "   ✅ Bilingual Support (EN/BG)"
echo ""
echo "🎓 Good luck with your ACCA F4 exam!"

