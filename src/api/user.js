// 用户相关接口
import request from "@/utils/request";

/* 
    @param {String} account -账号
    @param {String} password -密码
    @return promise
*/
export const userAccountLogin = ({ account, password }) => {
    return request('/login', 'post', { account, password })
}