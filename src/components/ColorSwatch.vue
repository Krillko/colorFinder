<template>
  <div
    class="swatchWrapper flex tooltip tooltip-left cursor-copy"
    :data-tip="`Copy ${hex} clipboard`"
    @click="copyToClipboard"
  >
    <div>
      <div class="swatch">
        <div
          class="color"
          :style="{
            background: hex,
          }"
        />
        <div class="name">{{ hex }}</div>
      </div>
    </div>
    <div class="info">
      {{ hex }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  hex: String,
})
const copyToClipboard = () => {
  navigator.clipboard.writeText(props.hex)
}
</script>

<style scoped lang="postcss">
.swatch {
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.1);
  padding: 3px 3px 4px 3px;
  transform: rotate(-3deg);
  margin: 0 8px 8px 0;
  background: white;
  .color {
    width: 50px;
    height: 50px;
  }
  .name {
    font-size: 7px;
  }
}
</style>
