const verifyCreDentialRouter = {
    path: '/verifyCreDential',
    name: 'verifyCreDential',
    component: () => import('/@/views/verifyCreDential/index.vue'),
    meta: {
        title: '验证凭证',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],
        icon: '',
    },
};

export default verifyCreDentialRouter;
