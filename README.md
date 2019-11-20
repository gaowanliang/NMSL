# NMSL
## 一个纯前端的抽象话转换器——欢迎 Star
![其实根本没有孙笑川，或者说人人都是孙笑川](https://cdn.jsdelivr.net/gh/gaowanliang/p/1.png)

> 人人都说抽象话，无人识得李老八。

本人**儒雅随和**，自然对于抽象话很感兴趣，于是制作了这个在线的转换工具,点击链接即可在线体验：https://chouxiang.ml/

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
Madokristian chitaotao yiizg EasonRonaldo Rizerk  亮晶晶的圣晶石 leoasdf lamrrard 带带Dai善人 Stack 东莞庄生殖器 Submergence. sonoichi Miro 🔥🌟包 Night1611 🔪👦


#### 纯前端中文分词系统
本网页使用了一个纯前端中文分词系统(已经针对抽象词进行优化) [segmentCX.js](https://github.com/gaowanliang/NMSL/blob/master/src/js/segmentCX.js)（文件很大，3.6M+，如果有后端请尽量使用jieba等分词工具），使用方法如下：
首先在html中引入js包（已使用CDN加速）
```html
<script src="https://cdn.jsdelivr.net/gh/gaowanliang/p/segmentCX.min.js"></script>
```
之后输入js代码
```javascript
const {
    Segment,
    useDefault
} = require('segmentit');

const segmentit = useDefault(new Segment());
const result = segmentit.doSegment('工信处女干事每月经过下属科室都要亲口交代24口交换机等技术性器件的安装工作。');
console.log(result);
```
即可使用此分词系统

#### "看得见"emoji系统

部分emoji在某些平台上尚未支持(如🦴,Windows 10平台可以看见是骨头，Android则为错误显示)，我使用了[1]中的方法在前端对emoji词库进行了修改，使其在任何平台都不会乱码。

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
 
[1] 如何判断当前浏览器是否支持某一个emoji  https://www.jianshu.com/p/52fe1ff46f93

[2] 中文分词模块 https://github.com/gaowanliang/segmentCX

