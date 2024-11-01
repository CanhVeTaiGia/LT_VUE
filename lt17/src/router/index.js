import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webChunkName: "home" */ "@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webChunkName: "about" */ "@/views/About.vue"),
    },
    {
      path: "/user/:id",
      redirect: (to) => `/profile/${to.params.id}`,
      name: "user",
      component: () => import(/* webChunkName: "home" */ "@/views/User.vue"),
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import(/* webChunkName: "home" */ "@/views/Profile.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const islogin = ref(true)
  if (to.path === "" && islogin.value) {
    next(
      {
        path: "/login",
      }
    )
  }else{
    next();
  }
});
export default router;
