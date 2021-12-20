module.exports ={
    dev: {
        assetsSbuDirectory:'static',
        assetsPublicPath: '/',
        proxyTable:{
            '/apis/':{
                target:"http://team19.vipgz4.91tunnel.com",
                changeOrigin:true,
                pathRewrite:{
                    '^/apis':'http://team19.vipgz4.91tunnel.com/'
                }
            }
        }
    }
}