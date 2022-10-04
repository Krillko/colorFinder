<template>
  <div class="stdbox">
    <h2>Found</h2>
    <div v-if="colorStore.colorInputParsed.length" class="swatches">
      <ColorSwatch
        v-for="(color, index) in colorStore.colorInputParsed"
        :key="`${color.hex}-${index}`"
        :hex="color.hex"
      />
    </div>
    <p v-else>No colors found</p>
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
import ColorSwatch from './ColorSwatch.vue'

const colorStore = useColorStore()
</script>

<style scoped lang="postcss">
.swatches {
}
.swatch {
  width: 80px;
  height: 80px;
  margin: 0 16px 16px 0;
}
</style>
