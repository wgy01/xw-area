# 安装

```
$ npm install xw-area --save
```

# 引入

### 在入口文件 main.js 中如下配置：

```
import xwArea from 'xw-area';

Vue.use(xwArea);
```

### 页面中使用组件

```
<cascader-area></cascader-area>
```

# config 配置

### cascader-area：

属性 | 说明 | 类型 | 默认值
:-------: | ------- | :-------: | :-------:
v-model | 用于存放结果的数组，选择了数据后会自动更新，可传入默认显示的数据 | Array | 无
