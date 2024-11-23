import { IBuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
	return {
		// Порт, на котором будет запущен dev-сервер
		port: options.port,
		// Автоматически открывать браузер при запуске сервера
		open: true,
		// Перенаправление всех запросов к корневому файлу (index.html) для поддержки истории API
		historyApiFallback: true,
		hot: true,
	};
}
