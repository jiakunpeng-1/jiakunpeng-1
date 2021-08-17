import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import Login from '../views/Login.vue'
const one = () => import('../components/one/A.vue')
const tow = () => import('../components/one/B.vue')
const three = () => import('../components/one/C.vue')
const four = () => import('../components/one/P.vue')
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: 'one',
        component: one
      },
      {
        path: 'two',
        component: tow
      },
      {
        path: 'three',
        component: three
      },
      {
        path: 'four',
        component: four
      },
      {
        path: 'aa',
        component: function () {
          return import( /* webpackChunkName: "about" */ '../components/two/D.vue')
        }
      },
      {
        path: 'ab',
        component: function () {
          return import( /* webpackChunkName: "about" */ '../components/two/E.vue')
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/allCompontent',
    name: 'AllCompontent',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/AllCompontent.vue')
    }
  }
]

const router = new VueRouter({
  routes
})
var login = localStorage.getItem("login");
if (login == "true") {
  store.commit("goLogin");
}
router.beforeEach((to, from, next) => {
  var login = store.state.login
  if (to.name !== 'Login' && !login) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
export default router