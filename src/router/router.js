import { createWebHistory, createRouter } from "vue-router";

function lazyLoad(view){
  return() => import(`@/components/pages/${view}.vue`)
}

const routes = [
    {
      path: "/",
      name: "Home",
      component: lazyLoad('Home'),
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: lazyLoad('Favorites'),
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;