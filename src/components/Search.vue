<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  showTip: {
    type: Boolean,
  },
  tipText: {
    type: String,
    default: "Please enter someting",
  },
  showBtn: Boolean
});

const emit = defineEmits(["onSearch", "onClear"]);

const inputValue = ref<string>("");
const show = ref<boolean>(false);
const onClick = () => {
  if (inputValue.value) {
    emit('onSearch', inputValue.value)

  } else {
    show.value = true
    setTimeout(() => {
      show.value = false
    }, 3000);
  }
}
const onClear = () => {
  emit('onClear')
  inputValue.value = ''
}
</script>

<template>
  <div class="search">
    <div v-show="show" class="top">{{ tipText }}</div>
    <div class="input">
      <input type="text" v-model.trim="inputValue" placeholder="Search User..." />
    </div>
    <div class="bts">
      <button @click="onClick">Search</button>
      <button v-show="showBtn" @click="onClear">Clear</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.search {
  width: 100%;
  margin-top: 24px;
  position: relative;

  .top {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    line-height: 24px;
    padding-left: 8px;
    background-color: #c9c9c9;
  }

  .input {
    border: 1px solid #ccc;

    input {
      padding: 0 8px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
  }

  .bts {
    button {
      display: block;
      height: 40px;
      width: 100%;
      margin-top: 10px;
      font-weight: 700;

      &:first-child {
        background-color: #000;
        color: #fff;
      }

      &:last-child {
        background-color: #ccc;

        &:hover {
          color: #fff;
        }
      }

      &:hover {
        background-color: #999;
      }
    }
  }
}
</style>
