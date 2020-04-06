import Vue from "vue";
import Router from "vue-router";
// import store from "@/store"


import PageHome from "../pages/PageHome";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import AdminDashboard from "../pages/AdminDashboard"
import dashboardSettings from "../pages/AdminDashboard/AdminSettings/dashboardSettings"
import AdminManageReviews from "../pages/AdminManageReviews"
import ChatSystem from "../pages/ChatSystem"


Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            name: "PageHome",
            component: PageHome
        },
        {
            path: "/login",
            name: "LoginPage",
            component: LoginPage
        },
        {
            path: "/register",
            name: "RegisterPage",
            component: RegisterPage
        },
        {
            path: "/dashboard",
            name: "AdminDashboard",
            component: AdminDashboard

        },
        {
            path: "/dashboard/settings",
            name: "dashboardSettings",
            component: dashboardSettings
        },
        {
            path: "/dashboard/reviews",
            name: "AdminManageReviews",
            component: AdminManageReviews
        },
        {
            path: "/dashboard/chat",
            name: "ChatSystem",
            component: ChatSystem
        },


    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: "history"
});

// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');

//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });


export default router;