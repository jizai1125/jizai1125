module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    link: "/frontend/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: "HTML",
        link: '/html/'
      },
      {
        text: "CSS",
        link: '/css/'
      },
      {
        text: "JavaScript",
        link: '/javascript/'
      },
      {
        text: "框架",
        link: '/framework/'
      },
    ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
];
