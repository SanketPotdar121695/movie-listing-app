const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const { API_baseURL, API_access_token } = process.env;

// Setting up the proxy options

const proxyOptions = {
  target: API_baseURL,
  changeOrigin: true,
  pathRewrite: {
    '^/api/movies': '/'
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Authorization', API_access_token);
  }
};

// Creating a proxy middleware
const apiProxy = createProxyMiddleware(proxyOptions);

module.exports = { apiProxy };
