<template>
  <div class="ap-wrapper">
    <h2>时间轴</h2>
    <a-timeline mode="alternate" style="margin: 40px 0">
      <a-timeline-item>2018-11-11 微信公众号第一篇推文 <a href="/solution/easy/0001-two-sum.html">0001 两数之和</a></a-timeline-item>
      <a-timeline-item color="green">创建 Github Repo <a href="https://github.com/swpuLeo/cattle" >Cattle</a> 2018-11-27</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        2019-02-25 网站 Cattle 上线，访问地址 <a href="https://cattle.w3fun.com">https://cattle.w3fun.com</a>
      </a-timeline-item>
      <a-timeline-item color="red">项目改版启动 <a href="/week/">周计划</a> 2019-07-05</a-timeline-item>
      <a-timeline-item>2019-07-16 项目增加 C++ 题解，感谢 <a href="https://github.com/vailing">vailing</a> 的参与</a-timeline-item>
      <a-timeline-item color="green">上线评论系统，欢迎<a href="/art/#评论">留言</a>，我们一起交流学习 2019-07-16</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        2019-09-02 网站使用自定义布局
      </a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        生活还在继续，重要的时刻还会来临 ...
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.ap-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

.ap-wrapper h2 {
  border-bottom: none;
}
</style>
