<template>
  <div class="wl-wrapper">
    <h1 class="heading">周计划</h1>
    <div class="tip custom-block">
      <p>每周 7 个同类型题目，周五更新～</p>
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
        v-for="(item, index) in week"
        :key="index"
        :style="cardStyles">
        <!-- 指定最大高度用于修复布局混乱的 bug -->
        <a-badge :count="index === 0 ? 'new' : ''">
          <a-card
            :title="`LeetCode 第 ${item} 周`"
            hoverable
            @click="gotoDetail(item)"
            style="overflow: hidden">
            <img
              :alt="`week-${item}`"
              :src="`https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/week/cover/${item}.jpeg`"
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
const genArray = (start, end) => {
  return Array.from(new Array(end + 1).keys()).slice(start)
}

const start = new Date('2019-07-05')
const end = new Date()
const diff = Math.floor((end - start) / 604800000)

export default {
  name: 'WeekList',
  data () {
    return {
      week: genArray(5, 5 + diff).reverse(),
      height: 0,
      cardStyles: {
        margin: '40px 0',
        maxHeight: '160px' // 240 270
      },
      wechatVisibility: false
    }
  },
  methods: {
    gotoDetail (index) {
      window.location.pathname = `/week/${index}.html`
    },
    toggleWechat () {
      this.wechatVisibility = !this.wechatVisibility
    }
  }
}
</script>

<style lang="stylus">
.wl-wrapper {
  max-width 960px
  margin 0 auto
  padding 2rem 2.5rem

  .heading {
    margin 4rem 0 2rem
    text-align center
    color #2c3e50
    font-size 3rem
    font-weight 300
  }

  .wechat-trigger {
    color #3eaf7c
    font-weight 500
    cursor pointer
  }
}
</style>
