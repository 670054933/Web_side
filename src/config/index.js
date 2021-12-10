module.exports ={
    dev: {
        assetsSbuDirectory:'static',
        assetsPublicPath: '/',
        proxyTable:{
            '/apis/':{
                target:"http://45k1b40509.zicp.vip",
                changeOrigin:true,
                pathRewrite:{
                    '^/apis':'http://45k1b40509.zicp.vip'
                }
            }
        }
    }
}