<template>
  <div>
    <input v-model="colorStore.matchColor" type="text">
    <input v-model="colorStore.matchColor" type="color">
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
const colorStore = useColorStore()
</script>

<style scoped lang="postcss">
</style>
