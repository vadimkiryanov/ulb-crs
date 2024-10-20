import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i, // Регулярка настроена на sass and scss
		use: [
			"style-loader", // Creates `style` nodes from JS strings
			"css-loader", // Translates CSS into CommonJS
			"sass-loader", // Compiles Sass to CSS
		],
	};

	// Если не используем TS, то нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/, // Обработка расширений

		// Лоадеры для обработки
		use: ["ts-loader"],
		exclude: /node_modules/, // Исключение
	};

	return [typescriptLoader, cssLoader];
}
