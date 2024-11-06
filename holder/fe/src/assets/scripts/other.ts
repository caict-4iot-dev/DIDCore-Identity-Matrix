import { nextTick, defineAsyncComponent } from 'vue';
import type { App } from 'vue';
import * as svg from '@element-plus/icons-vue';
import router from '/@/router/index';
import pinia from '/@/stores/index';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import { Local } from '/@/assets/scripts/storage';
import { verifyUrl } from '/@/assets/scripts/toolsValidate';
import { ElMessageBox } from 'element-plus';
import { Session } from '/@/assets/scripts/storage'
// 引入组件
const SvgIcon = defineAsyncComponent(() => import('/@/components/svgIcon/index.vue'));

/**
 * 导出全局注册 element plus svg 图标
 * @param app vue 实例
 * @description 使用：https://element-plus.gitee.io/zh-CN/component/icon.html
 */
export function elSvg(app: App) {
	const icons = svg as any;
	for (const i in icons) {
		app.component(`ele-${icons[i].name}`, icons[i]);
	}
	app.component('SvgIcon', SvgIcon);
}

/**
 * 设置浏览器标题国际化
 * @method const title = useTitle(); ==> title()
 */
export function useTitle() {
	const stores = useThemeConfig(pinia);
	const { themeConfig } = storeToRefs(stores);
	nextTick(() => {
		let webTitle = '';
		let globalTitle: string = themeConfig.value.globalTitle;
		const { path, meta } = router.currentRoute.value;
		webTitle = <string>meta.title;
		document.title = `${webTitle} - ${globalTitle}` || globalTitle;
	});
}
 
 
/**
 * 全局组件大小
 * @returns 返回 `window.localStorage` 中读取的缓存值 `globalComponentSize`
 */
export const globalComponentSize = (): string => {
	const stores = useThemeConfig(pinia);
	const { themeConfig } = storeToRefs(stores);
	return Local.get('themeConfig')?.globalComponentSize || themeConfig.value?.globalComponentSize;
};

/**
 * 对象深克隆
 * @param obj 源对象
 * @returns 克隆后的对象
 */
export function deepClone(obj: EmptyObjectType) {
	let newObj: EmptyObjectType;
	try {
		newObj = obj.push ? [] : {};
	} catch (error) {
		newObj = {};
	}
	for (let attr in obj) {
		if (obj[attr] && typeof obj[attr] === 'object') {
			newObj[attr] = deepClone(obj[attr]);
		} else {
			newObj[attr] = obj[attr];
		}
	}
	return newObj;
}

/**
 * 判断是否是移动端
 */
export function isMobile() {
	if (
		navigator.userAgent.match(
			/('phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone')/i
		)
	) {
		return true;
	} else {
		return false;
	}
}

/**
 * 判断数组对象中所有属性是否为空，为空则删除当前行对象
 * @description @感谢大黄
 * @param list 数组对象
 * @returns 删除空值后的数组对象
 */
export function handleEmpty(list: EmptyArrayType) {
	const arr = [];
	for (const i in list) {
		const d = [];
		for (const j in list[i]) {
			d.push(list[i][j]);
		}
		const leng = d.filter((item) => item === '').length;
		if (leng !== d.length) {
			arr.push(list[i]);
		}
	}
	return arr;
}
export function loginOut() {
	ElMessageBox({
		closeOnClickModal: false,
		closeOnPressEscape: false,
		title: '提示',
		message: '此操作将退出登录, 是否继续?',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		buttonSize: 'default',
		beforeClose: (action:string, instance:any, done:any) => {
			if (action === 'confirm') {
				instance.confirmButtonLoading = true
				instance.confirmButtonText = '退出中'
				setTimeout(() => {
					done()
					setTimeout(() => {
						instance.confirmButtonLoading = false
					}, 300)
				}, 700)
			} else {
				done()
			}
		}
	})
		.then(async () => {
			// 清除缓存/token等
			// await signOut({
			// 	token: Session.get('token')
			// }) 
			Session.clear()
			setTimeout(() => {
				window.location.href='/'
			}, 300)
		})
		.catch(() => { })
}
/**
 * 打开外部链接
 * @param val 当前点击项菜单
 */
export function handleOpenLink(val: RouteItem) {
	const { origin, pathname } = window.location;
	router.push(val.path);
	if (verifyUrl(<string>val.meta?.isLink)) window.open(val.meta?.isLink);
	else window.open(`${origin}${pathname}#${val.meta?.isLink}`);
} 
/**
 * 统一批量导出
 * @method elSvg 导出全局注册 element plus svg 图标
 * @method useTitle 设置浏览器标题国际化 
 * @method globalComponentSize() element plus 全局组件大小
 * @method deepClone 对象深克隆
 * @method isMobile 判断是否是移动端
 * @method handleEmpty 判断数组对象中所有属性是否为空，为空则删除当前行对象
 * @method handleOpenLink 打开外部链接
 */
const other = {
	elSvg: (app: App) => {
		elSvg(app);
	},
	useTitle: () => {
		useTitle();
	},  
	globalComponentSize: () => {
		return globalComponentSize();
	},
	deepClone: (obj: EmptyObjectType) => {
		console.log(obj)
		return deepClone(obj);
	},
	isMobile: () => {
		return isMobile();
	},
	loginOutHandle: () => {
		loginOut()
	},
	handleEmpty: (list: EmptyArrayType) => {
		return handleEmpty(list);
	},
	handleOpenLink: (val: RouteItem) => {
		handleOpenLink(val);
	}, 
};

// 统一批量导出
export default other;
