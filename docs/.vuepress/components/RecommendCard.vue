<template>
  <div style="background-color: #efefef; padding: 20px;">
    <a-collapse v-model="activeKey" accordion>
      <a-collapse-panel header="⭐️ 多语言解题" key="1" :showArrow="false">
        <div>
          <a-tag>JavaScript</a-tag>
          <a-tag>C++</a-tag>
          <a-tag>Python</a-tag>
        </div>
      </a-collapse-panel>
      <a-collapse-panel header="✈️ 所属类型" key="2" :showArrow="false">
        <div>
          <a-tag>简单</a-tag>
          <a-tag>数组</a-tag>
          <a-tag>哈希表</a-tag>
        </div>
      </a-collapse-panel>
      <a-collapse-panel header="🐮 类似题目" key="3" :showArrow="false">
        <p>0015 三数之和</p>
        <p>0016 四数之和</p>
        <p>0167 两数之和 II</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'RecommendCard',
  data () {
    return {
      activeKey: ['1']
    }
  }
}
</script>

<style lang="stylus">

</style>
