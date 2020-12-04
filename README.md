# mywechat
```
    WeUI组件库
```

## 在小程序根目录内，初始化npm
```
    npm init

    npm install
```

## 执行命令安装 weui-miniprogram 包
```
    npm install --save weui-miniprogram

    在微信开发者工具中的右上角：详情 ------ 本地设置， 勾选“使用 npm 模块”选项

    安装完成后，在微信开发者工具中的菜单栏：工具 ------ 构建 npm
```

##  app.wxss引入全局样式
```
    @import '/miniprogram_npm/weui-miniprogram/weui-wxss/dist/style/weui.wxss';
```