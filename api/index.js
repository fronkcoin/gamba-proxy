import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
  target: 'https://209.38.229.113.nip.io:3001',
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    '^/api': '',
  },
});

export default function (req, res) {
  return apiProxy(req, res);
};