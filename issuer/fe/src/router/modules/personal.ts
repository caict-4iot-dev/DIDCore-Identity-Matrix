const personalRouter = {
    path: '/personal',
    name: 'personal',
    component: () => import('/@/views/personal/index.vue'),
    meta: {
        title: '个人中心',
        isLink: '',
        isHide: true,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],  
        icon: '',
    },
    
};

export default personalRouter;
