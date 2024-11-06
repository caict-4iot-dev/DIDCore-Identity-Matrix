const policyRouter = {
    path: '/policy',
    name: 'policy',
    component: () => import('/@/layout/routerView/parent.vue'),
    meta: {
        title: '政策资讯',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        roles: ['admin', 'common'],  
        icon: '',
    },
    children: [
        {
            path: '/policy',
            name: 'policy',
            component: () => import('/@/views/policy/index.vue'),
            meta: {
                title: '政策资讯',
                isLink: '',
                isHide: true,
                isKeepAlive: false,
                isAffix: false,
                isIframe: false,
                roles: ['admin'],  
                icon: '',
            },
        },
        {
            path: '/policy/detail',
            name: 'policyDetail',
            component: () => import('/@/views/policy/detail.vue'),
            meta: {
                title: '政策资讯',
                isLink: '',
                isHide: true,
                isKeepAlive: false,
                isAffix: false,
                isIframe: false,
                roles: ['admin'],  
                icon: '',
            },
        }
    ]
};

export default policyRouter;
