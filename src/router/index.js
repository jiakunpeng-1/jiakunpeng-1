import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: 'one',
        component: function () {
          return import( /* webpackChunkName: "about" */ '../components/one/A.vue')
        }
      },
      {
        path: 'two',
        component: function () {
          return import( /* webpackChunkName: "about" */ '../components/one/B.vue')
        }
      },
      {
        path: 'three',
        component: function () {
          return import( /* webpackChunkName: "about" */ '../components/one/C.vue')
        }
      },
      {
        path: 'four',
        component: function () {
          return import( /* webpackChunkName: "about" */ '../components/one/P.vue')
        }
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