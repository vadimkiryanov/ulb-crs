import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/, // Обработка расширений
		use: "ts-loader", // Лоадер для обработки
		exclude: /node_modules/, // Исключение
	};

	return [typescriptLoader];
}
