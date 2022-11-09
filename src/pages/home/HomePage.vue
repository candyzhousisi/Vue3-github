<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Search from "../../components/Search.vue";
import Card from "../../components/Card.vue";
const list = ref<any[]>([])

const getGitList = async (q: string) => {
  try {
    const res = await (await fetch(`https://api.github.com/search/users?q=${q}`)).json()
    console.log(res);
    list.value = res.items
  } catch (error) {

  }
}
const onClear = () => { }
const onSearch = (q: string) => { getGitList(q) }
onMounted(() => { })
</script>
<template>
  <div class="home-page">
    <Search :show-btn="!!list.length" @on-clear="onClear" @on-search="onSearch" />
    <div class="home-card-box">

      <Card v-for="item in list" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  &-page {
    width: 100vw;
    min-height: 100vh;
    min-width: 600px;
    max-width: 800px;
    margin: 0 auto;
  }

  &-card-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 15px;
    column-gap: 15px;
    margin-top: 20px;
  }
}
</style>
