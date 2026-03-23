const baseConfig = require('./eslint.config.js');
const n8nPlugin = require('eslint-plugin-n8n-nodes-base');

module.exports = [
	...baseConfig,

	// Override: enforce community-package-json-name-still-default on publish
	{
		files: ['package.json'],
		plugins: { 'n8n-nodes-base': n8nPlugin },
		rules: {
			'n8n-nodes-base/community-package-json-name-still-default': 'error',
		},
	},
];
