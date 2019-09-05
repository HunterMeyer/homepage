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

const projectPaths = [
  { slug: 'jrdevjobs', view: 'JrDevJobs' },
  { slug: 'monthly-stash', view: 'MonthlyStash' }
]

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

projectPaths.forEach((path) => {
  paths.push({
    path: '/projects/' + path.slug,
    name: path.view,
    component: loadView('projects/' + path.view)
  })
})

export default paths
