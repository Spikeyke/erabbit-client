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


/* 
    获取手机号的短信验证码
    @param {String} mobile - 手机号
    @return promise
*/
export const userMobileLoginMsg = (mobile) => {
    return request('/login/code', 'get', { mobile })
}


/* 
    手机号登录
    @param {String} mobile - 手机号
    @param {String} code 短信验证码，默认123456
    @return promise
*/
export const userMobileLogin = ({ mobile, code }) => {
    return request('/login/code', 'post', { mobile, code })
}


/* 
    @param {String} unionId - QQ唯一标识，openId
    @param {*} source - 客户端类型 PC为1
    @returns
*/
export const userQQLogin = (unionId, source = 1) => {
    return request('/login/social', 'post', { unionId, source })
}


/* 
    获取QQ绑定时的验证码
    @param {String} mobile - 手机号
    @return promise
*/
export const userQQBindCode = (mobile) => {
    return request('/login/social/code', 'get', { mobile })
}



/* 
    QQ登录-绑定账号
    @param {String} unionId  QQ唯一标识，openId
    @param {String} mobile - 手机号
    @param {String} code 短信验证码
    @returns
*/
export const userQQBindLogin = ({ unionId, mobile, code }) => {
    return request('/login/social/bind', 'post', { unionId, mobile, code })
}