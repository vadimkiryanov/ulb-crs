// Конфиг вебпака

// Импорт пути
import path from "path";

// Импорт плагинов
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildPaths } from "./config/build/types/config";

const paths: IBuildPaths = {
	entry: path.resolve(__dirname, "src", "index.ts"),
	output: path.resolve(__dirname, "dist"),
	pathHtmlTemplate: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
	mode: mode,
	paths,
	isDev: isDev,
});

export default config;

// module.exports - аналог обычно exports, но для nodejs
