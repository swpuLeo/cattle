<template>
  <div class="t-wrapper">
    <h1 class="heading">{{title}}</h1>
    <h2 class="subheading">{{subtitle}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      require: true
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style scoped>
.t-wrapper .heading {
  margin: 4rem 0 2rem;
  text-align: center;
  color: #2c3e50;
  font-size: 3rem;
  font-weight: 300;
}

.t-wrapper .subheading {
  margin-bottom: 2rem;
  text-align: center;
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 400;
}
</style>
