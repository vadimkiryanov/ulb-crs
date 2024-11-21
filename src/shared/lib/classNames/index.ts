export const classNames = (mainClass: string, mods: Record<string, boolean> = {}, additionalClass: string[] = []): string => {
	return [
		mainClass, // основный класс
		...additionalClass.filter(Boolean), // дополнительные классы
		...Object.entries(mods) // преобразование объекта в массив
			.filter(([_, value]) => Boolean(value)) // фильтрация
			.map(([className]) => className), // получение ключа
	].join(" "); // объединение массива в строку
};
