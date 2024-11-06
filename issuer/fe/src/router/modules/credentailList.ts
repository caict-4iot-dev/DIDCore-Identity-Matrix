const creDentialListRouter = {
    path: '/creDentialList',
    name: 'creDentialList',
    component: () => import('/@/views/creDentialList/index.vue'),
    meta: {
        title: '个人凭证',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],
        icon: '',
    },
};

export default creDentialListRouter;
