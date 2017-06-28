var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
// var assetsPath = '/';
// console.log(process.env.DEV_ENV.replace(/\s/g,"") === 'test');
var assetsPath = process.env.DEV_ENV.replace(/\s/g,"") === 'test' ? '' : '';
console.log(assetsPath);

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
	cache: true,
	entry: {
		app: path.resolve(__dirname, 'src/index.js'),
		// 常用js
		shared: [
			'babel-polyfill',
			'vue',
			'vue-router',
			'vuex',
			'reqwest'
		]
	},
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'js/index.js',
		chunkFilename: 'js/chunk.[id].[hash:4].js',
		//cdn host
		publicPath: assetsPath
	},
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules',
			'src/assets'
		],
		extensions: ['', '.js', '.png', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.common.js',
			'src': path.resolve(__dirname, '../src'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'components': path.resolve(__dirname, '../src/components')
		}
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.html$/,
			loader: "html"
		},{
			test: /\.less$/,
			loader: ExtractTextPlugin.extract('css?-minimize!less')
		}, {
			test: /\.json?$/,
			loader: 'json'
		}, {
			test: /\.(jp?g|gif|png|woff|ico)$/,
			loaders: ['url-loader?name=images/[name].[hash:4].[ext]', 'img?{bypassOnDebug: true, progressive:true, optimizationLevel: 3, pngquant:{quality: "65-80"}}']
		}, {
			test: /\.(woff2?|otf|eot|ttf)$/i,
			loader: 'url?name=fonts/[name].[hash:4].[ext]'
		}, {
			test: /\.(js)$/,
			exclude: /node_modules/,
			loaders: ['babel']
		}]
	},
	imagemin: {
		gifsicle: {
			interlaced: false
		},
		jpegtran: {
			progressive: true,
			arithmetic: false
		},
		optipng: {
			optimizationLevel: 5
		},
		pngquant: {
			floyd: 0.5,
			speed: 2
		},
		svgo: {
			plugins: [{
				removeTitle: true
			}, {
				convertPathData: false
			}]
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new StatsPlugin('webpack.stats.json', {
			source: false,
			modules: true
		}),
		new ExtractTextPlugin('css/index.css'),
		new webpack.optimize.CommonsChunkPlugin('shared', 'js/shared.js'),
		new TransferWebpackPlugin([
			{ from: 'assets/lib', to: 'js'}
		], path.join(__dirname, 'src')),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			cache: false,
			compressor: {
				warnings: false,
				screw_ie8: false
			},
			output: {
				comments: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1.5,
			moveToParents: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.DEV_ENV': JSON.stringify(process.env.DEV_ENV)
		})
	]
};

module.exports = config;
