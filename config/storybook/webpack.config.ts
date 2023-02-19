import { BuildPaths } from "../build/types/config";
import path from "path";
import webpack from "webpack";

import { buildCssLoaders } from "../../config/build/loaders/buildCssLoader";
import { buildSvgLoaders } from "../../config/build/loaders/buildSvgLoader";

// [ВОПРОС] : Объясни, пожалуйста, вот эту конструкцию ({ config }: { config: webpack.Configuration }). Почему не работает вот так ({ config: webpack.Configuration }) ?

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src); // настраиваем пути
  config.resolve?.extensions?.push(".ts", ".tsx"); // указываем расширения

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map(
      (rule: webpack.RuleSetRule | "...") => {
        if (rule !== "..." && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }
    );
  }
  config.module?.rules?.push(buildSvgLoaders()); // добавляем обработку svg
  config.module?.rules?.push(buildCssLoaders(true)); // добавляем обработку scss
  return config;
};
