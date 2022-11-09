<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: "Github Finder",
  },
});
</script>
<template>
  <header class="header">
    <div class="content">
      <b>{{ content }}</b>
    </div>
  </header>
</template>
<style lang="less" scoped>
.header {
  background-color: red;
  height: 80px;
  line-height: 80px;
  .content {
    width: 100%;
    min-width: 600px;
    max-width: 800px;
    margin: 0 auto;
    color: #fff;
    font-size: 30px;
  }
}
</style>
