import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка для поиска файлов
    use: "ts-loader", // используем лоадер
    exclude: /node_modules/, // исключаем папку
  };

  const fileLoader = {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
    type: "javascript/auto",
  };

  return [typescriptLoader, sassLoader, svgLoader, fileLoader]; // конф лоадеров, обработка других файлов кроме js-ts
}
