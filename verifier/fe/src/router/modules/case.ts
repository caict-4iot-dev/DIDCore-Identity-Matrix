const caseRouter = {
    path: '/case',
    name: 'case',
    component: () => import('/@/layout/routerView/parent.vue'),
    meta: {
        title: '标杆案例',
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
            path: '/case',
            name: 'case',
            component: () => import('/@/views/case/index.vue'),
            meta: {
                title: '标杆案例',
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
            path: '/case/detail',
            name: 'caseDetail',
            component: () => import('/@/views/case/detail.vue'),
            meta: {
                title: '标杆案例',
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

export default caseRouter;
