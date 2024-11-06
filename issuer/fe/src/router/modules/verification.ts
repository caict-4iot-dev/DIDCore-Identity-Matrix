const verificationRouter = {
    path: '/verification',
    name: 'verification',
    component: () => import('/@/views/verification/index.vue'),
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

export default verificationRouter;
