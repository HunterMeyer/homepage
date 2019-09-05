/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for each route
// which is lazy-loaded when the route is visited.
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

import projects from '@/data/projects.json'

const paths = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: loadView('Posts')
  },
  {
    path: '/posts/:slug',
    name: 'Post',
    component: loadView('Post'),
    props: true
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadView('Projects')
  },
  {
    path: '/404',
    name: 'Not Found',
    component: loadView('404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

projects.forEach((project) => {
  paths.push({
    path: '/projects/' + project.slug,
    name: project.view,
    component: loadView('projects/' + project.view)
  })
})

export default paths
