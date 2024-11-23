import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	// Подключаем плагин Backend для загрузки переводов
	.use(Backend)
	// Подключаем плагин определения языка пользователя
	.use(LanguageDetector)
	// Подключаем плагин для интеграции с React
	.use(initReactI18next)
	// Инициализируем i18n с настройками
	.init({
		// Устанавливаем язык по умолчанию, если перевод на нужный язык отсутствует
		fallbackLng: "ru",
		// Включаем режим отладки (в продакшене рекомендуется выключить)
		debug: __IS_DEV__ ? true : false,

		interpolation: {
			// Отключаем экранирование, так как React уже делает это
			escapeValue: false,
		},

		// Подключаем бэкенд для загрузки переводов
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
	});

// Экспортируем настроенный экземпляр i18n для использования в приложении
export default i18n;
