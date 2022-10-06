<template>
  <div class="colorInput">
    <h1>Reference:</h1>
    <textarea
      v-model="colorInput"
      placeholder="Input a reference.&#10;
      This can be a list of colors, a css file, a tailwind config file, variables.scss etc"
      spellcheck="false"
      class="textarea textarea-ghost whitespace-nowrap overflow-auto bg-black text-white"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useColorStore } from '../store/colorStore'
import { storeToRefs } from 'pinia'

const colorStore = useColorStore()

const { colorInput } = storeToRefs(colorStore)

watch(colorInput, (updated) => {
  colorStore.parseColors(updated)
})
</script>

<style scoped lang="postcss">
.colorInput {
  textarea {
    width: 100%;
    min-height: 400px;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 12px;
    line-height: 1.1em;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &:focus {
      @apply text-white;
    }
  }
}
</style>
