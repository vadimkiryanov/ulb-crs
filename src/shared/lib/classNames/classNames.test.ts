import { classNames } from ".";

describe("classNames", () => {
	test("with 1 arg", () => {
		// expect(classNames("someClass")).toBe("someClass");
		expect(classNames("someClass")).toBe("someClass");
	});

	test("with 2 args", () => {
		const expected = "someClass class1 class2";
		expect(classNames("someClass", { class1: true, class2: true })).toBe(expected);
	});
	test("with 2 args - v2", () => {
		const expected = "someClass class1 class2";
		expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
	});

	test("with 3 args", () => {
		const expected = "someClass class1 class3";
		expect(classNames("someClass", { class1: true, class2: false }, ["class3"])).toBe(expected);
	});
	test("with undefined args", () => {
		const expected = "someClass class1";
		expect(classNames("someClass", { class1: true, class2: undefined }, [])).toBe(expected);
	});
});
