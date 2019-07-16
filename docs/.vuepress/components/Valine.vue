<template>
  <div class="page">
    <section class="page-edit">
      <div>
        <span class="leancloud-visitors" data-flag-title="Your Article Title">
          <em class="post-meta-item-text">阅读量：</em>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div>
      <h3>
        <a href="javascript;"></a>评论：
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
        avator: 'monster',
        placeholder: '雁过留痕'
      })
    }
  }
}
</script>

