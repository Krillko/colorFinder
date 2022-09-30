<template>
  <div>
    <h2>Found</h2>
    <div class="swatches">
      <div
        v-for="color in colorStore.colorInputParsed"
        :key="color.hex"
        :style="{
          background: color.hex,
        }"
        class="swatch"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'

const colorStore = useColorStore()
</script>

<style scoped lang="postcss">
.swatches {
  display: flex;
}
.swatch {
  width: 80px;
  height: 80px;
  margin: 0 16px 16px 0;
}
</style>
