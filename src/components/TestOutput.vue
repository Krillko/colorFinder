<template>
  <div class="w-full">
    <textarea
      v-model="output"
      class="textarea textarea-ghost whitespace-nowrap overflow-auto bg-black text-white"
    />
    <button class="btn" @click="process">Process</button>
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
import { ref } from 'vue'
//import sassVars from 'get-sass-vars'

const colorStore = useColorStore()

const output = ref('')

const process = async() => {
  console.log('process')
  //const input = colorStore.colorInput
  //const json = await sassVars(colorStore.colorInput)

  //output.value = fullConfig
  console.log(json)
}

</script>

<style scoped lang="postcss">
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
}
</style>
