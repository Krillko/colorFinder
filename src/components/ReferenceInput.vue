<template>
  <div class="colorInput">
    <h1 class="headline">Input reference:</h1>
    <textarea
      v-model="textarea"
      placeholder="add multiple lines"
      class="textarea textarea-bordered"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useColorStore } from '../store/colorStore'

const colorStore = useColorStore()

const textarea = ref(colorStore.colorInput)

watch(textarea, (updated) => {
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
