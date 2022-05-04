const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};
