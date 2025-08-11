# Setup Guide for Silk Browser with Ultraviolet Proxy

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

### 3. Install pnpm

```bash
npm install -g pnpm
```

Verify installation:
```bash
pnpm --version
```

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

# Install pnpm
npm install -g pnpm
```

### Using Official Installer

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for macOS
3. Run the installer
4. Install pnpm: `npm install -g pnpm`

## Getting Silk Running

Once Node.js and pnpm are installed:

### Option 1: Use the Startup Script
```bash
./start-silk.sh
```

### Option 2: Manual Setup
```bash
# Install dependencies
cd Ultraviolet-App
pnpm install

# Start proxy server
pnpm start

# In another terminal, open Silk
open index.html
```

## Troubleshooting

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

### Permission errors
```bash
# Fix npm global permissions
sudo chown -R $USER /usr/local/lib/node_modules
```

## Verification

After setup, you should see:
- ✅ Node.js version 16+ installed
- ✅ pnpm package manager working
- ✅ Ultraviolet proxy server running on port 8080
- ✅ Silk browser interface accessible

## Next Steps

Once everything is set up:
1. Run `./start-silk.sh`
2. Open your browser to `http://localhost:8080`
3. Start browsing privately with Silk!

---

**Need help?** Check the main README.md for more troubleshooting tips. 