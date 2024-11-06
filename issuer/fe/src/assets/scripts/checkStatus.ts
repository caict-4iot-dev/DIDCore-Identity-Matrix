import { ElMessage, ElMessageBox } from 'element-plus';  
import { Session } from '/@/assets/scripts/storage';
export function checkStatus(err: any, errorMessageMode = 'message'): void {
  const { response, request } = err || {};
  const msg: string = response?.data?.msg ?? '';
  const status: number = response?.status; 
 
  let errMessage = '';  
  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break; 
    case 401:  
      errMessage = msg || '用户没有登录或登录已过期!';
      Session.clear(); 
      break;
    case 403:
      errMessage = '用户已经登录，但是没有访问权限!';
      break;
    // 404请求不存在
    case 404:
      errMessage = '网络请求错误,未找到该资源!';
      break;
    case 405:
      errMessage = '网络请求错误,请求方法未允许!';
      break;
    case 408:
      errMessage = '网络请求超时!';
      break;
    case 500:
      errMessage = '服务器错误,请联系管理员!';
      break;
    case 501:
      errMessage = '网络未实现!';
      break;
    case 502:
      errMessage = '网络错误!';
      break;
    case 503:
      errMessage = '服务不可用，服务器暂时过载或维护!';
      break;
    case 504:
      errMessage = '网络超时!';
      break;
    case 505:
      errMessage = 'http版本不支持该请求!';
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') { 
      ElMessageBox.alert(errMessage, '错误提示') 
    } else if (errorMessageMode === 'message') { 
      ElMessage.error(errMessage)
    }
  }
  if(status === 401 || status === 4001){
    window.location.reload();
  }
}
