const router = [
    {
        title: '控制台',
        icon: 'layout',
        key: '/layout',
        children: [
            {
                key: '/layout/consoleIndex',
                title: '添加用户',
                icon: ''
            },
        ]
    },
    {
        title: '信息管理',
        icon: 'info',
        key: '/layout/info',
        children: [
            {
                key: '/layout/infolist',
                title: '信息列表',
                icon: '',
            },
            {
                key: '/layout/infocategory',
                title: '信息分类',
                icon: ''
            },
        ]
    },
    {
        title: '用户管理',
        icon: 'user',
        key: '/layout/user',
        children: [
            {
                key: '/layout/userlist',
                title: '用户列表', 
                icon: ''
            },
        ]
    }
]
export default router;