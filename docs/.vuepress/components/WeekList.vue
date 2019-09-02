<template>
  <div class="wl-wrapper">
    <h1 style="margin-bottom: 32px">周计划</h1>
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
      }
    }
  },
  methods: {
    gotoDetail (index) {
      window.location.pathname = `/week/${index}.html`
    }
  }
}
</script>

<style lang="css">
.wl-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
