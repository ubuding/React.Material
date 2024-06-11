const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Gzip = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  mode: "production",
  output: {
    filename: "static/js/[name].[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist/public"),
        },
      ],
    }),
    new Gzip(),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: "advanced",
        },
      }),
    ],
    // splitChunks: {
    //   minSize: 10000,
    //   cacheGroups: {
    //     // react: {
    //     //   chunks: "all",
    //     //   test: /[\\/]node_modules[\\/].*react(.*)/,
    //     //   priority: 80,
    //     //   name: "react",
    //     // },
    //     // lodash: {
    //     //   chunks: "all",
    //     //   test: /[\\/]node_modules[\\/].*lodash(.*)/,
    //     //   priority: 80,
    //     //   name: "lodash",
    //     // },
    //   },
    // },
  },
};
