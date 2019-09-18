<template>
  <div>
    <a-list :grid="{ column: 1 }" :dataSource="dataSource">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.title" class="solution-item" hoverable>
          <a :href="item.link" slot="extra">查看更多</a>
          <div :style="genStyle(item.imgUrl)"></div>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'SolutionItem',
  props: {
    dataSource: {
      type: Array,
      required: true
    }
  },
  methods: {
    genStyle (url) {
      return {
        width: '560px',
        height: '400px',
        background: `url(${url})`,
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center'
      }
    }
  }
}
</script>

<style lang="stylus">
.solution-item {
  margin-bottom 2rem
  &:first-child {
    margin-top 2rem
  }
}
</style>
