const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    devServer: {
	watchFiles: ['frontend/index.html']
    },
    entry: './frontend/app.js',
    output: {
	path: path.join(__dirname, 'backend/public'),
	filename: 'js/bundle.js'
    },
    // Change on deploy
    mode: 'production',
    module: {
	rules: [{
	    test: /\.css/,
	    use: [
		devMode ? 'style-loader': MiniCssExtractPlugin.loader,
		'css-loader'
	    ]
	}]
    },
    plugins: [
	new HtmlWebpackPlugin({
	    template: './frontend/index.html',
	    minify: {
		collapseWhitespace:         true,
		removeComments:             true,
		removeRedundatnAttributes:  true,
		removeScriptTypeAttributes: true,
		removeStyleLinkAttributes:  true,
		useShortDocType:            true,
	    }
	}),
	new MiniCssExtractPlugin({
	    filename: 'css/bundle.css'
	})
    ],
    devtool: 'source-map'
};
