<template>
  <div class="colorInput">
    <h1 class="headline">Input reference:</h1>
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
    min-width: 750px;
    min-height: 400px;
  }
}
</style>
