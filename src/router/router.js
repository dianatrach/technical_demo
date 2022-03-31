import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/pages/Home'
import Favorites from '@/components/pages/Favorites'

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: Favorites,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;