/**
 * pinia 类型定义
 */

// 用户信息
declare interface UserInfosState<T = any> {
	userInfos: { 
		photo: string; 
		userName: string;
		[key: string]: T;
	};
	token:string
}

declare interface BifWalletState {
	bifWallet: {  
		certBid: string;
		bid: string;
		newUser:Boolean;
	};
	tipState: Boolean; 
	certSwitch:Boolean;
	firstState: Boolean;
	projectLen?: Number;
	
}

// 路由缓存列表
declare interface KeepAliveNamesState {
	keepAliveNames: string[];
	cachedViews: string[];
}

// 后端返回原始路由(未处理时)
declare interface RequestOldRoutesState {
	requestOldRoutes: string[];
}

// TagsView 路由列表
declare interface TagsViewRoutesState<T = any> {
	tagsViewRoutes: T[];
	isTagsViewCurrenFull: Boolean;
}

// 路由列表
declare interface RoutesListState<T = any> {
	routesList: T[];
	isColumnsMenuHover: Boolean;
	isColumnsNavHover: Boolean;
}

// 布局配置
declare interface ThemeConfigState {
	themeConfig: {
		isCollapse: boolean;
		isFixedHeader: boolean;
		isBreadcrumb: boolean;
		isBreadcrumbIcon: boolean;
		isFooter: boolean;
		animation: string;
		layout: string;
		globalTitle:string;
		globalI18n:string;
		globalComponentSize:string;
	};
}
