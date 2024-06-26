/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    entry: "./src/main.tsx",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "../.ubuding"),
      clean: true,
    },
    devServer: {
      proxy: [
        {
          context: ["/oioweb"],
          target: "https://api.oioweb.cn/",
          ws: false,
          secure: false,
          changeOrigin: true,
          pathRewrite: { "^/oioweb": "" },
        },
      ],
      static: [
        {
          directory: path.join(__dirname, "../public"),
          publicPath: "/public",
        },
      ],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
        },
        {
          test: /\.(scss|sass|css)$/i,
          use: [
            env.development
              ? "style-loader"
              : {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "static/images/[contenthash:8][ext]",
          },
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024,
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "static/fonts/[hash:8][ext]",
          },
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "../src/modules"),
        "#": path.resolve(__dirname, "../src/components"),
        layout: path.resolve(__dirname, "../src/layout"),
        style: path.resolve(__dirname, "../src/style"),
        assets: path.resolve(__dirname, "../src/assets"),
        i18n: path.resolve(__dirname, "../src/i18n.ts"),
        request: path.resolve(__dirname, "../src/request.ts"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: "static/style/[contenthash:8].css",
      }),
    ],
  };
};
