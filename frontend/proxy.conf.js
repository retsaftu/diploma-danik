function makeUrl(endpoint) {
  const protocol = endpoint.protocol ? endpoint.protocol : "http";
  const host = endpoint.host;
  const port = endpoint.port;
  return `${protocol}://${host}:${port}`;
}
const PROXY_CONFIG = [
  {
    context: ["/backend/**"],
    target: makeUrl({ protocol: "http", host: "localhost", port: 8000 }),
    pathRewrite: {
      "^/backend":
        makeUrl({ protocol: "http", host: "localhost", port: 8000 }) + "/",
    },
  },
];
module.exports = PROXY_CONFIG;
