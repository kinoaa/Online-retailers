/*
countDown表示倒计时功能
参数： endTime代表未来时间 格式： "2019/12/12 10:20:30"
返回： "10,20,15"  表示未来时间距现在时间还有10小时20分15秒
        "over"   表示称杀已结束

*/
function tow (n) {
  return n >= 0 && n < 10 ? '0' + n : '' + n
}
export default function countDown (endTime) {
  var end = new Date(endTime).getTime()
  var start = new Date().getTime()
  var diff = end - start
  if (diff <= 0) {
    return 'over'
  }
  var s = Math.floor(diff / 1000) % 60
  var m = Math.floor(diff / 1000 / 60) % 60
  var h = Math.floor(diff / 1000 / 60 / 60)
  // return h.toString().padStart(2, '0') + ',' + m.toString().padStart(2, '0') + ',' +
  //   s.toString().padStart(2, '0')
  return tow(h) + ',' + tow(m) + ',' + tow(s)
}
