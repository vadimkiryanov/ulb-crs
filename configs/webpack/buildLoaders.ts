import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

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

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i, // Регулярное выражение для обработки файлов с расширением .sass и .scss
		use: [
			// В зависимости от режима разработки (isDev) выбирается соответствующий загрузчик стилей:
			// MiniCssExtractPlugin.loader - извлекает CSS из JavaScript и создает отдельные CSS файлы
			// "style-loader" - встраивает CSS в JavaScript
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						// Автоматически включать CSS-модули для файлов, содержащих '.module.' в имени
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),
						// Локальное имя идентификатора для классов CSS:
						// В режиме разработки (isDev) он включает путь и имя файла для удобства отладки
						// В продакшен режиме используется хэш для минимизации размера
						localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
						// namedExport: false, // (опционально) отключает именованные экспорты
					},
				},
			}, // Преобразует CSS в CommonJS
			"sass-loader", // Компилирует Sass в CSS
		],
	};

	// Если не используем TS, то нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/, // Обработка расширений

		// Лоадеры для обработки
		use: ["ts-loader"],
		exclude: /node_modules/, // Исключение
	};

	return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
