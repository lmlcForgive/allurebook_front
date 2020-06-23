module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '倾城书阁'
        return args
      })
  },
  devServer: {
    open: true,
    port: 8083,
    proxy: {
      '/api': {
        // target: 'https://49.232.202.80:8084',
        target: 'https://localhost:8084', // 域名
        ws: true, // 是否启用websockets
        changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRequiresRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
