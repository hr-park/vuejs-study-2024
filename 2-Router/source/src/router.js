import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home"

Vue.useAttrs(VueRouter); //vue router 사용한다

const router = new VueRouter({
    mode: "history", //browser history mode 사용
    routes: [
        //path별 component 추가
        {
            path: "/",
            component: Home
        }, 
        {
            path:"*",
            component: ErrorPage
        }
    ]
});

export default router;