module.exports = {
  base: '/',
  dest: 'dist',
  title: 'Cattle',
  description: '使用 JavaScript 刷 LeetCode 的历程',
  serviceWorker: true,
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  themeConfig: {
    nav: [
      { text: '从这里开始', link: '/art/' },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/swpuLeo/leetcode'}
    ],
    sidebarDepth: 3,
    sidebar: {
      '/art/': [
        {
          title: '从这里开始（正在更新 ...）',
          children: [
            '',
            'tree'
          ]
        }
      ]
    }
  }
}