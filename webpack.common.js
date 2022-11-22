const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
// const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

// const isProd = "production" === process.env.NODE_ENV;
const ASSET_PATH = process.env.ASSET_PATH || '/dist/';

module.exports = (isProd) => {
	return {
		entry: {
			main: path.join(__dirname, 'src', 'css', 'main.css'),
		},
		output: {
			path: path.join(__dirname, 'dist'),
			filename: '[name].js',
			pathinfo: false,
			publicPath: ASSET_PATH,
		},
		module: {
			rules: [
				{
					test: /src\/css\/(.+)\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: !isProd
							}
						},
						{
							loader: 'postcss-loader',
						},
					],
				},
			],
		},
		resolve: {
			modules: [
				`${__dirname}/node_modules`,
			],
		},
		optimization: {
			/*splitChunks: {
				chunks: 'initial',
				minChunks: 2,
				name: 'vendor',
			},*/
		},
		plugins: [
			new RemoveEmptyScriptsPlugin(),
			// new FixStyleOnlyEntriesPlugin(),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css",
			}),
		],
	}
};
