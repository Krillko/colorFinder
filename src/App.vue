<template>
  <main class="flex w-full items-start">
    <div class="first basis-1/3 p-8 ml-8">
      <MatchInput />
      <MatchedColors />
    </div>
    <div class="second basis-1/3 p-8">
      <FoundColors />
    </div>
    <div class="third basis-1/3 mr-8 mt-8 stdbox">
      <ReferenceInput />
      <div class="flex justify-between">
        <LoadReferences />
        <SaveReference />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ReferenceInput from './components/ReferenceInput.vue'
import FoundColors from './components/FoundColors.vue'
import MatchInput from './components/MatchInput.vue'
import MatchedColors from './components/MatchedColors.vue'
import SaveReference from './components/SaveReference.vue'
import LoadReferences from './components/LoadReferences.vue'
import { onMounted } from 'vue'
import { saveFormat } from './types/saving'
import { useColorStore } from './store/colorStore'
const colorStore = useColorStore()

onMounted(() => {
  const toLoad = window.localStorage.getItem('colorFinder')
  if (toLoad) {
    const loaded: saveFormat = JSON.parse(toLoad)
    if (loaded.references.length > 0) {
      console.log('something to load')
      colorStore.parseColors(loaded.references[0].input)
      colorStore.loadedReference = loaded.references[0].name
    }
  }
})

</script>

<style scoped lang="postcss">

</style>
