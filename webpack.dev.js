const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = merge(common(false), {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new WebpackErrorNotificationPlugin(process.platform, {notifyWarnings: false}),
    ],
});
