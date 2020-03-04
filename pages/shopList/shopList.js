Page({
    /**
     * 页面的初始数据
     */
    data: {
        shopList: [],
        pageIdx: 0,
        limit: 10, //注意：如果设置5条，请求数据后上拉不会再请求???
        onload: false,
        isAll: false,
        cat: undefined
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (!options.cat || !options.title) return;
        // 存数据
        this.setData({
            cat: options.cat,
            title: options.title || "",
            onload: true
        })
        // 设置标题
        wx.setNavigationBarTitle({
            title: this.data.title
        })
        this.loadMore(); //请求数据
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
        console.log('监听用户下拉动作')
        this.setData({
            pageIdx: 0,
            // shopList: [],
            // onload: true,
            isAll: false
        })
        // 请求数据
        this.loadMore(); //请求数据
        wx.stopPullDownRefresh({
          complete: (res) => {},
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (!this.data.onload && !this.data.isAll) { //数据请求完 && 仍可加载更多数据的情况下，可再请求
            this.setData({
                onload: true
            })
            this.loadMore(); //请求数据
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    // 请求数据
    loadMore() {
        wx.request({ // 请求数据
            url: 'https://locally.uieee.com/categories/' + this.data.cat + '/shops',
            data: {
                _limit: this.data.limit,
                _page: ++this.data.pageIdx
            },
            success: (res) => { //成功回调
                var count = res.header['x-total-count'];
                if (this.data.pageIdx === 1) this.setData({shopList: []})
                var list = this.data.shopList.concat(res.data);
                this.setData({
                    shopList: list,
                    onload: false
                })
                if (this.data.shopList.length == count) {
                    this.setData({
                        isAll: true
                    })
                }
            },
            fail: (err) => { //失败回调
                console.log(err)
                this.setData({
                    onload: false
                })
            }
        })
    }
})