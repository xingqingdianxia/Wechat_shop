// 主要是对 wx.request 方法进行封装
// 1. 用 Promise 封装

function request (url, method = 'GET') {
    return new Promise((resolve,reject)=>{
        wx.request(
            {
                url,
                method,
                success:res=>{
                    resolve(res)
                }
            }
        )
    })
}

export default request