var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
// var assetsPath = '/';
// console.log(process.env.DEV_ENV.replace(/\s/g,"") === 'test');
var assetsPath = process.env.DEV_ENV.replace(/\s/g,"") === 'test' ? '/' : '/';
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
			'~': path.resolve(__dirname, '../src/assets'),
			'components': path.resolve(__dirname, '../src/components')
		}
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
				  css: ExtractTextPlugin.extract({
						use: [{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								minimize: true // css压缩
							}
						},{
							loader: 'postcss-loader'
						}],
						fallback: 'style-loader'
				  }),
				  less: ExtractTextPlugin.extract({
						use: [{
								loader: 'css-loader',
								options: {
									importLoaders: 1,
									minimize: true // css压缩
								}
							},{
								loader: 'postcss-loader'
							}, {
								loader: 'less-loader'
						}],
						fallback: 'style-loader'
				  })
				}
			  }
		},{
			test: /\.html$/,
			use: "html-loader"
		},{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				// fallback: "style-loader",
				use:[{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							minimize: true // css压缩
						}
					},{
						loader: 'postcss-loader'
					}
				]
			})
		},{
			test: /\.less$/,
			// use: ExtractTextPlugin.extract(['css-loader?-minimize','postcss-loader','less-loader'])
			use: ExtractTextPlugin.extract({
					// fallback: 'style-loader',
					use: [
							{
									loader: 'css-loader',
									options: {
											importLoaders: 1,
											minimize: true // css压缩
									}
							}, {
								loader: 'postcss-loader'
							}, {
								loader: 'less-loader'
							}
					]
			})
		}, {
			test: /\.json$/,
			use: 'json-loader'
		}, {
			test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
			// use: [`url-loader?limit=8192&name=images/[name].[hash:4].[ext]`, 'img-loader?{bypassOnDebug: true, progressive:true, optimizationLevel: 3, pngquant:{quality: "65-80"}}']
			use: [{
				loader: "url-loader",
				options: {
					limit: 10000,
					name: 'images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
				}
			},{
				loader: 'image-webpack-loader',
        options: {
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // Specifying webp here will create a WEBP version of your JPG/PNG images
          webp: {
            quality: 75
          }
        }
			}]
		}, {
			test: /\.(woff2?|otf|eot|ttf)$/i,
			// use: 'url-loader?name=fonts/[name].[hash:4].[ext]'
			use: [{
				loader: "url-loader",
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
				}
			}]
		}, {
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		}]
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
		new ExtractTextPlugin('css/index.css', { allChunks: true }),
		new webpack.LoaderOptionsPlugin({
			// test: /\.xxx$/, // may apply this only for some modules
			options: {
				postcss: function(){  
					return [  
						require("autoprefixer")({  
							browsers: ['ie>=8','>1% in CN']  
						})  
					]  
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
			  }
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'shared',
			filename: 'js/shared.js'
		}),
		new TransferWebpackPlugin([
			{ from: 'assets/lib', to: 'js'}
		], path.join(__dirname, 'src')),
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
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1.5,
			moveToParents: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.DEV_ENV': JSON.stringify(process.env.DEV_ENV)
		}),
		new CleanWebpackPlugin(
			['dist/*'], // 匹配删除文件目录
			{
				root: __dirname, // 根目录
				verbose:  true, // 开启控制台输出信息
				dry:      false // 启用删除文件
			}
		)
	]
};

module.exports = config;
