<template>
  <div style="margin: 4rem 0">
    <a-divider style="color: #e2e2e2; margin-bottom: 4rem">正文到此结束</a-divider>
    <!-- <div>
      <p style="text-align: center; display: flex; justify-content: space-around">
        <a-badge
          :count="123"
          showZero
          :overflowCount="9999"
          ref="star"
          style="animation: bounce 1s 3">
          <a-button
            shape="circle"
            style="width: 4rem; height: 4rem;"
            class="bounce">点赞</a-button>
        </a-badge>
        <a-badge :count="78" showZero :overflowCount="9999">
          <a-button shape="circle" style="width: 4rem; height: 4rem">下载</a-button>
        </a-badge>
        <a-badge :count="19" showZero :overflowCount="9999">
          <a-button shape="circle" style="width: 4rem; height: 4rem">分享</a-button>
        </a-badge>
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ArticleDivider',
  data () {
    return {
      time: null
    }
  },
}
</script>

<style lang="stylus">
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

.animated {
  -webkit-animation-duration: 1ms !important;
  animation-duration: 1ms !important;
  -webkit-transition-duration: 1ms !important;
  transition-duration: 1ms !important;
  -webkit-animation-iteration-count: 1 !important;
  animation-iteration-count: 1 !important;
}
</style>
