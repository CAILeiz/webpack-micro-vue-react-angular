const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

// __dirname /data/self-work/webpack-micro-vue-react-angular /data/self-work/webpack-micro-vue-react-angular/webpack.config.js
// console.log("__dirname", __dirname, __filename);

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parse: {
          parse: toml.par,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parse: {
          parse: yaml.par,
        },
      },

      {
        test: /\.json5$/i,
        type: "json",
        parse: {
          parse: json5.par,
        },
      },
    ],
  },
};