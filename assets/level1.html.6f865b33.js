import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as u,a as n,b as s,d as t,w as o,f as a,r as i}from"./app.76aaae20.js";const r={},d=a(`<h1 id="初级问题-基本使用" tabindex="-1"><a class="header-anchor" href="#初级问题-基本使用" aria-hidden="true">#</a> 初级问题（基本使用）</h1><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><ol><li>em,rem</li></ol><details class="custom-container details"><summary>Details</summary><p>em：继承父级元素字体大小，表示父元素单位的倍数.<br> rem：表示根元素单位的倍数，一般用于移动端字体适配</p></details><ol start="2"><li>垂直水平居中</li></ol><details class="custom-container details"><summary>Details</summary><ol><li>行内（块）元素水平居中：display: inline-block | inline-flex | inline-grid | inline-table，父元素设置：text-align: center</li><li>有宽度块元素水平居中，margin: 0 auto</li><li>垂直居中：vertical-align: middle;/line-height = height</li><li>垂直水平居中： <ol><li>子元素不固定宽高，父元素display: table-cell;vertical-align: middle;text-align:center;width:100vw;height:100vh;</li><li>子元素不固定宽高, 绝对定位top/left: 50%;transform: translate(-50%, -50%);</li><li>子元素固定宽高块级元素, 绝对定位0 + margin:auto;</li><li>子元素不固定宽高, 父亲元素：display: flex;align-items: center;justify-content: center;</li><li>单行文字，line-height = height ， text-align:center;</li></ol></li></ol></details><ol start="3"><li>浏览器默认最小字体？怎么6px?</li></ol><details class="custom-container details"><summary>Details</summary><p>12px,</p><ol><li>transform: scale(.5);单行、多行文本都可使用,只是视觉效果变小，并不会改变盒子的实际占位，在对齐其他盒子时不太友好</li><li>svg包含text标签，给svg设置宽高</li></ol></details><ol start="4"><li>移动端、PC端的适配了解吗？能不能提供一些适配方案？</li></ol><details class="custom-container details"><summary>Details</summary><ol><li>一套页面，从设计时就考虑到跨设备适配，响应式的一步到位；</li><li>开发两套页面，根据设备尺寸加载加载不同的资源，目前已经不常见了</li></ol><p>响应式方案:</p><ol><li>媒体查询</li><li>百分比比例缩放</li><li>弹性布局</li><li>rem, vm, vh,rpx</li></ol></details><ol start="5"><li>CSS3新增属性</li></ol><details class="custom-container details"><summary>Details</summary><p><strong>CSS3</strong></p><ul><li>阴影:使用box-shadow给逻辑框设置一个阴影，text-shadow文字加阴影</li><li>圆角：使用border-image和它关联的普通属性，而且可以通过border-radius属性来支持圆角边框</li><li>动画：为你的样式设置动画使用CSS Transitions以在不同的状态间设置动画，或者使用CSS Animations在页面的某些部分设置动画而不需要一个触发事件，你现在可以在页面中控制移动元素了</li><li>flex布局：css多栏布局</li><li>grid布局：网格布局</li><li>线性渐变：使用gradient设置线性渐变</li><li>媒体查询：根据显示设备的特性设置css</li><li>图片边框：使用border-image设置图片边框</li></ul></details><ol start="6"><li>css盒子模型(标准盒模型、怪异盒模型) :::tips 标准盒模型:border-box 怪异盒模型:content-box :::</li><li>flex布局属性</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* box */</span>
<span class="token comment">/* display: flex | inline-flex */</span>
<span class="token comment">/* 方向： flex-direction: row | column | reverse-row */</span>
<span class="token comment">/* 换行： flex-wrap: nowrap | wrap | wrap-reverse */</span>
<span class="token comment">/* flex-flow:  &lt;flex-direction&gt; &lt;flex-wrap&gt;*/</span>
<span class="token comment">/* 水平：justify-content: flex-start | flex-end | space-between | space-around | center */</span>
<span class="token comment">/* 垂直：align-items: flex-start | flex-end | center | stretch | baseline */</span>
<span class="token comment">/* 内容：align-content: flex-start | flex-end | center | stretch | space-between | space-around */</span>

<span class="token comment">/* items */</span>
<span class="token comment">/* 顺序：order: num; 0 */</span>
<span class="token comment">/* 放大：flex-grow: 0 | 1 */</span>
<span class="token comment">/* 缩小：flex-shrink: 1 | 0; */</span>
<span class="token comment">/* 缩放前大小：flex-base: auto; */</span>
<span class="token comment">/* flex: flex-grow flex-shrink flex-base; 0 1 auto; */</span>
<span class="token comment">/* 垂直：align-sleft: flex-start | flex-end | center | stretch | baseline */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>说说重绘与重排（区别+优化方案）</li></ol>`,15),k={class:"custom-container details"},m=n("summary",null,"Details",-1),v=n("p",null,[n("strong",null,"页面生成的过程：")],-1),b=n("ol",null,[n("li",null,"HTML 被解析成DOM树"),n("li",null,"CSS 被解析成CSSOM树"),n("li",null,"DOM树和CSSOM树结合（attachment）生成渲染树（Render Tree）"),n("li",null,"浏览器按照渲染树在屏幕上画出所以节点，生成布局flow"),n("li",null,"将布局绘制在屏幕上，显示出整个页面")],-1),g=n("p",null,"第四第五步就是我们通常所说的渲染",-1),h={href:"https://juejin.cn/post/6844904083212468238",target:"_blank",rel:"noopener noreferrer"},f=n("strong",null,"网页生成的时候，至少会渲染一次。在用户访问的过程中，还会不断触发重排(reflow)和重绘(repaint)",-1),y=a("<p>**重绘：**某些元素的外观被改变，例如：元素的填充颜色 <strong>重排：<strong>当DOM的变化影响了元素的几何信息(元素的的</strong>位置和尺寸</strong>)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。</p><p>重排也叫回流，简单的说就是重新生成布局，重新排列元素。</p><p>重绘不一定导致重排，但重排一定会导致重绘。</p><p>会发生重排：</p><ul><li>页面初始渲染，这是开销最大的一次重排</li><li>添加/删除可见的DOM元素</li><li>改变元素位置</li><li>改变元素尺寸，比如边距、填充、边框、宽度和高度等</li><li>改变元素内容，比如文字数量，图片大小等</li><li>改变元素字体大小</li><li>改变浏览器窗口尺寸，比如resize事件发生时</li><li>激活CSS伪类（例如：:hover）</li><li>设置 style 属性的值，因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow</li><li>查询某些属性或调用某些计算方法：offsetWidth、offsetHeight等，除此之外，当我们调用 getComputedStyle方法，或者IE里的 currentStyle 时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。</li></ul>",5),x=a(`<ol start="9"><li>响应式布局的实现原理</li></ol><details class="custom-container details"><summary>Details</summary><p>响应式（一套代码）:自动识别屏幕宽度，并做出相应调整的网页设计 自适应（多套代码）：自动适应不同大小的屏幕，根据屏幕宽度，自动调整网页内容大小</p><p>实现方式：</p><ol><li>媒体查询<code>@media screen and (max/min-width: 1024px)</code></li><li>百分比</li><li>rem</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>414px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
	<span class="token selector">html</span><span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span>18px
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>375px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
	<span class="token selector">html</span><span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span>16px
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>320px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
	<span class="token selector">html</span><span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span>12px
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//动态为根元素设置字体大小</span>
<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//获取屏幕宽度</span>
	<span class="token keyword">var</span> width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth
	<span class="token comment">//设置根元素字体大小，此时为宽的10等分</span>
	document<span class="token punctuation">.</span>documentELement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> width<span class="token operator">/</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 首次加载应用，设置一次</span>
<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//监听手机旋转的事件的时机，重新设置</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;orienttationchange&#39;</span><span class="token punctuation">,</span>init<span class="token punctuation">)</span>
<span class="token comment">//监听手机窗口变化，重新设置</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>init<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>视口单位 vw/vh/vmax/vmin</li><li>图片式响应 <ul><li>另一种就是根据不同屏幕的分辨率和设备像素比来尽可能选择高分辨率的图片,小屏幕上用小图来代替,减少网络带宽</li></ul></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 图片随容器大小缩放 */</span>
<span class="token selector">img</span><span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
	<span class="token property">max-width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么不使用width:100%呢？ 这样会导致它显示得跟它的容器一样宽，当容器过大图片被过度拉伸。</p><p>ui设计稿为750px。真实窗口是350px。如何设置rem（应该是靠rem的计算原理，怎么通过rem实现响应式的）? font-size = width/750 + font-size</p></details><ol start="10"><li>说说BFC(原理+触发机制)</li></ol><details class="custom-container details"><summary>Details</summary><p>BFC 计算规则：</p><ul><li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。</li><li>算BFC的高度时，浮动元素也参与计算。</li><li>BFC的区域不会与float box重叠。</li><li>内部的Box会在垂直方向，一个接一个地放置。</li><li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。</li></ul><p>BFC触发条件：</p><ol><li>float的值不是none。</li><li>position的值不是static或者relative。</li><li>display的值是inline-block、table-cell、flex、table-caption或者inline-flex</li><li>overflow的值不是visible</li></ol></details><p>BFC的作用</p><ol><li>利用BFC避免margin重叠。<br> 属于同一个BFC的两个相邻的Box会发生margin重叠，所以我们可以设置，两个不同的BFC、</li></ol>`,6),w=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("看看我的 margin是多少"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("看看我的 margin是多少"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table-cell"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("看看我的 margin是多少"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("看看我的 margin是多少"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #f55"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" yellow"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s("center"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("ol",{start:"2"},[n("li",null,"自适应两栏布局 BFC的区域不会与float box重叠。")],-1),j=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("LEFT"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("RIGHT"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".left"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("139"),n("span",{class:"token punctuation"},","),s(" 214"),n("span",{class:"token punctuation"},","),s(" 78"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
 
    `),n("span",{class:"token selector"},".right"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" hidden"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("170"),n("span",{class:"token punctuation"},","),s(" 54"),n("span",{class:"token punctuation"},","),s(" 236"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("ol",{start:"3"},[n("li",null,"阻止元素被浮动元素覆盖"),n("li",null,"清除内部浮动")],-1),D=a('<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><p>---------------------------------------------------------------------------------------------》</p><ol><li>HTML5新增特性</li></ol><details class="custom-container details"><summary>Details</summary><p><strong>HTML5</strong>：</p><ul><li>以前用得比较多的是语意化标签：header、nav、 footer、 aside、 article、 section。</li><li>本地离线存储（ localStorage）和会话存储（ sessionStorage）</li><li>表单控件包括 calendar、date、time、 email、url、 search，用得比较少，现在都是直接用UI框架的</li><li>SVG，画布（ Canvas）API</li><li>音频、视频（ audio、 video）API</li><li>Web Sockets：允许在页面和服务器之间建立持久连接并通过这种方法来交换非 HTML 数据。</li><li>Server-sent events：允许服务器向客户端推送事件，而不是仅在响应客户端请求时服务器才能发送数据的传统范式。</li><li>WebRTC：这项技术，其中的 RTC 代表的是即时通信，允许连接到其他人，直接在浏览器中控制视频会议，而不需要一个插件或是外部的应用程序。</li><li>Web Workers：能够把 JavaScript 计算委托给后台线程，通过允许这些活动以防止使交互型事件变得缓慢。</li><li>XMLHttpRequest：允许异步读取页面的某些部分，允许其显示动态内容，根据时间和用户行为而有所不同。这是在Ajax背后的技术。</li><li>History API：允许对浏览器历史记录进行操作。这对于那些交互地加载新信息的页面尤其有用。</li><li>拖放：HTML5 的拖放 API 能够支持在网站内部和网站之间拖放项目。同时也提供了一个更简单的供扩展和基于 Mozilla 的应用程序使用的 API。</li><li>IndexedDB：是一个为了能够在浏览器中存储大量结构化数据，并且能够在这些数据上使用索引进行高性能检索的 Web 标准。</li><li>Geolocation：地理API</li></ul></details><h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h2><p>----------------------------------------------------------------------------------------------------》</p><ol><li>forEach、for...in、for...of、命令式 for 循环, 四者的性能比较</li></ol><details class="custom-container details"><summary>Details</summary><ul><li>forEach是遍历数组，不改变原数组；</li><li>for..in遍历对象的key；</li><li>for ... of 遍历可迭代数据类型（遍历的是值），遍历普通对象会报错，因为对象没有Symbol.iterator属性； 要遍历对象可以这样子写：<code>for (let o of Object.keys(obj))</code></li><li>for JS最原始的循环写法，可以使用return/break跳出循环，用continue跳过当前循环继续下一次 ，可用lable标记跳出/继续具体哪个循环体</li></ul></details>',8),B={start:"2"},F={href:"https://zhuanlan.zhihu.com/p/78661051",target:"_blank",rel:"noopener noreferrer"},O=a('<details class="custom-container details"><summary>Details</summary><p><strong>ES6</strong>：</p><ul><li>let和const关键字：let关键字定义块作用域变量，const定义常量</li><li>字符串模版：<code>${}</code></li><li>箭头函数：左边是参数集合，右边是函数体</li><li>原生promise对象：将promise对象纳入规范</li><li>symbol：增加symbol数据类型</li><li>ES module: 引用ES module 模块化规范</li><li>... : 拓展运算符，用来代替argument对象</li><li>变量结构赋值</li><li>async函数</li><li>set和map函数</li><li>for..of循环：用来遍历实现迭代器接口的数据</li><li>class</li></ul></details>',1),A={start:"3"},z={href:"https://blog.csdn.net/xieanna123/article/details/110952381",target:"_blank",rel:"noopener noreferrer"},I=a(`<details class="custom-container details"><summary>Details</summary><p>CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。<br> 而ES6模块化在浏览器和node.js中都可以用。<br><strong>1. 语法差异</strong> CommonJS 模块使用require()和module.exports ES6 模块使用import和export。 在node.js使用模块化，需要将 CommonJS 脚本的后缀名都改成.cjs， ES6 模块采用.mjs后缀文件名。或者修改package.son里面的文件，type字段为module或commonjs。</p></details><ol start="4"><li>手写深克隆</li></ol><details class="custom-container details"><summary>Details</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> Object<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">let</span> resObj <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> prop <span class="token operator">=</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>prop <span class="token operator">==</span> obj<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 避免相互引用造成死循环</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 子属性为引用类型，递归拷贝</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>prop <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> prop <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          resObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
          resObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> prop
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> resObj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3);function L(M,H){const e=i("ExternalLinkIcon"),l=i("CodeDemo");return c(),u("div",null,[d,n("details",k,[m,v,b,g,n("p",null,[n("strong",null,[n("a",h,[s("渲染"),t(e)])]),s("： 在页面的生命周期中，"),f,s("， 不管页面发生了重绘还是重排，都会影响性能，最可怕的是重排，会使我们付出高额的性能代价，所以我们应尽量避免。")]),y]),x,t(l,{id:"code-demo-455",type:"normal",title:"%E5%8F%AF%E9%80%89%E7%9A%84%E6%A0%87%E9%A2%98%E6%96%87%E5%AD%97",code:"eNq1T70OgjAQfpVLXSUajUtFn4SllgqNZ2lojRLj5mDixGaIo7u+FPAa8mMCbi5ebvp+7vvuSEK7RUKJazRTS08BuHpZ3q/VFpe0zM6wZXEgVXF75o8sf6XuSDeyH4Xu6HO4CQBjExQLj/jSaGQJBctWKBwuEOce+Wc+GRJuTPWphmPrr4dHGMUUBuvZbN6hK8Y3QRztlE8hqapF+x65l74NKUzGY33owSiVcEIhg9DW5BdnxcE6DGWgKBfKirjHta0pTDvLqWp7egOJTJ1I"},{default:o(()=>[w,_]),_:1}),S,t(l,{id:"code-demo-466",type:"normal",title:"%E5%8F%AF%E9%80%89%E7%9A%84%E6%A0%87%E9%A2%98%E6%96%87%E5%AD%97",code:"eNqdj81OwzAQhF9l5RNISZufloIJvfEncUIcc0nibWxhbGSbtlD13bEpUDf0xF5szY5m9tsQ7l4koaRqNXuf1wr8VEwsoZONtVc1kbhwNZk/XN88VWO/OOYxoufB9Hh/e/frqsbfkSQhnbW+YxSyYLMLCLMSzHEKeZa9ri/3MseQR2F6KC+kbrwaQiK1bbrn3ug3xSiYvj3Jy4sEinySwOz8NPI5XLu0kaJXFDpUDk20lEJh+lObD3u1cqkVH0ih2G+2/tn9Rl/4MZdeovHXrihwwRiqI2xD5j8YsyyBqacoyrP/YZSDhghjcoBBtp8hVZTI"},{default:o(()=>[j,E,C]),_:1}),D,n("ol",B,[n("li",null,[s("ES6新增特性 "),n("a",F,[s("答案地址"),t(e)])])]),O,n("ol",A,[n("li",null,[n("a",z,[s("commonjs与es6模块化区别"),t(e)])])]),I])}const N=p(r,[["render",L],["__file","level1.html.vue"]]);export{N as default};
