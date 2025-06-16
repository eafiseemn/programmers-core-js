import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const types = {
	isObject: true,
	isArray: true,
	isNull: true,
	isString: true,
	isNumber: true,
	isUndefined: true,
}

const inserts = {
	insert: true,
	insertBefore: true,
	insertFirstChild: true,
	insertLastChild: true,
	insertAfter: true,
}

const cssClass = {
	addClass: true,
	removeClass: true,
	toggleClass: true,
}

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: { js },
		extends: ["js/recommended"],
	},
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: { 
			globals: { 
				...globals.browser, 
				...globals.node,
				...types,
				...inserts,
				...cssClass,
				getNode: true,
				getNodes: true,
				gsap: true,
			} },
		rules: { "no-unused-vars": "off" },
	},
]);
