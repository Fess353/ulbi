import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoader";
import { buildSvgLoaders } from "./loaders/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const svgLoader = buildSvgLoaders();

  const sassLoader = buildCssLoaders(isDev);

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

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader]; // конф лоадеров, обработка других файлов кроме js-ts
}
