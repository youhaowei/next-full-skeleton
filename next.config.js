// next.config.js
const withSourceMaps = require("@zeit/next-source-maps");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withSourceMaps({
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
			use: {
				loader: "url-loader",
				options: {
					limit: 8192,
					publicPath: "/_next/static/",
					outputPath: "static/",
					name: "[name].[ext]"
				}
			}
		});
		config.module.rules.push({
			test: /\.(less)$/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
		});
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css"
				//filename: "./css/[name].css"
			})
		);
		config.resolve.alias["../../theme.config$"] = path.join(
			__dirname,
			"semantic-ui/theme.config"
		);
		config.resolve.alias["../semantic-ui/themes"] = path.join(
			__dirname,
			"semantic-ui/themes"
		);
		config.resolve.alias["../semantic-ui/site"] = path.join(
			__dirname,
			"/semantic-ui/site"
		);
		return config;
	}
});
