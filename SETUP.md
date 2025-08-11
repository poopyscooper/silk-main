# Setup Guide for Silk Browser with Integrated Ultraviolet Proxy

## 🎉 What's New

**Silk now includes the Ultraviolet proxy server directly!** No more separate Ultraviolet-App folder needed. Everything is contained within the Silk folder.

## Prerequisites Installation

### 1. Install Homebrew (macOS Package Manager)

Homebrew is the easiest way to install Node.js on macOS.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, you may need to add Homebrew to your PATH:
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

### 2. Install Node.js

Using Homebrew:
```bash
brew install node
```

Verify installation:
```bash
node --version
npm --version
```

**Note**: npm comes automatically with Node.js - no need to install it separately!

## Alternative Installation Methods

### Using Node Version Manager (nvm)

If you prefer nvm for managing Node.js versions:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or source profile
source ~/.zshrc

# Install latest LTS Node.js
nvm install --lts
nvm use --lts

# npm is included with Node.js
```

### Using Official Installer

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for macOS
3. Run the installer
4. npm is automatically installed

## 🚀 Getting Silk Running

Once Node.js is installed:

### Option 1: Use the Startup Script (Recommended)
```bash
./start-silk.sh
```

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start Silk with integrated proxy
npm start
```

### Option 3: Quick Setup Command
```bash
npm run setup
```

## 🏗️ How It Works Now

1. **Single Application**: Silk runs its own Ultraviolet proxy server
2. **No Separate Folders**: Everything is contained within the Silk directory
3. **Automatic Integration**: Browser and proxy work together seamlessly
4. **Easy Management**: One command starts everything

## 📁 New Project Structure

```
silk-main/
├── index.html          # Main browser interface
├── script.js           # Browser functionality
├── styles.css          # Styling and animations
├── server.js           # 🆕 Integrated proxy server
├── package.json        # 🆕 Dependencies and scripts
├── start-silk.sh       # Updated startup script
├── README.md           # Usage guide
├── SETUP.md            # This file
└── PROJECT_STATUS.md   # Project overview
```

**The Ultraviolet-App/ folder is no longer needed!**

## 🔧 Troubleshooting

### "Command not found" errors
- Ensure Node.js is in your PATH
- Restart your terminal after installation
- Check if Homebrew is properly configured

### Port 8080 already in use
```bash
# Find what's using port 8080
lsof -i :8080

# Kill the process
kill -9 <PID>
```

### Dependencies issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Permission errors
```bash
# Fix npm global permissions
sudo chown -R $USER /usr/local/lib/node_modules
```

## ✅ Verification

After setup, you should see:
- ✅ Node.js version 16+ installed
- ✅ npm package manager working
- ✅ Silk proxy server running on port 8080
- ✅ Silk browser interface accessible

## 🎯 Next Steps

Once everything is set up:
1. Run `./start-silk.sh`
2. Open your browser to `http://localhost:8080`
3. Start browsing privately with Silk!

## 🌟 Benefits of Integration

- **Simplified Setup**: No need to manage separate proxy servers
- **Better Integration**: Browser and proxy work together seamlessly
- **Easier Deployment**: Everything in one folder
- **Automatic Management**: Dependencies and startup handled automatically
- **No Confusion**: Clear, single application structure

---

**Silk is now completely self-contained!** 🎉 