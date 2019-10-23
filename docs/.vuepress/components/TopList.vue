<template>
  <div class="tl-wrapper">
    <h1 class="heading">LeetCode 精选</h1>
    <div class="tip custom-block">
      <p>Practice makes perfect.</p>
      <p>
        <span class="wechat-trigger" @click="toggleWechat">
          点我
        </span>
        关注微信公众号 W3Fun，不错过每一次更新～
      </p>
    </div>
    <a-row :gutter="40">
      <a-col
        :xs="24"
        :sm="12"
        :lg="8"
        v-for="(item, index) in top"
        :key="index"
        :style="cardStyles">
        <!-- 指定最大高度用于修复布局混乱的 bug -->
        <a-badge :count="index === 0 ? 'new' : ''">
          <a-card
            :title="item.title"
            hoverable
            @click="goto('https://mp.weixin.qq.com/s?__biz=MzIzNDI1MTEyNg==&mid=2247485237&idx=1&sn=1a6d9050968a8ca1b86d218a560ace04&chksm=e8f8712cdf8ff83a0a13405b6c3e16f579c5df627a806214b8344bda1276368ad16c9fa9e1cc&token=244436649&lang=zh_CN#rd', true)"
            style="overflow: hidden">
            <img
              :alt="`top-${item.title}`"
              :src="`https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/solution/top/cover/${item.id}.jpeg`"
              slot="cover"
            />
          </a-card>
        </a-badge>
      </a-col>
    </a-row>
    <a-modal
      title="关注微信公众号 W3Fun"
      :visible="wechatVisibility"
      :footer="null"
      @cancel="toggleWechat">
        <div style="text-align: center; margin-top: 20px;">
          <img src="https://blogw3fun-1253290453.cos.ap-chengdu.myqcloud.com/meta/qrcode_v3_sm.jpg" alt="微信公众号 W3Fun">
        </div>
        <p style="text-align: center">扫描二维码，关注微信公众号 W3Fun</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'TopList',
  data () {
    return {
      wechatVisibility: false,
      cardStyles: {
        margin: '40px 0',
        maxHeight: '160px' // 240 270
      },
      top: [
        { id: '000000', title: '0039、0040 组合总和' }
      ]
    }
  },
  methods: {
    goto (path, isExternal) {
      isExternal ?
      window.location = path :
      window.location.pathname = `/art/${path}.html`
    },
    toggleWechat () {
      this.wechatVisibility = !this.wechatVisibility
    }
  }
}
</script>

<style lang="stylus">
.tl-wrapper
  max-width 960px
  margin 0 auto
  padding 2rem 2.5rem
  .heading
    margin: 4rem 0 2rem
    text-align: center
    color: #2c3e50
    font-size: 3rem
    font-weight: 300
  .wechat-trigger
    color #3eaf7c
    font-weight 500
    cursor pointer
</style>
