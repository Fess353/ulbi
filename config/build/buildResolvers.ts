import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options:BuildOptions):ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], // экспорт без расширений
    preferAbsolute: true, //преподчительно абсолютные пути
    modules: [options.paths.src, 'node_modules'],
    alias: {}, //указание пустого элиаса с прописанным модульс позволяет обращаться к папкам без @
    mainFiles: ['index'], // указание главного файла модуля
  }; 
}
