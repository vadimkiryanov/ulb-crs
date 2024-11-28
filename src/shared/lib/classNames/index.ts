export const classNames = (mainClass: string, mods: Record<string, boolean> = {}, additionalClass: string[] = []): string => {
	return [
		mainClass, // основный класс
		...Object.entries(mods) // преобразование объекта в массив
			.filter(([_, value]) => Boolean(value)) // фильтрация
			.map(([className]) => className), // получение ключа
		...additionalClass.filter(Boolean), // дополнительные классы
	].join(" "); // объединение массива в строку
};
