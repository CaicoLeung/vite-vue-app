import VueRouter, { RouteRecordRaw } from 'vue-router'

const TestPage = () => import(/* webpackChunkName: "TestPage" */'#PAGES/Test')
const HomePage = () => import(/* webpackChunkName: "HomePage" */'#PAGES/Home')

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/test', component: TestPage },
]

export default routes
