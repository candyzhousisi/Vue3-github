<script setup lang="ts">
import { RouterView } from "vue-router";
import GithubHeader from "./components/GithubHeader.vue";
</script>

<template>
  <div>
    <GithubHeader />
    <RouterView />
  </div>
</template>
