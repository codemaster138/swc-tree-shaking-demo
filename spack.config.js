const { config } = require("@swc/core/spack");
const { join } = require("node:path");

module.exports = config({
	entry: {
		node: join(__dirname, 'src/index.ts')
	},
	output: {
		path: join(__dirname, 'pack')
	},
	module: {}
});
