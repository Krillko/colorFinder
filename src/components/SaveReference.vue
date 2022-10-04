<template>
  <div class="flex">
    <input
      v-model="saveName"
      type="text"
      class="input input-bordered mr-2"
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
import { saveFormat } from '../types/saving'
const colorStore = useColorStore()
const saveName = ref('')

const save = () => {
  const toLoad = window.localStorage.getItem('colorFinder')
  const saving: saveFormat = toLoad ? JSON.parse(toLoad) : {
    references: [],
  }

  if (saving.references[saveName.value]) {
    saving.references[saveName.value] = {
      name: saveName.value,
      input: colorStore.colorInput,
    }
  } else {
    saving.references.push({
      name: saveName.value,
      input: colorStore.colorInput,
    })
  }
  window.localStorage.setItem('colorFinder', JSON.stringify(saving))
}

</script>

<style scoped lang="postcss">
</style>
