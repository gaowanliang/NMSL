# NMSL
## 一个纯前端的抽象话转换器

> 人人都说抽象话，无人识得李老八。

**抽象话**是指从孙笑川所属的抽象工作室流传出的词汇，而现在随着狗粉丝们不断造梗，也出现了一些新的词语。抽象话本来只反复出现在孙笑川微博的评论里面，但随着抽象文化的兴起，抽象话也随之在互联网上扩散，许多地方都有抽象话的影子。

本人**儒雅随和**，自然对于抽象话很感兴趣，于是制作了这个在线的转换工具,点击链接即可在线体验：https://chouxiang.ml/

### 特点
本网页为纯前端制作，无后台服务器，大家可以在[assert/js/main.js](https://github.com/gaowanliang/NMSL/blob/master/assert/js/main.js)找到完整的抽象话对应表。

本网页使用了一个纯前端中文分词系统 [segmentit.js](https://github.com/gaowanliang/NMSL/blob/master/assert/js/segmentit.js)（文件很大，3.6M+，如果有后端请尽量使用jieba等分词工具），使用的词库比较老旧，有时间会更新。使用方法如下：
首先在html中引入js包（已使用CDN加速）
```html
<script src="https://cdn.jsdelivr.net/gh/gaowanliang/p/segmentit.js"></script>
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