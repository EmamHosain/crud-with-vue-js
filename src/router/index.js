import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFoundView.vue';
import ListView from '../views/ListView.vue';
import AddStudentView from '../views/AddStudentView.vue';
import EditStudentView from '../views/EditStudentView.vue';
import ViewStudentView from '../views/ViewStudentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView
    },
    {
      path: '/add',
      name: 'add',
      component: AddStudentView

    },
    {
      path: '/view/:id',
      name: 'view',
      component: ViewStudentView

    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditStudentView

    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})

export default router
