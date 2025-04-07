import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "../types/config";

export function buildCssLoader(isDev: IBuildOptions["isDev"]) {
	return {
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
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]",
						namedExport: false, // (опционально) отключает именованные экспорты
						exportLocalsConvention: "camel-case-only",
					},
				},
			}, // Преобразует CSS в CommonJS
			"sass-loader", // Компилирует Sass в CSS
		],
	};
}
