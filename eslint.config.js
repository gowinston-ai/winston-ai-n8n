const tsParser = require('@typescript-eslint/parser');
const n8nPlugin = require('eslint-plugin-n8n-nodes-base');

module.exports = [
	{
		ignores: ['**/*.js', '**/node_modules/**', '**/dist/**'],
	},

	// package.json — community rules
	{
		files: ['package.json'],
		plugins: { 'n8n-nodes-base': n8nPlugin },
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				extraFileExtensions: ['.json'],
			},
		},
		rules: {
			...n8nPlugin.configs.community.rules,
			'n8n-nodes-base/community-package-json-name-still-default': 'off',
		},
	},

	// credentials
	{
		files: ['credentials/**/*.ts'],
		plugins: { 'n8n-nodes-base': n8nPlugin },
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				sourceType: 'module',
				extraFileExtensions: ['.json'],
			},
		},
		rules: {
			...n8nPlugin.configs.credentials.rules,
			'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off',
		},
	},

	// nodes
	{
		files: ['nodes/**/*.ts'],
		plugins: { 'n8n-nodes-base': n8nPlugin },
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				sourceType: 'module',
				extraFileExtensions: ['.json'],
			},
		},
		rules: {
			...n8nPlugin.configs.nodes.rules,
			'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'off',
			'n8n-nodes-base/node-class-description-outputs-wrong': 'off',
		},
	},
];
