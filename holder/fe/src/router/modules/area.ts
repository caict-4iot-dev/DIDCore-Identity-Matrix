const areaRouter = {
    path: '/area',
    name: 'area',
    component: () => import('/@/views/area/index.vue'),
    meta: {
        title: '专精特新专区',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],  
        icon: '',
    },
};

export default areaRouter;
