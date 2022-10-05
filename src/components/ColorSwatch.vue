<template>
  <div
    class="swatchWrapper flex "
  >
    <div
      class="relativ cursor-zoom-in"
      :data-tip="`compare colors`"
    >
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
    <div
      class="info tooltip tooltip-bottom cursor-copy"
      :data-tip="`Copy ${hex} to clipboard`"
      @click="copyToClipboard"
    >
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
<style>
.tooltip-bottom:before {
  z-index: 1;
}
</style>

<style scoped lang="postcss">
.swatch {
  position: relative;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  padding: 3px 3px 4px 3px;
  transform: rotate(-3deg);
  margin: 0 8px 8px 0;
  background: white;
  top:0;
  left: 0;
  transition: all .2s;

  .color {
    width: 50px;
    height: 50px;
  }

  .name {
    font-size: 7px;
  }
}
.swatchWrapper {
  .swatch {
    &:hover {
      top: -4px;
      left: -4px;
      box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
