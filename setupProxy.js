const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Specify the API route path you want to proxy
    createProxyMiddleware({
      target: "http://localhost:3000/", // URL of the target server
      changeOrigin: true,
    })
  );
};
