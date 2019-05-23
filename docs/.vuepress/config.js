const path = require('path');
const fs = require('fs');

const getAllMdFile = dir => {
  return fs.readdirSync(dir).slice(0, -1).map(file => {
    return file.slice(0, file.length - 3);
  });
};

const easyChildren = getAllMdFile('docs/solution/easy/');
console.log(easyChildren)

module.exports = {
  base: '/',
  title: 'Cattle',
  description: '使用 JavaScript 刷 LeetCode 的历程',
  head: [
    ['link', { rel: 'icon', href: 'https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/meta/cattle-16.png' }]
  ],
  ga: 'UA-134130074-2',
  serviceWorker: true,
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  themeConfig: {
    nav: [
      { text: '从这里开始', link: '/art/' },
      { text: '周一计划', link: '/plan/' },
      { text: '周五复盘', link: '/review/' },
      { text: '文章', link: '/idea/' },
      {
        text: '题库',
        items: [
          //{ text: '题目索引', link: '/solution/' },
          { text: '简单', link: '/solution/easy/' },
          { text: '中等', link: '/solution/medium/' },
          { text: '困难', link: '/solution/diffcult/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: '更新日志', link: '/log/' },
      { text: 'GitHub', link: 'https://github.com/swpuLeo/cattle'}
    ],
    sidebarDepth: 3,
    sidebar: {
      '/art/': [
        {
          title: '从这里开始（正在更新 ...）',
          children: [
            '',
            'array',
            'string',
            'hash',
            'tree',
            'bit-manipulation',
            'math',
            'binary-search',
            'greedy',
            'to-be-classified'
          ]
        }
      ],
      '/solution/easy/': [
        {
          title: '简单题索引',
          children: easyChildren,
        }
      ],
      '/plan/': [
        {
          title: '周一计划',
          children: [
            '',
            'monday-plan-001',
            'monday-plan-002',
            'monday-plan-003'
          ]
        }
      ],
      '/review/': [
        {
          title: '周五复盘',
          children: [
            '',
            'friday-review-001',
            'friday-review-002',
            'friday-review-003'
          ]
        }
      ]
    }
  },
  plugins: ['@vuepress/register-components']
}
