const createProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware(["/admin"], {
      target: "http://localhost:8081",
      changeOrigin: true,
    })
  );
};
