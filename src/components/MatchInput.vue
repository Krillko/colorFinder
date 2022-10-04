<template>
  <div>
    <input
      v-model="textInput"
      type="text"
      class="input input-bordered"
    >
    <input v-model="colorStore.matchColor" type="color">
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
const colorStore = useColorStore()

const textInput = ref('')

const { matchColor } = storeToRefs(colorStore)

// Changes from text input to state
watch(textInput, (input) => {
  input = input.trim().toLowerCase()
  /**
   * @todo - shorthand
   */
  const regex = new RegExp('#[0-9a-fA-F]{6}')
  //const regex = new RegExp('#[0-9a-f]{6}|#[0-9a-f]{3}')
  if (input[0] !== '#') {
    input = '#' + input
  }
  if (regex.test(input)) {
    colorStore.matchColor = input
  }
})

// changes from state to textinput
watch(matchColor, (newMatchColor) => {
  if (newMatchColor !== textInput.value) {
    textInput.value = newMatchColor
  }
})

</script>

<style scoped lang="postcss">
</style>
