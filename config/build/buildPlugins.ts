import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

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
    isDev && new ReactRefreshWebpackPlugin(), // хот модуль реплейсмент в дев
    new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean);
}
