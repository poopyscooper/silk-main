// Silk Browser - Ultraviolet Proxy Integration
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    const snowContainer = document.querySelector('.snow-container');
    const proxyContainer = document.getElementById('proxyContainer');
    const proxyFrame = document.getElementById('proxyFrame');
    const urlInput = document.getElementById('urlInput');
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    const newTabBtn = document.getElementById('newTabBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const homeBtn = document.getElementById('homeBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Ultraviolet configuration
    const UV_BASE = 'http://localhost:8080';
    let uv = null;
    let currentUrl = '';
    let proxyAvailable = false;

    // Create snow animation
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() * 5 + 3;
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        snowflake.style.left = Math.random() * 100 + '%';
        
        const duration = Math.random() * 7 + 8;
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        
        snowContainer.appendChild(snowflake);
        
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, (duration + 5) * 1000);
    }

    function startSnowfall() {
        for (let i = 0; i < 50; i++) {
            setTimeout(createSnowflake, i * 200);
        }
        setInterval(createSnowflake, 300);
    }

    startSnowfall();

    // Check if proxy server is available
    async function checkProxyAvailability() {
        try {
            // Try to fetch the UV config file to check if server is running
            const response = await fetch(`${UV_BASE}/uv/uv.config.js`);
            if (response.ok) {
                proxyAvailable = true;
                updateStatus('connected', 'Proxy Connected');
                initUltraviolet();
            } else {
                throw new Error('Server responded but config not found');
            }
        } catch (error) {
            proxyAvailable = false;
            updateStatus('error', 'Proxy Not Available');
            console.log('Ultraviolet proxy server not running. Some features will be limited.');
            console.log('To enable full functionality:');
            console.log('1. Make sure the server is running: npm start');
            console.log('2. Check that port 8080 is available');
            console.log('3. Verify all dependencies are installed');
            
            // Add retry functionality
            setTimeout(() => {
                if (!proxyAvailable) {
                    updateStatus('retry', 'Click to Retry');
                    statusIndicator.style.cursor = 'pointer';
                    statusIndicator.onclick = retryProxyConnection;
                }
            }, 2000);
        }
    }

    // Retry proxy connection
    async function retryProxyConnection() {
        updateStatus('loading', 'Retrying...');
        statusIndicator.style.cursor = 'default';
        statusIndicator.onclick = null;
        
        setTimeout(() => {
            checkProxyAvailability();
        }, 1000);
    }

    // Initialize Ultraviolet
    async function initUltraviolet() {
        if (!proxyAvailable) return;
        
        try {
            // Load Ultraviolet script
            const uvScript = document.createElement('script');
            uvScript.src = `${UV_BASE}/uv/uv.bundle.js`;
            document.head.appendChild(uvScript);

            await new Promise((resolve, reject) => {
                uvScript.onload = resolve;
                uvScript.onerror = reject;
            });

            // Initialize Ultraviolet
            uv = new Ultraviolet({
                prefix: '/uv/',
                bare: `${UV_BASE}/bare/`,
                encodeUrl: Ultraviolet.codec.xor.encode,
                decodeUrl: Ultraviolet.codec.xor.decode,
                handler: '/uv/uv.handler.js',
                client: '/uv/uv.client.js',
                bundle: '/uv/uv.bundle.js',
                config: '/uv/uv.config.js',
                sw: '/uv/uv.sw.js',
            });

            updateStatus('connected', 'Proxy Connected');
            console.log('Ultraviolet initialized successfully');
        } catch (error) {
            console.error('Failed to initialize Ultraviolet:', error);
            updateStatus('error', 'Proxy Error');
        }
    }

    // Update proxy status
    function updateStatus(type, text) {
        statusIndicator.className = `status-indicator ${type}`;
        statusText.textContent = text;
    }

    // Navigate to URL using Ultraviolet or fallback
    async function navigateToUrl(url) {
        if (proxyAvailable && uv) {
            // Use Ultraviolet proxy
            try {
                updateStatus('loading', 'Loading...');
                
                // Ensure URL has protocol
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                }

                currentUrl = url;
                urlInput.value = url;

                // Create proxy URL
                const proxyUrl = `${UV_BASE}/uv/service/${uv.encodeUrl(url)}`;
                
                // Load in iframe
                proxyFrame.src = proxyUrl;
                
                // Show proxy container
                proxyContainer.style.display = 'block';
                
                updateStatus('connected', 'Proxy Active');
                
            } catch (error) {
                console.error('Navigation error:', error);
                updateStatus('error', 'Navigation Failed');
            }
        } else {
            // Fallback: open in new tab
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            // Show fallback message
            alert(`Proxy server not available. Opening ${url} in a new tab.`);
            window.open(url, '_blank');
        }
    }

    // Handle search/navigation
    function handleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Check if it's a URL or search query
            if (query.includes('.') || query.includes('/') || query.startsWith('http')) {
                navigateToUrl(query);
            } else {
                // Treat as search query - use Google
                navigateToUrl(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
            }
        }
    }

    // Event listeners
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    searchBtn.addEventListener('click', handleSearch);

    // Proxy controls
    backBtn.addEventListener('click', () => {
        if (proxyFrame.contentWindow && proxyAvailable) {
            proxyFrame.contentWindow.history.back();
        }
    });

    forwardBtn.addEventListener('click', () => {
        if (proxyFrame.contentWindow && proxyAvailable) {
            proxyFrame.contentWindow.history.forward();
        }
    });

    refreshBtn.addEventListener('click', () => {
        if (currentUrl && proxyAvailable) {
            navigateToUrl(currentUrl);
        }
    });

    homeBtn.addEventListener('click', () => {
        proxyContainer.style.display = 'none';
        searchInput.value = '';
        searchInput.focus();
        updateStatus(proxyAvailable ? 'connected' : 'error', proxyAvailable ? 'Proxy Ready' : 'Proxy Not Available');
    });

    closeBtn.addEventListener('click', () => {
        proxyContainer.style.display = 'none';
        searchInput.value = '';
        searchInput.focus();
        updateStatus(proxyAvailable ? 'connected' : 'error', proxyAvailable ? 'Proxy Ready' : 'Proxy Not Available');
    });

    // URL input handling
    urlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            navigateToUrl(this.value);
        }
    });

    // New tab functionality
    newTabBtn.addEventListener('click', () => {
        proxyContainer.style.display = 'none';
        searchInput.value = '';
        searchInput.focus();
        updateStatus(proxyAvailable ? 'connected' : 'error', proxyAvailable ? 'Proxy Ready' : 'Proxy Not Available');
    });

    // Settings functionality
    settingsBtn.addEventListener('click', () => {
        if (!proxyAvailable) {
            alert('Proxy server not available. Please start the Ultraviolet server to access full features.\n\nSee SETUP.md for installation instructions.');
        } else {
            alert('Settings panel coming soon!');
        }
    });

    // Check proxy availability and initialize
    checkProxyAvailability();

    // Focus search input on page load
    searchInput.focus();
});
