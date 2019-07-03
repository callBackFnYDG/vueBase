import index from '@/pages/index'
import login from '@/pages/login'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

export default routes
