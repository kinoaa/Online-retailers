import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Category from '@/components/category/Category'
import Cart from '@/components/cart/Cart'
import Buy from '@/components/buy/Buy'
import My from '@/components/my/My'
import Logoin from '@/components/myLogin/Logoin'
import Search from '@/components/search/Search'
import Obpowder from '@/components/obpowder/Obpowder'
import CategoryContnet from '@/components/category/components/CategoryContent'
// import Gengduo from '@/components/buy/components/promo/promochildren/Gengduo'
import Seckill from '@/components/home/components/spikes/spikechildren/Seckill'
import home1 from '@/components/home1/home1'
import MyCart from '@/components/myCart/MyCart'
import Details from '@/components/details/Details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/logoin',
      name: 'Logoin',
      component: Logoin
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/obp',
      name: 'Obpowder',
      component: Obpowder
    },
    {
      path: '/CategoryContnet',
      name: 'CategoryContnet',
      component: CategoryContnet
    },
    {
      path: '/seckill',
      name: 'Seckill',
      component: Seckill
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1
    },
    {
      path: '/myCart',
      name: 'MyCart',
      component: MyCart
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
