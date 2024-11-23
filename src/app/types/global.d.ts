declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export = classes;
}

declare module "*.svg" {
	import React from "react";
	export const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
declare module "*.png" 
declare module "*.jpg" 
declare module "*.jpeg" 

declare const __IS_DEV__: boolean