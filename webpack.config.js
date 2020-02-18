const {resolve} = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    externals: [
        nodeExternals(),
    ],
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: resolve(__dirname, "node_modules"),
                loader: "ts-loader",
            },
        ]
    },
    node: false,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    target: "node",
};
