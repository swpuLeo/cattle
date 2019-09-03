<template>
  <div class="ap-wrapper">
    <h1>Cattle</h1>
    <h2>前端数据结构与算法</h2>
    <div style="text-align: center">
      <img src="https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/meta/cattle-128.png" alt="Cattle logo">
    </div>
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
    <h2>W3Fun</h2>
    <!-- <p>
      访问 W3Fun 主站 <a href="https://w3fun.com">https://w3fun.com</a><br/>
      <span style="color: #3eaf7c; font-weight: 500" @click="toggleWechat">点我</span>关注微信公众号 W3Fun，不错过每一次更新～
    </p> -->
    <a-row>
      <a-col :span="8" :offset="8">
        <a-card hoverable>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            slot="cover"
          />
          <template class="ant-card-actions" slot="actions">
            <a-icon type="qrcode" @click="toggleWechat" />
            <a-icon type="github" @click="goto('github')" />
            <a-icon type="coffee" @click="todo()" />
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
    <h2>声明</h2>
    <a-alert
      message="版权声明"
      description="
        本站所有文章除特别声明外，均采用 [署名-非商业性使用-禁止演绎 4.0 国际（CC BY-NC-ND 4.0）](https://creativecommons.org/licenses/by-nc-nd/4.0/) 许可协议。转载请注明出处：https://cattle.w3fun.com"
      type="warning" showIcon />
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
import { message } from 'ant-design-vue'

const URL = {
  github: 'https://github.com/swpuLeo'
}
export default {
  name: 'AboutPage',
  data () {
    return {
      wechatVisibility: false
    }
  },
  methods: {
    toggleWechat () {
      this.wechatVisibility = !this.wechatVisibility
    },
    goto (name) {
      window.location.href = URL[name]
    },
    todo () {
      message.info('待开发的功能')
    }
  }
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
