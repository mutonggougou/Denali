import Index from '../pages/index.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'

export default  [
    { path: '/', 
    component: Index
    },{ 
      path: '/about', 
    component: About 
    },{ 
      path: '/contact', 
    component: Contact 
  },
  ]
// export default [
//     {
//     path: '/', component: Index 
// }, {
//     path: '/about', component: About 
// },
//  {
//     path: '/contact', component: Contact 
// },
// ]