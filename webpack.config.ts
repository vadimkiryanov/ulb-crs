// Конфиг вебпака

// Импорт пути
import path from "path";

// Импорт плагинов
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
	mode: "development", // development | production
	// Стартовая точка нашего приложения, влияет на filename: "[name].js"
	entry: {
		main: path.resolve(__dirname, "src", "index.ts"), // __dirname - где находимся, далее через запятую передаем пути
	},

	module: {
		// Правила для обработки файлов, которые не являются JS файлами (TS, images, css and etc.)
		rules: [
			{
				test: /\.tsx?$/, // Обработка расширений
				use: "ts-loader", // Лоадер для обработки
				exclude: /node_modules/, // Исключение
			},
		],
	},

	resolve: {
		// При импорте позволяет не указывать расширение
		extensions: [".tsx", ".ts", ".js"],
	},
	// Выходной файл
	output: {
		filename: "[name].[contenthash].js", // Название выгруженного файла
		path: path.resolve(__dirname, "dist"), // Куда выгружать
		clean: true, // Очищает папку dist от мусора
	},

	// Подключение плагинов
	plugins: [
		// Подключение сборки HTML
		new HtmlWebpackPlugin({
			// Использование как шаблона
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		// Вывод прогресса сборки
		new webpack.ProgressPlugin(),
	],
};

export default config;

// module.exports - аналог обычно exports, но для nodejs
