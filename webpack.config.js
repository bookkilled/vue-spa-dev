var webpack = require('webpack'),
	path = require('path'), // node文件路径操作模块
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	TransferWebpackPlugin = require('transfer-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
		path.resolve(__dirname, 'src/index.js')
	],
	output: {
		path: path.join(__dirname, '/build/'),
		filename: 'build/[name].[hash:4].js',
		chunkFilename: 'build/chunk.[id].[hash:4].js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		},{
			test: /\.html$/,
			use: "html-loader"
		},{
			test: /\.less$/,
			use: ['style-loader','css-loader','less-loader']
		},{
			test: /\.css$/, 
			use: ExtractTextPlugin.extract(['style-loader', 'css-loader','autoprefixer-loader'])
		},{
			test: /\.(jpeg|jpg|gif|png|ico|svg)$/,
			use: 'url-loader?limit=8192&name=build/[name].[hash:4].[ext]'
		}, {
			test: /\.(woff2|woff|otf|eot|ttf)$/i,
			use: 'url-loader?name=fonts/[name].[hash:4].[ext]'
		}, {
			test: /\.json$/,
			use: 'json-loader'
		}, {
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	},
	resolve: {
		modules: [
			'src',
			'node_modules',
			'src/assets'
		],
		extensions: ['*', '.js', '.png', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.common.js',
			'src': path.resolve(__dirname, '../src'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'components': path.resolve(__dirname, '../src/components')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: 'body',
			template: "src/index.tpl.html"
		}),
		new TransferWebpackPlugin([
			{ from: 'assets/lib', to: 'build'},
			{ from: 'mock', to: 'build'}
		], path.join(__dirname, 'src')),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1.5,
			moveToParents: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	devtool: 'source-map'
};