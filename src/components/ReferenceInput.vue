<template>
  <div class="colorInput">
    <h1>Input reference:</h1>
    <p>Input a reference. This can be a list of colors, a css file, a tailwind config file, variables.scss etc</p>
    <textarea
      v-model="colorInput"
      placeholder="add multiple lines"
      class="textarea textarea-bordered"
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
  }
}
</style>
