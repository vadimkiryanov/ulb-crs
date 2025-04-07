import path from "path";
import { IBuildPaths } from "../webpack/types/config";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../webpack/loaders/buildCssLoader";
import { buildSvgLoader } from "configs/webpack/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: IBuildPaths = {
		entry: "",
		output: "",
		pathHtmlTemplate: "",
		src: path.resolve(__dirname, "..", "..", "src"),
	};

	config.resolve.alias = {
		...config.resolve.alias,
		"@": path.resolve(__dirname, "../../src"),
	};

	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push(".ts", ".tsx");
	config.module.rules.push(buildSvgLoader(), buildCssLoader(true));

	return config;
};
