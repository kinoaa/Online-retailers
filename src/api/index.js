import axios from 'axios'

axios.defaults.baseURL = '../../../static/data'
// 首页
// 轮播
function getSlides () {
  return axios.get('slides.json')
}
// 手动轮播
function getBrand () {
  return axios.get('brand.json')
}
// 倒计时
function getSpike () {
  return axios.get('spike.json')
}
// 新人见面礼
function newPeople () {
  return axios.get('new.json')
}
// 某东小院
function courtyard () {
  return axios.get('courtyard.json')
}
// 某东每日购
function everyday () {
  return axios.get('everyday.json')
}
// 购物列表
function recommend () {
  return axios.get('recommend.json')
}
// 值得买的职业面(更多里面)
function getGengduo () {
  return axios.get('gengduo.json')
}

// 秒杀子页面
function getSeckillnav () {
  return axios.get('seckillnav.json')
}
function getSeckillshopp () {
  return axios.get('seckillshopp.json')
}
// Category分类页面
function getLeft () {
  return axios.get('leftdata.json')
}
function getRight () {
  return axios.get('rightdatas.json')
}
function getCategory () {
  return axios.get('category.json')
}
// Category分类页面router
function getCategorycontent () {
  return axios.get('categorycontent.json')
}
function getcontent () {
  return axios.get('content.json')
}
// 登录页面
function logoin () {
  return axios.get('logoin.json')
}
// 推荐购物页面
function getSlidesBuy () {
  return axios.get('worth1.json')
}

function getPromotion () {
  return axios.get('worth2.json')
}

function getRanking () {
  return axios.get('worth3.json')
}
//  buy推荐购物子页面
function getObpowder () {
  return axios.get('obp.json')
}
// 购物车页面
function getcartCen () {
  return axios.get('cartcen.json')
}
// 我的主页
function getUls () {
  return axios.get('myuls.json')
}
// 详情
function getSlides1 () {
  return axios.get('slides1.json')
}
function getBrand1 () {
  return axios.get('brand1.json')
}
function getBrand2 () {
  return axios.get('brand2.json')
}
function getSpike1 () {
  return axios.get('spike1.json')
}
function getValue () {
  return axios.get('value.json')
}
function getRecommend () {
  return axios.get('text.json')
}
function getVuer () {
  return axios.get('vuer.json')
}
// 搜索页面
function getSearch () {
  return axios.get('search.json')
}
// 购物详情页

function getRotary () {
  return axios.get('rotary.json')
}

function getDiscuss () {
  return axios.get('discuss.json')
}

function getArrival () {
  return axios.get('arrival.json')
}

function getPic () {
  return axios.get('pic.json')
}
export {
  getSlides,
  getBrand,
  getSpike,
  newPeople,
  courtyard,
  everyday,
  recommend,
  getLeft,
  getRight,
  logoin,
  // 京东超市
  getSlides1,
  getBrand1,
  getBrand2,
  getSpike1,
  getVuer,
  getRecommend,
  getValue,
  // 值得买的职业面(更多里面)
  getGengduo,
  // 秒杀子页面
  getSeckillnav,
  getSeckillshopp,
  // 推荐购物
  getSlidesBuy,
  getPromotion,
  getRanking,
  // 子页面
  getObpowder,
  // 分类
  getCategory,
  // 分类子页面
  getCategorycontent,
  getcontent,
  // 我的主页
  getUls,
  // 搜索页面
  getSearch,
  // 购物车
  getcartCen,
  // 购物详情页
  getRotary,
  getDiscuss,
  getArrival,
  getPic
}
