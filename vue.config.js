module.exports = {
    devServer: {
        port: 8888,
        host: 'localhost',
        https: false,
        open: true, // 启动服务时自动打开
        
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin:true,
                pathRewrite: {
                    ['^'+process.env.VUE_APP_BASE_API]:'',
                }
            }
        }
    },
    lintOnSave: false, // 关闭格式检查
    productionSourceMap: false, // 打包时不会生成.map文件，加快打包速度
}