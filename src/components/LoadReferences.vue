<template>
  <div>
    <select v-model="selected" class="select select-bordered">
      <option
        v-for="save in localStorageSaves.references"
        :key="save.name"
      >
        {{ save.name }}
      </option>
    </select>
    <button
      class="btn"
      :disabled="!saveAble"
      @click="load"
    >
      Load
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, computed } from 'vue'
import { useColorStore } from '../store/colorStore'
const colorStore = useColorStore()

type reference = {
  name: string,
  input: string,
}
type saves = {
  references: reference[]
}

const localStorageSaves: Ref<saves> = ref({})
const selected = ref('')

const saveAble = computed(() => {
  return localStorageSaves.value.references?.length > 0 && selected.value !== ''
})

onMounted(() => {
  const toLoad = window.localStorage.getItem('colorFinder')
  if (toLoad) {
    localStorageSaves.value = JSON.parse(toLoad)

    console.log(localStorageSaves.value)
  }
})

const load = () => {
  const toLoad = localStorageSaves.value.references.find((i) => {
    return i.name === selected.value
  })
  console.log(toLoad)
  colorStore.parseColors(toLoad.input)
  colorStore.loadedReference = toLoad.name
}

</script>

<style scoped lang="postcss">
</style>
