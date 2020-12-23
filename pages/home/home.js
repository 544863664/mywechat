// pages/home/home.js
//获取应用实例
const app = getApp()
var slide1 = "../../images/slide1.jpg"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图
        swiper: {
            background: [slide1, slide1, slide1, slide1, slide1],
            indicatorDots: true,
            vertical: false,
            circular: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        },
        // tabs
        tabs: [],
        activeTab: 0,
        swiperHeight: "",

        // icon
        icons: [],

        // 回到顶部按钮
        scrollBtn: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            search: this.search.bind(this),
            tabs: app.globalData.home.homeTabs,
            icons: app.globalData.home.homeIcon
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        setTimeout(function () {
            wx.stopPullDownRefresh()
        }, 3000)
    },
    // 页面滚动监听高度
    onPageScroll(e) {
        this.setData({
            scrollBtn: e.scrollTop > 200 ? true : false
        });
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    /**
     * 页面函数
     */
    // 头部搜索框
    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                    text: '搜索结果',
                    value: 1
                }, {
                    text: '搜索结果2',
                    value: 2
                }])
            }, 200)
        })
    },
    // 搜索结果事件
    selectResult: function (e) {
        console.log('select result', e.detail)
    },

    // tabs事件
    onTabClick(e) {
        const index = e.detail.index
        this.setData({
            activeTab: index
        })
    },

    onChange(e) {
        const index = e.detail.index
        this.setData({
            activeTab: index
        })
    },

    // 点击tab内容事件
    handleClick(e) {
        wx.navigateTo({
            url: "/pages/index/index?title="+e.currentTarget.dataset.title
        })
    },





    // 回顶
    scrollgotop() {
        wx.pageScrollTo({
            duration: 300,
            scrollTop: 0
        })
    }
})