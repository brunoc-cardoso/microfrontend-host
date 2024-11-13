const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        news: "news@http://localhost:3001/remoteEntry.js",
        sponsors: "sponsors@http://localhost:3002/remoteEntry.js",
        ads: "ads@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: require("./package.json").dependencies.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: require("./package.json").dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "web",
};
