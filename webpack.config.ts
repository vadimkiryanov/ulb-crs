// Конфиг вебпака

// Импорт пути
import path from "path";

// Импорт плагинов
import webpack from "webpack";
import { buildWebpackConfig } from "./configs/webpack/buildWebpackConfig";
import { IBuildEnvironment, IBuildPaths } from "./configs/webpack/types/config";

// Должен быть экспорт ф-и, так как мы принимаем переменные при запуске приложения
export default (env: IBuildEnvironment) => {
	const paths: IBuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		output: path.resolve(__dirname, "dist"),
		pathHtmlTemplate: path.resolve(__dirname, "public", "index.html"),
	};

	const MODE = env.mode || "development";
	const isDev = MODE === "development";
	const PORT = env.port || 3000;

	const config: webpack.Configuration = buildWebpackConfig({
		mode: MODE,
		paths,
		isDev: isDev,
		port: PORT,
	});

	return config;
};

// module.exports - аналог обычно exports, но для nodejs
