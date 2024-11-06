import request from '/@/assets/scripts/request';
import { ServicePrefixEnum } from '/@/assets/scripts/commonEnum';
// 获取用户信息
export function getUserInfoById() {
	return request({
		url: `${ServicePrefixEnum.OAUTH}/anyone/getUserInfoById`,
		method: 'get',
        timeout: 2 * 60 * 1000,
	});
}
// 加载验证码
export function loadCaptcha(params:object) {
	return request({
		url: `${ServicePrefixEnum.OAUTH}/anyTenant/captcha`,
		method: 'get',
        params,
        responseType: 'arraybuffer'
	});
}
// 登录
export function login(data:object) {
	return request({
		url: `${ServicePrefixEnum.OAUTH}/anyTenant/login`,
		method: 'post',
        data,
	});
}
