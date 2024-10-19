export type TBuildMode = "production" | "development";

export interface IBuildPaths {
	entry: string;
	output: string;
	pathHtmlTemplate: string;
}
export interface IBuildOptions {
	mode: TBuildMode;
	paths: IBuildPaths;
	isDev: boolean;
	port: number;
}
export interface IBuildEnvironment {
	mode: TBuildMode;
	port: number;
}
