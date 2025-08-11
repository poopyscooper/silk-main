#!/bin/bash

echo "🚀 Starting Silk Browser with Integrated Ultraviolet Proxy..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo ""
    echo "📦 Quick install on macOS:"
    echo "   brew install node"
    echo ""
    echo "📖 See SETUP.md for detailed instructions"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available. Please ensure Node.js is properly installed."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing Silk dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies. Please check your internet connection and try again."
        exit 1
    fi
    
    echo "✅ Dependencies installed successfully!"
else
    echo "✅ Dependencies already installed"
fi

# Start the integrated Silk proxy server
echo "🔒 Starting Silk proxy server..."
echo ""

# Run the server
npm start 