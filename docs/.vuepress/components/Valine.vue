<template>
  <div class="page">
    <section class="page-edit">
      <div>
        <span class="leancloud-visitors" data-flag-title="Your Article Title">
          <span class="post-meta-item-text">阅读量：</span>
          <span class="leancloud-visitors-count"></span>
        </span>
      </div>
      <h3 id="评论">
        <a href="#评论" aria-hidden="true" class="header-anchor">#</a>
        评论：
      </h3>
      <div id="vcomments"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Valine',
  mounted () {
    const Valine = require('valine')
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    this.valine = new Valine()
    this.initValine()
  },
  watch: {
    $route (to, from) {
      if (from.path !== to.path) {
        this.initValine()
      }
    }
  },
  methods: {
    initValine () {
      const path = location.origin + location.pathname
      document.getElementsByClassName('leancloud-visitors')[0].id = path
      this.valine.init({
        el: '#vcomments',
        appId: 'OXj2RFRMsChRdJd50DEGwBFi-gzGzoHsz',
        appKey: 'OkeTOdcunxXlGa59oNdFfo5I',
        notify: false,
        verify: true,
        path,
        visitor: true,
        avatar: 'monsterid',
        placeholder: '为了更好地交流，评论时可以填写自己的昵称、邮箱和网址（推荐 GitHub 地址或者你的博客地址）'
      })
    }
  }
}
</script>

