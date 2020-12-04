//index.js
//获取应用实例
const app = getApp()
var slide1 = "../../images/slide1.jpg"
var slide2 = "../../images/slide2.jpg"
var slide3 = "../../images/slide3.jpg"
var slide4 = "../../images/slide4.jpg"
var slide5 = "../../images/slide5.jpg"

Page({
  data: {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    arr2: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    scrollBtn: false,
    swiper: {
      background: [slide1, slide2, slide3, slide4, slide5],
      indicatorDots: true,
      vertical: false,
      circular: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    },
    tabs: [{
        title: '技术开发',
        title2: '小程序开发进阶',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
        desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。',
      },
      {
        title: '产品解析',
        title2: '微信小程序直播',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
        desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。',
      },
      {
        title: '运营规范',
        title2: '常见问题和解决方案',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
        desc: '提高审核质量',
      },
      {
        title: '营销经验',
        title2: '流量主小程序',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
        desc: '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议，以及如何通过工具调优小程序变现效率。',
      },
      {
        title: '高校大赛',
        title2: '2020中国高校计算机大赛',
        img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
        desc: '微信小程序应用开发赛',
      },
    ],
    activeTab: 0,

  },
  onLoad: function () {
    
  },
  myEventListener: function (e) {
    console.log(e)
  },
  onPageScroll(e) {
    this.setData({
      scrollBtn: e.scrollTop > 200 ? true : false
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  onPullDownRefresh() {
    console.log("下拉刷新");

    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 3000)

  },
  scrollgotop() {
    wx.pageScrollTo({
      duration: 300,
      scrollTop: 0
    })
  },
  // 点击 tab 时触发
  onTabCLick(e) {
    const index = e.detail.index;
    this.setData({
      activeTab: index
    });
  },
  // 内容区域滚动导致 tab 变化时触发
  onChange(e) {
    const index = e.detail.index;
    this.setData({
      activeTab: index
    });
  }
})