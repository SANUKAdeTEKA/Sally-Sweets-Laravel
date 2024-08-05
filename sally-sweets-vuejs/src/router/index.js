import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/side',
    name: 'SideRoom',
    component: () => import('@/views/SideRoom.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/RegBox.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/LoginBox.vue'),
  },
  
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: () => import('@/components/AddProducts.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
