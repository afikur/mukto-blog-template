var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin')

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	entry: {
		app: [
			'./src/main.js',
			'./src/main.scss'
		],
		vendor: ['jquery']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},

	module: {
		rules: [
	    	{
	    		test:/\.s[ac]ss$/,
	    		use: ExtractTextPlugin.extract({
	    			use: ['css-loader', 'sass-loader'],
	    			fallback: 'style-loader'
	    		})
	    	},
	    	{
	    		test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
	    		loader: 'file-loader',
	    		options: {
	    			name: 'images/[name].[hash].[ext]'
	    		}
	    	},
	    	{ 
	    		test: /\.css$/, 
	    		use: ['style-loader', 'css-loader'] 
	    	}
	    ]
	},

	plugins: [
		new ExtractTextPlugin('[name].css'),
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		})
	]
}

if(inProduction) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		})
	);
}