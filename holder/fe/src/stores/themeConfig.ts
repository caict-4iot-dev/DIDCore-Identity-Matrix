import { defineStore } from 'pinia';

/**
 * 布局配置 
 * 修改配置时：
 * 1、需要每次都清理 `window.localStorage` 浏览器永久缓存
 * 2、或者点击布局配置最底部 `一键恢复默认` 按钮即可看到效果
 */
export const useThemeConfig = defineStore('webConfig', {
	state: (): ThemeConfigState => ({
		themeConfig: {   
			/**
			 * 界面设置
			 */
			// 是否开启菜单水平折叠效果
			isCollapse: false, 
			// 是否开启固定 Header
			isFixedHeader: true, 

			/**
			 * 界面显示
			 */ 
			// 是否开启 Breadcrumb，强制经典、横向布局不显示
			isBreadcrumb: true, 
			// 是否开启 Breadcrumb 图标
			isBreadcrumbIcon: false,   
			// 是否开启 Footer 底部版权信息
			isFooter: true,  
			/**
			 * 其它设置
			 */ 
			// 主页面切换动画：可选值"<slide-right|slide-left|opacitys>"，默认 slide-right
			animation: 'slide-right',   
			/**
			 * 布局切换 
			 * 中的 `initSetLayoutChange(设置布局切换，重置主题样式)` 方法
			 */
			// 布局切换：可选值"<defaults|classic|transverse|columns>"，默认 defaults
			layout: 'transverse', 
			/**
			 * 全局网站标题 / 副标题
			 */
			// 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
			globalI18n: 'zh-cn',
			// 网站主标题（菜单导航、浏览器当前网页标题）
			globalTitle: '分布式数字身份',  
			// 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
			globalComponentSize: 'default',
		},
	}),
	actions: {
		setThemeConfig(data: ThemeConfigState) {
			this.themeConfig = data.themeConfig;
		},
	},
});
