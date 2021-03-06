import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/* components router */
import componentsRouterList from './components-router'

/* seconds router */
import secondsRouterList from './seconds-router'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/dashboard/dashboard'
  // },
  { path: '/login', component: () => import('@/views/login'), name: 'login', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // // 报表
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   meta: { title: 'dashboard', icon: 'dashboard' },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'dashboard',
  //       component: () => import('@/views/dashboard/dashboard'),
  //       meta: { title: 'dashboard', icon: 'dashboard' }
  //     }
  //   ]
  // },
  // 锁屏
  {
    path: '/lock',
    hidden: true,
    name: '锁屏页',
    component: () => import('@/views/common/lock')
  },

  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: '/components/dragKanban',
    name: 'Components',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: componentsRouterList
  },

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'permission',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    }]
  },

  
  /**
   * 2020-12-27 20:52 新增的路由
   * 2021-01-06 02:31 完善的隐藏路由：异步路由中的hidden属性为true时为隐藏路由，反之则在左边菜单展示
   */


  {
      path: '/asyncHiddenRouter',
      name: 'asyncHiddenRouter',
      hidden: true,
      component: Layout,
      // meta: {
      //     title: "隐藏路由",
      // },
      children: [
        ...secondsRouterList.filter(route => route.hidden),
      ]
  },

  ...secondsRouterList.filter(route => !route.hidden),


  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true } },
      { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true } }
    ]
  },

  // 错误日志
  {
    path: '/errorLog',
    component: Layout,

    children: [
      {
        path: 'errorLog',
        name: 'errorLog',
        component: () => import('@/views/errorLog/errorLog'),
        meta: { title: 'Errorlog', icon: 'errorLog' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
