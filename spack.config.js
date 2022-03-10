const { config } = require("@swc/core/spack");
const { join } = require("node:path");

module.exports = config({
	entry: {
		index: join(__dirname, 'src/index.ts')
	},
	output: {
		path: join(__dirname, 'dist')
	},
	module: {}
});
