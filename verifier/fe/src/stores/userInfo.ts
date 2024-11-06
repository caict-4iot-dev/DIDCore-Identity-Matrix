import { defineStore } from 'pinia';
import { Session } from '/@/assets/scripts/storage';
import {getUserInfoById,login} from '/@/api/oauth/index'
/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfo = defineStore('userInfo', {
	state: (): UserInfosState => ({
		userInfos: {} as any,
        token: ''
	}),
	actions: {
        async setToken(token:string){
            // 存储token到浏览器缓存
			if (Session.get('token')) {
				this.token = Session.get('token')
			} else {
				Session.set('token',token)
                this.token = token
			}
        },
		async setUserInfos() {
			// 存储用户信息到浏览器缓存
			if (Session.get('userInfo')) {
				let userInfos = Session.get('userInfo')

				this.userInfos = {...userInfos};
			} else {
				let userInfos: any = await this.getApiUserInfo();

				Session.set('userInfo',{...userInfos})
				this.userInfos = {...userInfos};
			}
		},
		async setUserInfosApi(){
			return new Promise((resolve,reject) => {
				this.getApiUserInfo().then(response => {
					const userInfos = response as any;
					Session.set('userInfo',{...userInfos})
					this.userInfos = {...userInfos};
					resolve(userInfos);
				}).catch(error => {
					reject(error);
				});
			});
		},
		// 用户信息
		async getApiUserInfo() {
			return new Promise((resolve,reject) => {
				getUserInfoById().then(response => {
					const { data } = response;
					// 用户信息
					const userInfos = { ...data };
					userInfos.roles = []
					userInfos.roles.push('admin')
					resolve(userInfos);
				}).catch(error => {
					reject(error);
				});
			});
		},
		// 登录
		async loginApi(params:object) {
			return new Promise((resolve,reject) => {
				login(params).then(({data}) => {
					const { token } = data
                    this.setToken(token)
					resolve(data);
				}).catch(error => {
					reject(error);
				});
			});
		},
	},
});
