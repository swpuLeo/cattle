<template>
  <div class="wl-wrapper">
    <h1 style="margin-bottom: 32px">周计划</h1>
    <a-row :gutter="40">
      <a-col
        :span="8"
        v-for="(item, index) in [5, 6, 7, 8, 9, 10, 11, 12, 13].reverse()"
        :key="index"
        style="margin-bottom: 40px">
        <a-badge :count="index === 0 ? 'new' : ''">
          <a-card :title="`LeetCode 第 ${item} 周`" hoverable>
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
export default {
  name: 'WeekList'
}
</script>

<style lang="css">
.wl-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
