// Silk Browser - Integrated Ultraviolet Proxy Server
import { createServer } from "node:http";
import { hostname } from "node:os";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import Ultraviolet packages
import { publicPath } from "ultraviolet-static";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const fastify = Fastify({
    serverFactory: (handler) => {
        return createServer()
            .on("request", (req, res) => {
                // Set security headers
                res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                handler(req, res);
            });
    },
});

// Serve Silk's static files
fastify.register(fastifyStatic, {
    root: __dirname,
    prefix: '/',
    decorateReply: true,
});

// Serve Ultraviolet static files
fastify.register(fastifyStatic, {
    root: publicPath,
    prefix: '/uv/',
    decorateReply: false,
});

// Serve Ultraviolet core files
fastify.register(fastifyStatic, {
    root: uvPath,
    prefix: '/uv/',
    decorateReply: false,
});

// Serve Epoxy transport files
fastify.register(fastifyStatic, {
    root: epoxyPath,
    prefix: '/epoxy/',
    decorateReply: false,
});

// Serve Bare Mux files
fastify.register(fastifyStatic, {
    root: baremuxPath,
    prefix: '/baremux/',
    decorateReply: false,
});

// Special route for Ultraviolet config
fastify.get("/uv/uv.config.js", (req, res) => {
    return res.sendFile("uv/uv.config.js", publicPath);
});

// Root route serves Silk
fastify.get("/", (req, res) => {
    return res.sendFile("index.html", __dirname);
});

// Server startup
fastify.server.on("listening", () => {
    const address = fastify.server.address();
    
    console.log("🌐 Silk Browser with Ultraviolet Proxy");
    console.log("🚀 Server is running on:");
    console.log(`   Local: http://localhost:${address.port}`);
    console.log(`   Network: http://${hostname()}:${address.port}`);
    console.log("");
    console.log("✨ Silk is ready for private browsing!");
    console.log("📱 Open your browser and navigate to the URLs above");
});

// Graceful shutdown
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("\n🛑 Shutting down Silk proxy server...");
    fastify.close();
    process.exit(0);
}

// Start server
const port = parseInt(process.env.PORT || "8080");
fastify.listen({
    port: port,
    host: "0.0.0.0",
}); 