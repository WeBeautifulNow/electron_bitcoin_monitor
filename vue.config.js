module.exports = {
    devServer: {
      proxy: {
        '/v1': {
          target: 'https://openapi.58ex.com/', //对应自己的接口
          changeOrigin: true,
          ws: true
        }
      }
    }
  }