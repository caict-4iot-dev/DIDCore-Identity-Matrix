const creDentialRouter = {
    path: '/creDential',
    name: 'creDential',
    component: () => import('/@/views/creDential/index.vue'),
    meta: {
        title: '凭证',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],
        icon: '',
    },
};

export default creDentialRouter;
