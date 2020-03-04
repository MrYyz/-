// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    radioChangeHandle(event) {
        console.log(event.detail.value)
        console.log(event.target.dataset)
    },
    checkboxChangeHandle(event) {
        console.log(event.detail.value)
        console.log(event.target.dataset)
    },

    fatherTapHandle() {
        console.log('调用父级事件')
    },
    sonTapHandle1(event) {
        // 通过自定义属性实现 事件传参  data-xxx
        console.log('调用子级事件，并阻止事件冒泡')
        console.log(event.target.dataset.index)
    },
    sonTapHandle2(event) {
        console.log('调用子级事件，需要事件冒泡')
        console.log(event.target.dataset.index)
    }
})