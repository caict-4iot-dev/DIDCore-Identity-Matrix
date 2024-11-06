import request from '/@/assets/scripts/request';
import { ServicePrefixEnum } from '/@/assets/scripts/commonEnum';


export function getExpert(data:Object) {
	return request({
		url: `${ServicePrefixEnum.WEB}/expert/page`,
		method: 'post',
		data
	});
} 
 