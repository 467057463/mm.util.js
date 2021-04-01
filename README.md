> 初入职场时一后端大哥对我说：“毛毛啊，你可以把平时写过的工具方法收集起来，方便在以后的项目中使用。顺便也分享给我~~~~”。时光真快，6 年了这位大哥的话还萦绕在我的耳边...

所以本项目初衷的就是把平常在项目中用到的方法积累起来，方便以后使用。又由于和`lodash`、`underscore`同属工具型类库，所以写本项目的过程也变成了阅读这两个库的源码的过程。

### use

#### npm

```bash
npm install mmUtil
```

#### yarn

```bash
yarn add mmUtil
```

#### 网页引用

[前往lib目录](https://github.com/467057463/mm.util/tree/master/lib)下载对应的格式的文件

* es.js 为 es module格式

```html
<script type="module" src="/path/mmutil.version.es.js">
```

* umd.js 为通用模块定义

```html
<script src="/path/mmUtil.version.umd.js">
```

* min.js 为压缩版本版本适合生成环境使用

```html
<script src="/path/mmUtil.version.min.js">
```