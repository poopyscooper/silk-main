# Silk Browser with Ultraviolet Proxy

A beautiful, private web browser interface powered by Ultraviolet proxy technology for enhanced privacy and access.

## Features

- 🌐 **Private Browsing**: Browse the web through Ultraviolet proxy
- 🔒 **Enhanced Privacy**: Built-in proxy with advanced privacy features
- ❄️ **Beautiful UI**: Elegant design with animated snow effects
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🚀 **Fast Performance**: Optimized for speed and efficiency

## Prerequisites

- Node.js (version 16 or higher)
- pnpm package manager
- Modern web browser

## Quick Start

### Option 1: Automated Startup (Recommended)

1. Make sure you're in the project directory
2. Run the startup script:
   ```bash
   ./start-silk.sh
   ```

The script will:
- Install dependencies automatically
- Start the Ultraviolet proxy server
- Open Silk in your default browser

### Option 2: Manual Setup

1. **Install Dependencies**
   ```bash
   cd Ultraviolet-App
   pnpm install
   ```

2. **Start Proxy Server**
   ```bash
   cd Ultraviolet-App
   pnpm start
   ```

3. **Open Silk Browser**
   - Navigate to `http://localhost:8080` in your browser
   - Or open `index.html` directly

## How It Works

1. **Ultraviolet Proxy Server**: Runs on port 8080, handling web requests through advanced proxy technology
2. **Silk Interface**: Beautiful browser interface that communicates with the proxy
3. **Privacy Features**: All web traffic goes through the proxy, enhancing privacy and access

## Usage

1. **Search Bar**: Enter URLs directly or search terms
2. **Navigation**: Use the proxy controls (back, forward, refresh, home)
3. **New Tab**: Click the "+" button to start fresh
4. **Settings**: Access browser settings (coming soon)

## Proxy Status Indicators

- 🟢 **Green**: Proxy connected and ready
- 🟠 **Orange**: Loading/processing
- 🔴 **Red**: Error or connection issue

## File Structure

```
silk-main/
├── index.html          # Main browser interface
├── script.js           # Browser functionality
├── styles.css          # Styling and animations
├── start-silk.sh       # Startup script
├── README.md           # This file
└── Ultraviolet-App/    # Proxy server
    ├── src/index.js    # Server code
    ├── package.json    # Dependencies
    └── ...
```

## Troubleshooting

### Proxy Not Connecting
- Ensure the Ultraviolet server is running on port 8080
- Check if port 8080 is available
- Verify Node.js and pnpm are installed

### Browser Issues
- Clear browser cache and cookies
- Try a different browser
- Check browser console for errors

### Port Conflicts
- Change the port in `Ultraviolet-App/src/index.js`
- Update the `UV_BASE` constant in `script.js`

## Security Features

- **Sandboxed iframes** for enhanced security
- **Cross-origin policies** for isolation
- **Proxy encryption** for privacy
- **No data logging** on the client side

## Contributing

Feel free to contribute to improve Silk:
- Report bugs
- Suggest features
- Submit pull requests

## License

This project uses the GPL-3.0 license for the Ultraviolet components.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review browser console for errors
3. Ensure all dependencies are properly installed

---

**Enjoy private browsing with Silk! 🚀** 