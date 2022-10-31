const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = override(
    addWebpackAlias({
        "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
    }),
);
