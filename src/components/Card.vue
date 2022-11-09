<!-- <script  lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Card',
  props: {
    show:Boolean
  },
  setup(props, context) {
    
    return {
      ref: '123'
    }
  }
})
</script> -->
<!-- <script lang="ts">
export default {
  name: 'ddd'
}</script> -->
<script setup lang="ts">

import { Ref } from 'vue';
import { RouterLink as Link } from "vue-router"
withDefaults(
  defineProps<{
    item: { [k: string]: string }
  }>(), {}
)


</script>
<template>
  <div class="card" v-if="item.id">

    <img class="card-top" :src="(item.avatar_url as string)" alt="" />

    <p class="card-text">{{ item.login }}</p>
    <div class="card-btns">
      <a :href="item.html_url" target="_blank"> Github</a>
      <Link :to="`/detail/${item.login}`">More</Link>
    </div>
  </div>
</template>
<style lang="less" scoped>
.card {
  width: 100%;
  min-height: 100px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px 0 20px;

  &:hover {
    box-shadow: 0 0 10px 0 #ccc;
  }

  &-top {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    object-fit: cover;
    border: 1px solid #ccc;
    border-radius: 50%;


  }

  &-text {
    text-align: center;
    margin-top: 10px;
  }

  &-btns {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      padding: 6px 8px;
      border-radius: 6px;
      background-color: black;
      color: #fff;
    }
  }

}
</style>