<template>
  <div class="stdbox">
    <h1>Test color:</h1>
    <p>Select a color, or input as hex</p>
    <div class="flex">
      <input
        v-model="textInput"
        type="text"
        class="input input-bordered"
        autofocus
      >
      <input
        v-model="colorStore.matchColor"
        type="color"
        class="h-50 ml-2"
      >
    </div>

    <div
      class="border border-base-300 bg-base-100 rounded-box mt-16 "
      :class="{
        'pointer-events-none opacity-50': colorStore.matchColor === ''
      }"
    >
      <div class="flex justify-between cursor-pointer" @click="showManipulate = !showManipulate">
        <div class="p-8">Manipulate input</div>
        <div v-if="!showManipulate" class="p-8">+</div>
        <div v-else class="p-8">-</div>
      </div>
      <div v-if="showManipulate" class="p-8">
        <div><b>Opacity</b></div>
        <div class="flex w-full items-center">
          <div class="p-8 w-1/4">
            <input
              v-model="manipulationOpacity"
              type="number"
              class="input input-sm input-bordered w-full"
              maxlength="3"
              size="4"
            >
          </div>
          <div class="p-8 w-3/4">
            <input
              v-model="manipulationOpacity"
              type="range"
              min="0"
              max="100"
              class="range w-full"
            >
          </div>
        </div>
        <div class="flex items-center mb-36">
          <div>Background color: </div>
          <input
            v-model="colorStore.manupulationBg"
            type="color"
            class="h-28 ml-2"
          >
        </div>
        <div class="flex items-top">
          <div class="mr-12"><b>Manipulated result:</b></div>
          <ColorSwatch :hex="manipulationResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import ColorSwatch from './ColorSwatch.vue'
import mix from 'mix-css-color'
const colorStore = useColorStore()

const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  // return {r, g, b}
  return { r, g, b }
}

const textInput = ref('')

const showManipulate = ref(false)

const { matchColor, manipulationOpacity, manupulationBg } = storeToRefs(colorStore)

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

const manipulationResult = computed(()=> {
  if (matchColor.value !== '') {
    return mix(matchColor.value, manupulationBg.value, parseFloat(manipulationOpacity.value)).hex
  } else {
    return ''
  }
})

watch(manipulationResult, (manipulated) => {
  colorStore.matchColorManipulated = manipulated
})

onMounted(()=> {
  console.log(mix('#000000', '#ffffff', 50 ))
})

</script>

<style scoped lang="postcss">
.colorInput {
  height: 46px;
}
</style>
