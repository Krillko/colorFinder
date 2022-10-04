<template>
  <div class="swatchWrapper flex">
    <div>
      <div class="swatch">
        <div
          :style="{
            background: hex,
          }"
        />
      </div>
    </div>
    <div class="info">
      {{ hex }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  hex: String,
})
</script>

<style scoped lang="postcss">
.swatch {
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.1);
  padding: 3px 3px 12px 3px;
  transform: rotate(-3deg);
  margin: 0 8px 8px 0;
  background: white;
  >div {
    width: 50px;
    height: 50px;
  }
}
</style>
