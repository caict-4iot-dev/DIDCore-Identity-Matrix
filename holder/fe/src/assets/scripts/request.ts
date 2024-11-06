import axios, { AxiosInstance } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Session } from '/@/assets/scripts/storage';
import qs from 'qs';
import { checkStatus } from './checkStatus';
// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "http://127.0.0.1:7001/",
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: {
        serialize (params) {
            return qs.stringify(params, { allowDots: true });
        },
    },
});

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么 token
        if (Session.get('token')) {
            config.headers!['Token'] = `${Session.get('token')}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么 
        const res = response.data;
        // if (res.code && res.code !== 0) { 
        // 	// `token` 过期或者账号已在别处登录
        // 	return Promise.reject(new Error(res.msg || 'Error')); 
        // } else {  
        // }
        return response.data;

    },
    (error) => {
        const { code, message, config } = error || {};
        const errorMessageMode = config?.requestOptions?.errorMessageMode || 'message';
        const err: string = error?.toString?.() ?? '';
        let errMessage = '';
        try {
            if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
                errMessage = '接口请求超时,请刷新页面重试!';
            }
            if (err?.includes('Network Error')) {
                errMessage = '网络异常，请检查您的网络是否正常';
            }

            if (errMessage) {
                if (errorMessageMode === 'modal') {
                    ElMessageBox.alert(errMessage, '错误提示')
                } else if (errorMessageMode === 'message') {
                    ElMessage.error(errMessage)
                }
                return Promise.reject(error);
            }
        } catch (error) {
            throw new Error(error as unknown as string);
        }

        checkStatus(error, errorMessageMode);

        return Promise.reject(error);
    }
);

// 导出 axios 实例
export default service;
