import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		// Подключение сборки HTML
		new HtmlWebpackPlugin({
			// Использование как шаблона
			template: paths.pathHtmlTemplate,
			favicon: "./public/favicon.png",
		}),
		// Вывод прогресса сборки
		new webpack.ProgressPlugin(),

		// Извлекает CSS из каждого JS-файлов
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css", // Для асинхронных файлов, при ленивой загрузке
		}),
		new webpack.DefinePlugin({
			// Определяем переменную __IS_DEV__ для использования в коде (например, для проверки режима разработки)
			__IS_DEV__: JSON.stringify(isDev),
		}),

		// Плагин для поддержки горячей перезагрузки компонентов React
		new ReactRefreshWebpackPlugin(),
	];

	if (isDev) {
		plugins.push(
			// Плагин для поддержки горячей замены модулей (HMR)
			new webpack.HotModuleReplacementPlugin(),

			// Плагин для анализа бандлов и их размера
			new BundleAnalyzerPlugin({
				openAnalyzer: false, // отключаем автоматическое открытие анализатора
			})
		);
	}

	return plugins;
}
