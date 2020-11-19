import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomeHomedata() {
  return request({
    url:'/home/homedata'
  })
}
