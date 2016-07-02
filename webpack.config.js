var path = require('path'),
    webpack = require('webpack'),
    constants = require('./constants.js');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname + '/' + constants.CLIENT_APP_PATH + '/index.js')
    ],
    output: {
        path: path.join(__dirname, constants.DIST_PATH),
        filename: constants.OUTPUT_FILENAME,
        publicPath: path.join(__dirname, constants.PUBLIC_ASSETS_PATH)
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
};
