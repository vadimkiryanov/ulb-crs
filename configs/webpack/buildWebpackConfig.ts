import path from "path";

import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode: mode, // development | production
		// Стартовая точка нашего приложения, влияет на filename: "[name].js"
		entry: paths.entry,
		// Выходной файл
		output: {
			filename: "[name].[contenthash].js", // Название выгруженного файла
			path: paths.output, // Куда выгружать
			clean: true, // Очищает папку dist от мусора
		},

		// Подключение плагинов
		plugins: buildPlugins({ pathHtmlTemplate: paths.pathHtmlTemplate }),
		module: {
			// Правила для обработки файлов, которые не являются JS файлами (TS, images, css and etc.)
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: isDev ? "inline-source-map" : undefined, // "inline-source-map" - Для вывод ошибок в конкретных файлах
		devServer: isDev ? buildDevServer(options) : undefined, // devServer - Запуск приложения локально
	};
}
