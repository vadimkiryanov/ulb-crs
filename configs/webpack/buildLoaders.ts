import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

// Лоадеры позволяют webpack обрабатывать не только JavaScript файлы, но и другие типы файлов (CSS, изображения, шрифты и т.д.).
export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	const svgLoader = buildSvgLoader();

	const cssLoader = buildCssLoader(isDev);

	// Если не используем TS, то нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/, // Обработка расширений

		// Лоадеры для обработки
		use: ["ts-loader"],
		exclude: /node_modules/, // Исключение
	};

	return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
