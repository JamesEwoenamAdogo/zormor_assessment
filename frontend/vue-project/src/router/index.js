import { createMemoryHistory, createRouter ,createWebHashHistory} from 'vue-router'

import AddLocation from '../components/AddLocation.vue'
import AllLocation from '../components/AllLocation.vue'

const routes = [
  { path: '/', component: AddLocation },
  { path: '/location', component: AllLocation},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router