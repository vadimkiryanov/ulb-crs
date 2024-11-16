import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { IBuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ pathHtmlTemplate }: { pathHtmlTemplate: IBuildPaths["pathHtmlTemplate"] }): webpack.WebpackPluginInstance[] {
	return [
		// Подключение сборки HTML
		new HtmlWebpackPlugin({
			// Использование как шаблона
			template: pathHtmlTemplate,
		}),
		// Вывод прогресса сборки
		new webpack.ProgressPlugin(),

    // Извлекает CSS из каждого JS-файлов
		new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css", // Для асинхронных файлов, при ленивой загрузке
    }),
	];
}
