import {createRouter, createWebHistory} from 'vue-router'

import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const Category = () => import('../views/category/Category')
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const ShopCart = () => import('../views/shopCart/ShopCart')
const Popular = () => import('../views/home/Popular')
const NewStyle = () => import('../views/home/NewStyle')
const Select = () => import('../views/home/Select')
const Fashion= () => import('../views/category/Fashion')
const Jacket= () => import('../views/category/Jacket')
const Trousers= () => import('../views/category/Trousers')
const Skirt= () => import('../views/category/Skirt')
const Underwear= () => import('../views/category/Underwear')
const DetailsPage= () => import('../views/details/Detailspage')
const Goods= () =>import('../views/details/Goods')
const Parameter= () =>import('../views/details/Parameter')
const Recommend= () =>import('../views/details/Recommend')
const Comment= () =>import('../views/details/Comment')

const routes = [
  {
    path: '', redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/popular'
      },
      {
        path: 'popular',
        name: 'popular',
        component: Popular
      },
      {
        path: 'newStyle',
        name: 'NewStyle',
        component: NewStyle
      },
      {
        path: 'select',
        name: 'Select',
        component: Select
      },
    ]
  },
  {
    path: '/category',
    component: Category,
    children: [
      {
        path: '',
        redirect: '/category/fashion'
      },
      {
        path: 'fashion',
        name: 'Fashion',
        component: Fashion
      },
      {
        path: 'jacket',
        name: 'Jacket',
        component: Jacket
      },
      {
        path: 'trousers',
        name: 'Trousers',
        component: Trousers
      },
      {
        path: 'skirt',
        name: 'Skirt',
        component: Skirt
      },
      {
        path: 'underwear',
        name: 'Underwear',
        component: Underwear
      },
    ]
  },
  {
    path: '/profile', component: Profile
  },
  {
    path: '/shopcart', component: ShopCart
  },
  {
    path: '/detialspage',component: DetailsPage,
    children: [
      {
        path: '',
        redirect: '/detialspage/goods'
      },
      {
        path: 'goods',
        name: 'Goods',
        component: Goods
      },
      {
        path: 'parameter',
        name: 'Parameter',
        component: Parameter
      },
      {
        path: 'comment',
        name: 'Comment',
        component: Comment
      },
      {
        path: 'recommend',
        name: 'Recommend',
        component: Recommend
      }
    ]
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
