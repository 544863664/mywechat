Component({
    data: {
        data1: "data11",
        data2: "data22"
    },
    methods: {
        onTap: function () {
            var myEventDetail = {dd: "1"} // detail对象，提供给事件监听函数
            var myEventOption = {dd: "1"} // 触发事件的选项
            this.triggerEvent('myevent', myEventDetail, myEventOption)
          }
    }
})