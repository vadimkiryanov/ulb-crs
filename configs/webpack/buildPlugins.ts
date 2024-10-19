import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { IBuildPaths } from "./types/config";

export function buildPlugins({ pathHtmlTemplate }: { pathHtmlTemplate: IBuildPaths["pathHtmlTemplate"] }): webpack.WebpackPluginInstance[] {
	return [
		// Подключение сборки HTML
		new HtmlWebpackPlugin({
			// Использование как шаблона
			template: pathHtmlTemplate,
		}),
		// Вывод прогресса сборки
		new webpack.ProgressPlugin(),
	];
}
