module.exports = {
    entry: "./js/app.js",
    output: {
        path: `${__dirname}/public`,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
