# Silk Browser with Integrated Ultraviolet Proxy

A beautiful, private web browser with **built-in Ultraviolet proxy technology** for enhanced privacy and access. No separate proxy server needed!

## ✨ What's New

**🚀 INTEGRATED PROXY SERVER**: Silk now includes the Ultraviolet proxy server directly! No more separate Ultraviolet-App folder needed.

## Features

- 🌐 **Private Browsing**: Browse the web through integrated Ultraviolet proxy
- 🔒 **Enhanced Privacy**: Built-in proxy with advanced privacy features
- ❄️ **Beautiful UI**: Elegant design with animated snow effects
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🚀 **Fast Performance**: Optimized for speed and efficiency
- 🎯 **Self-Contained**: Everything you need in one folder!

## Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- Modern web browser

## 🚀 Quick Start

### Option 1: Automated Startup (Recommended)

1. Make sure you're in the project directory
2. Run the startup script:
   ```bash
   ./start-silk.sh
   ```

The script will:
- Install dependencies automatically
- Start the integrated proxy server
- Open Silk in your default browser

### Option 2: Manual Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Silk**
   ```bash
   npm start
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:8080` in your browser
   - Silk will automatically load with full proxy functionality

## 🏗️ How It Works

1. **Integrated Proxy Server**: Silk runs its own Ultraviolet proxy server on port 8080
2. **Single Application**: Everything is contained within the Silk folder
3. **Automatic Setup**: No need to manage separate proxy servers
4. **Privacy Features**: All web traffic goes through the integrated proxy

## 📁 New Project Structure

```
silk-main/
├── index.html          # Main browser interface
├── script.js           # Browser functionality
├── styles.css          # Styling and animations
├── server.js           # 🆕 Integrated proxy server
├── package.json        # 🆕 Dependencies and scripts
├── start-silk.sh       # Updated startup script
├── README.md           # This file
└── SETUP.md            # Installation guide
```

**Note**: The `Ultraviolet-App/` folder is no longer needed!

## 🔧 Usage

1. **Search Bar**: Enter URLs directly or search terms
2. **Navigation**: Use the proxy controls (back, forward, refresh, home)
3. **New Tab**: Click the "+" button to start fresh
4. **Settings**: Access browser settings (coming soon)

## 🎯 Proxy Status Indicators

- 🟢 **Green**: Proxy connected and ready
- 🟠 **Orange**: Loading/processing
- 🔴 **Red**: Error or connection issue

## 🚫 Troubleshooting

### Proxy Not Connecting
- Ensure the Silk server is running on port 8080
- Check if port 8080 is available
- Verify Node.js is installed

### Dependencies Issues
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Conflicts
- Change the port in `server.js` (line 95)
- Update the `UV_BASE` constant in `script.js`

## 🔒 Security Features

- **Sandboxed iframes** for enhanced security
- **Cross-origin policies** for isolation
- **Proxy encryption** for privacy
- **No data logging** on the client side
- **Integrated security** with the proxy server

## 🎊 Benefits of Integration

- ✅ **No separate folders** to manage
- ✅ **Single command** to start everything
- ✅ **Automatic dependency** management
- ✅ **Easier deployment** and distribution
- ✅ **Simplified setup** for users
- ✅ **Better integration** between browser and proxy

## 🚀 Getting Started

1. **Install Node.js** (see SETUP.md)
2. **Run the startup script**: `./start-silk.sh`
3. **Enjoy private browsing** with Silk!

---

**Silk is now completely self-contained with integrated proxy functionality!** 🎉 