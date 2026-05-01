# 隐藏加载图标

SillyTavern 1.13（17）版本更新后，加载界面多了一个 logo 图标，很丑。这个扩展就是用来把它藏掉的，装上就生效，没有任何设置项。

## 效果

酒馆启动时那个转圈加载界面中间的 logo 不会再出现，其他东西照常。

## 安装

**方式一：扩展面板安装（推荐给不会折腾文件的人）**

打开酒馆 → 点顶部 Extensions（扩展）按钮 → Install extension → 把这个仓库的链接贴进去 → 回车 → 刷新页面。完事。

**方式二：手动丢文件**

把 `hide-splash-logo` 这个文件夹整个扔到：

```
SillyTavern/public/scripts/extensions/third-party/
```

然后刷新酒馆页面就行。

## 卸载

扩展面板里点删除，或者直接把 `third-party/hide-splash-logo` 文件夹删掉。

## 原理（感兴趣再看）

等价于在 `loader.css` 末尾加这么一句：

```css
#loader.splash-screen .splash-logo,
#loader.splash-screen .splash-message {
    display: none !important;
}
```

但因为是扩展，不用改源文件，酒馆更新也不会被覆盖掉。额外还加了一小段 JS，把 logo 节点直接从页面上摘掉，防止出现"闪一下才消失"的情况。

## License

MIT
