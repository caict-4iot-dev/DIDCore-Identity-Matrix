const assessRouter = {
    path: '/assess',
    name: 'assess',
    component: () => import('/@/views/assess/index.vue'),
    meta: {
        title: '评估诊断',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],  
        icon: '',
    },
};

export default assessRouter;
