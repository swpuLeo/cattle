<template>
  <div style="margin: 2rem 0">
    <a-row>
      <a-col :span="24">
        <a-card hoverable>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="qrcode" @click="toggleWechat" />
            <a-popconfirm
              title="确认前往 GitHub 主页？"
              @confirm="confirm"
              okText="确认"
              cancelText="取消">
                <a-icon type="github" />
            </a-popconfirm>
            <a-icon type="coffee" @click="toggleCoffee" />
            <a-icon type="ellipsis" @click="todo()" />
          </template>
          <a-card-meta
            title="W3Fun"
            description="Do something fun.">
            <a-avatar slot="avatar" src="https://blogw3fun-1253290453.cos.ap-chengdu.myqcloud.com/meta/logo-v3.png" />
          </a-card-meta>
        </a-card>
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
    <a-modal
      title="请我喝杯咖啡"
      :visible="coffeeVisibility"
      :footer="null"
      @cancel="toggleCoffee">
        <div style="text-align: center; margin: 20px;">
          <img src="https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/wechat-pay.png" alt="微信公众号 W3Fun">
        </div>
        <p style="text-align: center">您的赞赏是对我的支持！</p>
    </a-modal>
  </div>
</template>

<script>
import { message } from 'ant-design-vue'

const URL = {
  github: 'https://github.com/swpuLeo'
}
export default {
  name: 'AboutMe',
  data () {
    return {
      wechatVisibility: false,
      coffeeVisibility: false
    }
  },
  methods: {
    toggleWechat () {
      this.wechatVisibility = !this.wechatVisibility
    },
    toggleCoffee () {
      this.coffeeVisibility = !this.coffeeVisibility
    },
    goto (name) {
      window.location.href = URL[name]
    },
    todo () {
      message.info('待开发的功能')
    },
    confirm () {
      this.goto('github')
    }
  }
}
</script>

<style lang="stylus">

</style>
