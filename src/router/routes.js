import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";

export default  [
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            showFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            showFooter: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            showFooter: false
        }
    },
    {
        path: '/search/:keyword',
        component: Search,
        meta: {
            showFooter: true
        },
        name: 'searchParams'
    },
    {
        path: '/search/',
        component: Search,
        meta: {
            showFooter: true
        },
        name: 'searchQuery'
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        name: 'detail',
        meta: {
            showFooter: true
        }
    }
    // 重定向
    // {
    //     path: '*',
    //     redirect: '/home'
    // }
]