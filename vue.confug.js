let proxyObj = {};
proxyObj['/'] ={
    target:'http://45k1b40509.zicp.vip/',
    ws: false,
    changeOrigin:  true,
    pathRewrite:{
        '^/':''
    }
}

module.exports = {
    devServer:{
        proxy: proxyObj
    }
}