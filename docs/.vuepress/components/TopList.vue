<template>
  <div class="tl-wrapper">
    <h1 class="heading">LeetCode 精选</h1>
    <h2 class="subheading">精选 100 题</h2>
    <a-table :columns="columns" :dataSource="data" :pagination="data.length > 10">
      <a
        slot="name"
        slot-scope="text, record"
        :href="record.link">
          {{`${record.key} ${text}`}}
      </a>
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" :color="linkMap[tag]['color']" :key="tag" @click="goto(linkMap[tag]['path'])">
          {{tag}}
        </a-tag>
      </span>
      <span slot="difficulty" slot-scope="text">
        <a :href="`/solution/${linkMap[text]['path']}/`">{{text}}</a>
      </span>
      <span slot="source" slot-scope="text, record">
        <a-tag
          v-for="srcType in text"
          :color="linkMap[srcType]['color']"
          :key="srcType"
          @click="goto(`https://github.com/swpuLeo/cattle/blob/master/src/${record.difficultyEn}/${record.path}.${srcType}`, true)">
            {{srcType}}
        </a-tag>
      </span>
    </a-table>
  </div>
</template>

<script>
import { LINK_MAP } from '../constants'
import top from '../db/solution/top'
const columns = [
  {
    title: '题目索引',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    slot: 'tags',
    width: '24%',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '难度',
    key: 'difficulty',
    dataIndex: 'difficulty',
    width: '10%',
    scopedSlots: { customRender: 'difficulty' },
  },
  {
    title: '源码',
    key: 'source',
    dataIndex: 'source',
    slot: 'source',
    width: '24%',
    scopedSlots: { customRender: 'source' },
  }
]

export default {
  name: 'TopList',
  data () {
    return {
      data: top,
      columns,
      linkMap: LINK_MAP
    }
  },
  methods: {
    goto (path, isExternal) {
      isExternal ?
      window.location = path :
      window.location.pathname = `/art/${path}.html`
    }
  }
}
</script>

<style lang="stylus">
.tl-wrapper
  max-width: 740px
  margin: 0 auto
  padding: 2rem 2.5rem
  .heading
    margin: 4rem 0 2rem
    text-align: center
    color: #2c3e50
    font-size: 3rem
    font-weight: 300
  .subheading
    margin-bottom: 2rem
    text-align: center
    color: #2c3e50
    font-size: 1.8rem
    font-weight: 400
    border-bottom: 0
</style>
