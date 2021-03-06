/** @typedef {import('prettier').Options} PrettierOptions */

/**
 * @typedef WPPrettierOptions
 *
 * @property {boolean} [parenSpacing=true] Insert spaces inside parentheses.
 */

// Disable reason: The current JSDoc tooling does not yet understand TypeScript
// union types.

/* eslint-disable jsdoc/valid-types */
/** @type {PrettierOptions & WPPrettierOptions} */
/* eslint-enable jsdoc/valid-types */
const config = {
	useTabs: true,
	tabWidth: 4,
	printWidth: 80,
	singleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	parenSpacing: true,
	jsxBracketSameLine: false,
	semi: true,
	arrowParens: 'always',
};

module.exports = config;
