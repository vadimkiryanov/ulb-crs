import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
	return {
		// При импорте позволяет не указывать расширение
		extensions: [".tsx", ".ts", ".js"],
	};
}
