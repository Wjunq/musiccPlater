import ajax from "./ajax";

//  用请求banner的数据
export const reqBannerList = () => ajax.get('/banner?type=0')
// 用于登录的请求
export const reqLogin = (phone,password) => ajax.post(`/login/cellphone?phone=${phone}&password=${password}&captcha=`)
// 用于获取歌手分类列表
export const reqSingerList = ({type,area,offset})=>ajax.get(`/artist/list?type=${type}&area=${area}&offset=${offset}`)
// 用于请求歌手的全部歌曲
export const reqSingerAll = (id,offset)=>ajax.get(`/artist/songs?id=${id}&limit=30&offset=${offset}`)

// 用于请求音乐Url的回调,服务器更新了有问题
// export const reqMusicUrl = (id) => ajax.get(`/song/url?id=${id}`)

// 用于请求发送手机验证码的回调
export const reqSendPhoneVerify = (phone) => ajax.get(`/captcha/sent?phone=${phone}`)
// 用于请求验证验证码是否成功
export const reqCaptchaIsOk = (phone,captcha) => ajax.get(`/captcha/verify?phone=${phone}&captcha=${captcha}`)