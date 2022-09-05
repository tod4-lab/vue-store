module.exports = {
    // 关闭eslint校验工具
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy: {
            // 当路径出现api时，代理服务器开始工作
            // http://localhost:8080/api -> 8080端口的代理服务器 -> http://gmall-h5-api.atguigu.cn/api
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn'
            }
        }
    },
    productionSourceMap: false
}