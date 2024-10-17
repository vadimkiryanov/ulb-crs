import path from "path";

import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types/config";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
	const { mode, paths } = options;

	return {
		mode: mode, // development | production
		// Стартовая точка нашего приложения, влияет на filename: "[name].js"
		entry: paths.entry,

		// Подключение плагинов
		plugins: buildPlugins({ pathHtmlTemplate: paths.pathHtmlTemplate }),
		module: {
			// Правила для обработки файлов, которые не являются JS файлами (TS, images, css and etc.)
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),

		// Выходной файл
		output: {
			filename: "[name].[contenthash].js", // Название выгруженного файла
			path: paths.output, // Куда выгружать
			clean: true, // Очищает папку dist от мусора
		},
	};
}
