# NMSL
## 一个纯前端的抽象话(及相关亚文化)转换器——欢迎 Star ⭐
![其实根本没有孙笑川，或者说人人都是孙笑川](https://cdn.jsdelivr.net/gh/gaowanliang/p/1.png)

> 人人都说抽象话，无人识得李老八。

本人**儒雅随和**，自然对于抽象话很感兴趣，于是制作了这个在线的转换工具,点击链接即可在线体验：https://chouxiang.ml/

> **分清场合，适度玩梗，要有基本的社会道德，请勿过度滥用此梗或幸灾乐祸！**

**抽象话**是指从孙笑川所属的抽象工作室流传出的词汇，而现在随着狗粉丝们不断造梗，也出现了一些新的词语。抽象话本来只反复出现在孙笑川微博的评论里面，但随着抽象文化的兴起，抽象话也随之在互联网上扩散，许多地方都有抽象话的影子。

### 特点

词库补全计划已提上日程，请耐心等待

可以通过[这个文档进行词库补全](https://docs.qq.com/sheet/DQmlGU0lualVBUU5h) https://docs.qq.com/sheet/DQmlGU0lualVBUU5h

接下来可能会结合腾讯云SCF实现Serverless版本，看具体需求了

#### 词库
本网页为纯前端制作，无后台服务器，大家可以在[src/js/fast.js](https://github.com/gaowanliang/NMSL/blob/master/src/js/fast.js)找到完整的抽象话对应表。

**源词库提供者 https://github.com/THUzhangga/NMSL 非常感谢此词库的提供者 THUzhangga**

本来是想做着玩玩，没想到大家这么喜欢，原词库作者找到我我才想起来没有加出处，在这里向原词库作者报以诚挚的歉意。

当然此词库并不太全，我加入了一些新词，如国家地区旗帜，后缀修饰词语，爷，弟弟等

而且原词库作者也提醒了我可以通过多端协作的方式来进行词库补全，这里也感谢原词库作者提供的想法。

#### 词库贡献名单(排名按照名单贡献者先后顺序) [加入词库补全计划](https://docs.qq.com/sheet/DQmlGU0lualVBUU5h)
Madokristian chitaotao yiizg EasonRonaldo Rizerk  亮晶晶的圣晶石 leoasdf lamrrard 带带Dai善人 Stack 东莞庄生殖器 Submergence. sonoichi Miro 🔥🌟包 Night1611 🔪👦 弁才天 你👴 Alooha 小汇小汇

#### 纯前端中文分词系统（针对抽象词优化版）
本网页使用了一个纯前端中文分词系统(已经针对抽象词进行优化) [segmentCX.js](https://github.com/gaowanliang/NMSL/blob/master/src/js/segmentCX.js)（文件很大，3.6M+，如果有后端请尽量使用jieba等分词工具），使用方法如下：
首先在html中引入js包（已使用CDN加速）
```html
<script src="https://cdn.jsdelivr.net/gh/gaowanliang/NMSL/src/js/segmentCX.js"></script>
```
之后输入js代码
```javascript
const {
    Segment,
    useDefault
} = require('segmentit');
```
即可使用此分词系统，下面可以通过一个简单的例子来测试

```javascript
const segmentit = useDefault(new Segment());
const result = segmentit.doSegment('工信处女干事每月经过下属科室都要亲口交代24口交换机等技术性器件的安装工作。');
console.log(result);
```
输出结果
```javascript
0: {w: "工信处", p: 32}
1: {w: "女", p: 1048576}
2: {w: "干事", p: 1048576}
3: {w: "每月", p: 65536}
4: {w: "经过", p: 4096}
5: {w: "下属", p: 1048576}
6: {w: "科室", p: 1048576}
7: {w: "都", p: 134217728}
8: {w: "要"}
9: {w: "亲口", p: 134217728}
10: {w: "交代", p: 1048576}
11: {w: "24口", p: 2097152}
12: {w: "交换机", p: 8}
13: {w: "等", p: 8192}
14: {w: "技术性", p: 536870912}
15: {w: "器件", p: 1048576}
16: {w: "的", p: 8192}
17: {w: "安装", p: 4096}
18: {w: "工作", p: 1048576}
19: {w: "。", p: 2048}
```
可见针对复杂情况也可以有很好的分词效果
#### "看得见"emoji系统

部分emoji在某些平台上尚未支持(如🦴,Windows 10平台可以看见是骨头，Android 8 则为错误显示)，我使用了[1]中的方法在前端对emoji词库进行了修改，使其在任何平台都不会乱码。(在这里对[1]进行存档)

emoji 的一个特性是作为一张图片它不能用代码上色，考虑采取对 canvas 上的 emoji 做两次 fillStyle的方法，判断前后像素的 RGBA 是否完全相同，相同则为 emoji。这个方法的弊端是，并不是所有系统的 emoji 都是图片，有的系统里 emoji 就是一种字体，是可以被上色的。还可以通过 Modernizr 判断是否支持 emoji，使用的是在 canvas 上打印出一个考拉🐨的 emoji（Modernizr只是检测浏览器特性，不对某个 emoji 做针对性判断），通过判断画布上是否依然为空白画布来区分。这个方法的弊端是，有的系统对于不支持的字符显示的并非是空白，而是一个方框，也是可以在 canvas 上画出来的；其次是效率堪忧，每一次需要遍历长度为(devicePixelRatio*12 - 1)^2的数组，即121或529个像素，讲真对 canvas 做 getImageData 操作效率上并不高。

综上，现在给出一种解决方案，主要利用了在大部分系统下emoji不能被上色的原理，对于那些 emoji 可以被上色的平台做降级处理，在2*2的 canvas 上做像素比对。

```javascript
const getTextFeature = (text, color) => {
  try {
    const canvas = document.createElement('canvas');
    /*
      因为进行scale以后的图案区域实际上不能确定，
      理论上应该只在(0,0,1,1)，但有的也会在它周围的像素里，
      综合效率的考虑，给一个2*2的范围是比较合适的;
    */
    canvas.width = 2;
    canvas.height = 2;

    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '100px sans-serif';
    ctx.fillStyle = color;
    ctx.scale(0.01, 0.01);
    ctx.fillText(text, 0, 0);

    const imageData = ctx.getImageData(0, 0, 2, 2).data;
    // 在一些系统里Uint8ClampedArray不支持常规的数组方法，需要转换一下
    const imageDataArr = [];
    for (let i = 0; i < imageData.length; i++) {
      imageDataArr[i] = imageData[i];
    }

    return imageDataArr.reduce((a, b) => (a + b), 0) > 0 ? 
      imageDataArr.toString() : false;
  } catch (e) {
    return false;
  }
};

const distribute = (text, mode) => {
  const feature = getTextFeature(text, '#000');
  return mode ? (feature && feature === getTextFeature(text, '#FFF'))
    : feature;
};

const ifEmoji = (text) => {
  /*
    用一个最悠久而常见 emoji 来判断当前系统是使用图片还是字体来显示 emoji，
    若是图片则去做上色比对，否则只对可见性做判断。
  */
  const mode = distribute('😁');
  return distribute(text, mode);
}

export default ifEmoji;
/*
    Usage:
*/
ifEmoji('蛤') // => false
ifEmoji('🐸') // => If your system / browser supports this emoji character correctly, the returned value will be true.
```
我将这种方法整合进入我的网页中，可以解决某些设备不支持某些emoji的情况

#### 动态加载js提高速度 （这个有bug，现在准备两个都支持）
使用这个方法
```javascript
function onDemandScript(url, callback) {
    callback = (typeof callback != 'undefined') ? callback : {};
    $.ajax({
        type: "GET",
        url: url,
        success: callback,
        dataType: "script",
        cache: true
    });
}
```
即可实现动态加载js同时实现缓存，比getScript好很多

### 参考资料
 
* [1] 如何判断当前浏览器是否支持某一个emoji  https://www.jianshu.com/p/52fe1ff46f93

* [2] 中文分词模块 https://github.com/gaowanliang/segmentCX
