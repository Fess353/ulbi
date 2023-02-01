import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// возвращаем массив плагинов
export function buildPlugins ({paths}: BuildOptions):webpack.WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
		  template: paths.html, // использование файла как шаблона
		}), // сборка
		new webpack.ProgressPlugin(), // прогресс сборки
		new  MiniCssExtractPlugin({
			filename: 'css.[name].[contenthash:8].css',
			chunkFilename: 'css.[name].[contenthash:8].css',
		})
	  ] 
}