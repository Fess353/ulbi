import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// возвращаем массив плагинов
export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html, // использование файла как шаблона
    }), // сборка
    new webpack.ProgressPlugin(), // прогресс сборки
    new MiniCssExtractPlugin({
      filename: "css.[name].[contenthash:8].css",
      chunkFilename: "css.[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin({
      // openAnalyzer: false,
    // })
  ].filter(Boolean);
}
