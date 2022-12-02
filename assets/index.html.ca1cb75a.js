import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as s,b as a,d as e,f as t,r as i}from"./app.76aaae20.js";const l={},r=t(`<h1 id="vuepress-搭建博客" tabindex="-1"><a class="header-anchor" href="#vuepress-搭建博客" aria-hidden="true">#</a> vuepress 搭建博客</h1><h2 id="vuepress-搭建博客基本步骤" tabindex="-1"><a class="header-anchor" href="#vuepress-搭建博客基本步骤" aria-hidden="true">#</a> vuepress 搭建博客基本步骤</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> myblog <span class="token comment"># 新建文件夹</span>
<span class="token builtin class-name">cd</span> myblog <span class="token comment"># 进入文件夹</span>
<span class="token function">npm</span> init <span class="token comment"># 初始化包管理器</span>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress <span class="token comment"># yarm add -D vuepress  把vuepress安装为本地依赖</span>
<span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md  <span class="token comment"># 创建第一篇文档</span>
<span class="token function">npm</span> run docs:dev <span class="token comment"># 添加脚步后执行运行命令在本地启动服务器</span>
<span class="token function">npm</span> i vuepress-theme-hope <span class="token parameter variable">-D</span>  <span class="token comment"># 安装主题插件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-package-json-中添加脚本" tabindex="-1"><a class="header-anchor" href="#在-package-json-中添加脚本" aria-hidden="true">#</a> 在 <code>package.json</code> 中添加脚本</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建docs-vuepress-config-ts配置文件" tabindex="-1"><a class="header-anchor" href="#创建docs-vuepress-config-ts配置文件" aria-hidden="true">#</a> 创建<code>docs/.vuepress/config.ts</code>配置文件</h3>`,6),u={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/get-started/intro.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://vuepress-theme-hope.github.io/v1/md-enhance/zh/guide/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>vuepress-theme-hope基本配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> hope <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> hope<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&quot;恐龙🦕&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// repo: &quot;https://github.com/vuepress-theme-hope/vuepress-theme-hope-v1&quot;,</span>
     <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Blog Home&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;前端&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue/&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/vue/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;modifiers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;temp&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;vue3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//  markdown增强配置</span>
    <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enableAll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用全部功能 （请仅将此选项用于体验或测试） 启用不需要的功能将增加开发和构建时间</span>
      <span class="token literal-property property">presentation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;highlight&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;notes&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;anything&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;audio&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;chalkboard&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工程目录结构" tabindex="-1"><a class="header-anchor" href="#工程目录结构" aria-hidden="true">#</a> 工程目录结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── docs
│   ├── .vuepress <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │   ├── components <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │   ├── theme <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │   │   └── Layout.vue
│   │   ├── public <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │   ├── styles <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates <span class="token punctuation">(</span>可选的, 谨慎配置<span class="token punctuation">)</span>
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │   └── enhanceApp.js <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs/.vuepress</code>: 用于存放全局的配置、组件、静态资源等。<br><code>docs/.vuepress/components</code>: 该目录中的 Vue 组件将会被自动注册为全局组件。<br><code>docs/.vuepress/theme</code>: 用于存放本地主题。<br><code>docs/.vuepress/styles</code>: 用于存放样式相关的文件。<br><code>docs/.vuepress/styles/index.styl</code>: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。<br><code>docs/.vuepress/styles/palette.styl</code>: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。<br><code>docs/.vuepress/public</code>: 静态资源目录。<br><code>docs/.vuepress/template</code>s: 存储 HTML 模板文件。<br><code>docs/.vuepress/templates/dev.html</code>: 用于开发环境的 HTML 模板文件。<br><code>docs/.vuepress/templates/ssr.html</code>: 构建时基于 Vue SSR 的 HTML 模板文件。<br><code>docs/.vuepress/config.js</code>: 配置文件的入口文件，也可以是 YML 或 toml。<br><code>docs/.vuepress/enhanceApp.js</code>: 客户端应用的增强。</p><table><thead><tr><th>文件的相对路径</th><th>页面路由地址</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/config.md</code></td><td><code>/config.html</code></td></tr></tbody></table><h2 id="vuepress-升级2-0" tabindex="-1"><a class="header-anchor" href="#vuepress-升级2-0" aria-hidden="true">#</a> vuepress 升级2.0</h2><p>直接theme-hope主题初始化项目，删除模版页面, 把pages文件过去，配路由即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope@next myblog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vuepress2-0组件引入" tabindex="-1"><a class="header-anchor" href="#vuepress2-0组件引入" aria-hidden="true">#</a> vuepress2.0组件引入</h2><p>安装<code>@vuepress/plugin-register-components</code></p>`,11);function k(m,b){const n=i("ExternalLinkIcon");return o(),c("div",null,[r,s("p",null,[s("a",u,[a("vuepress-theme-hope使用文档地址"),e(n)])]),s("p",null,[s("a",d,[a("markdown增强使用文档"),e(n)])]),v])}const q=p(l,[["render",k],["__file","index.html.vue"]]);export{q as default};
