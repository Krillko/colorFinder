<template>
  <div>
    <input
      v-model="saveName"
      type="text"
      class="input input-bordered"
    >
    <button
      class="btn btn-outline"
      @click="save"
    >
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useColorStore } from '../store/colorStore'
const colorStore = useColorStore()
const saveName = ref('')

const save = () => {
  console.log('save')
  const saving = {
    references: [],
  }
  saving.references.push({
    name: saveName.value,
    input: colorStore.colorInput,
  })
  window.localStorage.setItem('colorFinder', JSON.stringify(saving))
}

</script>

<style scoped lang="postcss">
</style>
