#!/bin/bash

echo "🚀 Starting Silk Browser with Ultraviolet Proxy..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

# Navigate to Ultraviolet-App directory
cd Ultraviolet-App

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing Ultraviolet dependencies..."
    pnpm install
fi

# Start the Ultraviolet proxy server in the background
echo "🔒 Starting Ultraviolet proxy server..."
pnpm start &
UV_PID=$!

# Wait a moment for the server to start
sleep 3

# Check if the server is running
if curl -s http://localhost:8080 > /dev/null; then
    echo "✅ Ultraviolet proxy server is running on http://localhost:8080"
    
    # Open Silk browser in default browser
    echo "🌐 Opening Silk browser..."
    if command -v open &> /dev/null; then
        open http://localhost:8080
    elif command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:8080
    else
        echo "🌐 Please open your browser and navigate to: http://localhost:8080"
    fi
    
    echo ""
    echo "🎉 Silk is now running with Ultraviolet proxy!"
    echo "📱 Proxy server: http://localhost:8080"
    echo "🔒 Press Ctrl+C to stop the proxy server"
    
    # Wait for user to stop
    wait $UV_PID
else
    echo "❌ Failed to start Ultraviolet proxy server"
    kill $UV_PID 2>/dev/null
    exit 1
fi 