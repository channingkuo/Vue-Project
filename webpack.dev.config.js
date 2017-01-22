var config = require("./webpack.config.js");
var webpack = require('webpack');
var webpackDevServer  = require('webpack-dev-server');
config.plugins = [new webpack.HotModuleReplacementPlugin()];
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  clientLogLevel: 'info',
  hot: true,
  inline: true
});
server.listen(8080);
