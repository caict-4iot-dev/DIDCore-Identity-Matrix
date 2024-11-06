const policyRouter = {
    path: '/expert',
    name: 'expert',
    component: () => import('/@/layout/routerView/parent.vue'),
    meta: {
        title: '专家团队',
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
            path: '/expert',
            name: 'expert',
            component: () => import('/@/views/expert/index.vue'),
            meta: {
                title: '专家团队',
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
            path: '/expert/detail',
            name: 'expertDetail',
            component: () => import('/@/views/expert/detail.vue'),
            meta: {
                title: '专家详情',
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
