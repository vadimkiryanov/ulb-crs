import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { IBuildOptions, IBuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin  from'@pmmmwh/react-refresh-webpack-plugin';


export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
	return [
		// Подключение сборки HTML
		new HtmlWebpackPlugin({
			// Использование как шаблона
			template: paths.pathHtmlTemplate,
		}),
		// Вывод прогресса сборки
		new webpack.ProgressPlugin(),

		// Извлекает CSS из каждого JS-файлов
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css", // Для асинхронных файлов, при ленивой загрузке
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
    new ReactRefreshWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	];
}
