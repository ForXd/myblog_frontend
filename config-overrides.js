const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#000'}
    }),
    addLessLoader(
    // .ts(x) 文件应该首先经过 Typescript loader 的处理, 然后是 babel 的处理
    { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src') }
    )
);