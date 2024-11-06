const searchRouter = {
    path: '/search',
    name: 'search',
    component: () => import('/@/views/search/index.vue'),
    meta: {
        title: '搜索',
        isLink: '',
        isHide: true,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],
        icon: ''
    }
}

export default searchRouter
