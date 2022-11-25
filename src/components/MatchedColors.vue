<template>
  <div
    v-if="colorStore.colorInputParsed.length"
    class="matchedColors stdbox mt-8 border-none pl-8 border-b border-white"
    :style="bgStyle"
  >
    <div class="mb-24">
      <h1 class="mb-12">Matched colors</h1>
      <div v-if="bestPercent < 95">There where no close matches</div>
      <div v-else>&nbsp;</div>
    </div>
    <div v-if="matches.length" class="flex flex-col">
      <div
        v-for="(match, index) in matches"
        :key="`${match.hex}-${index}`"
        class="match mb-12"
      >
        <ColorSwatch :hex="match.hex" />

        <div :title="match.matchPercent" v-html="match.title" />
      </div>
    </div>
    <button
      v-if="!showAll && matches.length < matchesAll.length"
      class="btn btn-sm mt-24"
      @click="toggleAll"
    >
      Show all
    </button>
    <button
      v-else-if="showAll"
      class="btn btn-sm mt-24"
      @click="toggleAll"
    >
      Show less
    </button>
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
import { computed, ref } from 'vue'
import Color from 'colorjs.io'
import ColorSwatch from './ColorSwatch.vue'
const colorStore = useColorStore()

function round(
  value,
  minimumFractionDigits,
  maximumFractionDigits
) {
  const formattedValue = value.toLocaleString('en', {
    useGrouping: false,
    minimumFractionDigits,
    maximumFractionDigits,
  })
  return Number(formattedValue)
}

function wc_hex_is_light(color) {
  const hex = color.replace('#', '')
  const c_r = parseInt(hex.substring(0, 0 + 2), 16)
  const c_g = parseInt(hex.substring(2, 2 + 2), 16)
  const c_b = parseInt(hex.substring(4, 4 + 2), 16)
  const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000
  return brightness > 155
}

const showAll = ref(false)

const toggleAll = () => {
  showAll.value = ! showAll.value
}

const bgStyle = computed(() => {
  const isLight = wc_hex_is_light(colorStore.matchColorManipulated)
  return {
    background: colorStore.matchColorManipulated,
    color: isLight ? 'black':'white',
  }
})

const bestPercent = computed(()=> {
  if (matchesAll.value.length) {
    return matchesAll.value.reduce((max, curren) => max.matchPercent > curren.matchPercent ? max : curren).matchPercent
  }
  return 0
})

const matchesAll = computed(()=> {
  let output = []
  if (colorStore.colorInputParsed.length && colorStore.matchColorManipulated) {
    const matchColor = new Color(colorStore.matchColorManipulated)
    colorStore.colorInputParsed.map((i) => {
      const refColor = new Color(i.hex)
      const difference = matchColor.deltaE2000(refColor)
      const matchPercent = 100 - difference
      let matchHR
      if (matchPercent === 100) {
        matchHR = '<h3>Exact match</h3>'
      } else if (matchPercent >= 98) {
        matchHR = `<h4>Almost identical: <b>${round(matchPercent, 0, 2)}%</b></h4>`
      } else if (matchPercent >= 97) {
        matchHR = `<h5>Very close: <b>${round(matchPercent, 0, 1)}%</b></h5>`
      } else if (matchPercent >= 95) {
        matchHR = `<h5>Close: <b>${round(matchPercent, 0, 1)}%</b></h5>`
      } else if (matchPercent >= 90) {
        matchHR = `<b>${Math.round(matchPercent)}%</b>`
      } else {
        matchHR = `${Math.round(matchPercent)}%`
      }

      output.push({
        hex: i.hex,
        title: matchHR,
        matchPercent,
      })
    })
  }
  return output.sort((a, b) => {
    if (a.matchPercent < b.matchPercent) {
      return 1
    }
    if (a.matchPercent > b.matchPercent) {
      return -1
    }
    return 0
  })
})

const matches = computed(()=> {
  if (matchesAll.value.length) {
    if (showAll.value) {
      return matchesAll.value
    }
    if (bestPercent.value >= 97) {
      return matchesAll.value.filter((i) => i.matchPercent >= 97)
    }
    return [ ...matchesAll.value ].splice(0, 2)
  }
  return []
})

</script>

<style scoped lang="postcss">
/*.matchedColors {
  * {
    color: inherit;
  }
}*/
</style>
