import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolvers(options: IBuildOptions): webpack.ResolveOptions {
	return {
		// При импорте позволяет не указывать расширение (.tsx, .ts, .js)
		extensions: [".tsx", ".ts", ".js"],
		// Предпочитать абсолютные пути при разрешении модулей
		preferAbsolute: true,
		// Каталоги, в которых Webpack будет искать модули
		modules: [options.paths.src, "node_modules"],
		// Основные файлы, которые будут использоваться при импорте директории
		mainFiles: ["index"],
		// Псевдонимы для путей, чтобы упростить импорт модулей
		alias: {
			// Псевдоним "@" заменяет путь до src директории
			"@": options.paths.src,
		},
	};
}
