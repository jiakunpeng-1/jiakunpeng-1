module.exports = {
    publicPath: "./",
    // 输出文件目录
    outputDir: "dist",
    // 静态资源存放的文件夹(相对于ouputDir)
    assetsDir: "static",
    // 不需要生产环境的设置false可以减小dist文件大小，加速构建
    productionSourceMap: false,
    // configureWebpack: {
    //     // devtool
    //     devtool: "source-map",
    // },
    // chainWebpack: config => {
    //   // config.modulea
    //   //   .rule('css')
    //   //   .test(/\.css$/)
    //   //   .oneOf('vue')
    //   //   .resourceQuery(/\?vue/)
    //   //   .use('px2rem')
    //   //   .loader('px2rem-loader')
    //   //   .options({
    //   //     remUnit: 75
    //   //   })
    // },
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.stg-smartlearning.com/download/new/public/weixin.php?s=/index/Indexf/share", //跨域请求资源地址
                ws: false, //是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": "", //本地的json文件地址或者是接口上的地址，不设也行
                },
            },
        },
    },
}