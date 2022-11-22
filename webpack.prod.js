const glob = require('glob');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = merge(common(true), {
    mode: 'production',
    devtool: false,
    plugins: [
        new PurgecssPlugin({
            paths: glob.sync(`${__dirname}/resources/views/**/*`,  { nodir: true }),
            safelist: () => {
                return {
                    standard: [
                        /^hljs/,
                        /^pre/,
                        /^code/,
                        /^px-3/,
                        /^sm:px-4/,
                        /^py-2.5/,
                        /^md:flex/,
                        /^sm:flex/,
                        /^md:hidden/,
                        /^md:w-auto/,
                        /^md:block/,
                        /^md:mr-10/,
                        /^md:mt-10/,
                        /^md:mt-3/,
                        /^md:mt-0/,
                        /^md:mb-0/,
                        /^md:p-0/,
                        /^md:mr-0/,
                        /^md:mb-4/,
                        /^md:h-36/,
                        /^sm:mr-4/,
                        /^sm:mt-0/,
                        /^md:w-full/,
                        /^sm:w-52/,
                        /^md:max-h-max/,
                        /^md:bg-transparent/,
                        /^gap-4/,
                        /^md:text-sm/,
                        /^md:text-primary/,
                        /^md:border-0/,
                    ],
                    deep: [
                        /^return-to-top/,
										    /^md:space-x-8/,
                    ],
                    greedy: [],
                };
            }
        }),
    ],
});
