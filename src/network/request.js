import axios from 'axios'


export function request(config) {
  const instance = axios.create({
    baseURL:'http://127.0.0.1:8000',
    timeout:5000//毫秒，超过时间报错，没有获取到
  })

  instance.interceptors.request.use(config=>{
    // console.log(config)
    return config
  }, error => {
    // console.log(error)
    })

  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data.data
  },error=>{
    // console.log(error)
  })
  //发送真正的网络请求
  return instance(config)
}
