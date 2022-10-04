<template>
  <div class="stdbox">
    <h1>Matched colors</h1>
    <div v-if="matches.length" class="flex flex-col">
      <div
        v-for="(match, index) in matches"
        :key="`${match.hex}-${index}`"
        class="match"
      >
        <ColorSwatch :hex="match.hex" />

        <div :title="match.matchPercent" v-html="match.title" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorStore } from '../store/colorStore'
import { computed } from 'vue'
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

const matches = computed(()=> {
  let output = []
  if (colorStore.colorInputParsed.length && colorStore.matchColor) {
    const matchColor = new Color(colorStore.matchColor)
    colorStore.colorInputParsed.map((i) => {
      const refColor = new Color(i.hex)
      const difference = matchColor.deltaE2000(refColor)
      const matchPercent = 100 - difference
      let matchHR
      if (matchPercent === 100) {
        matchHR = 'Exact match'
      } else if (matchPercent >= 99) {
        matchHR = `<b>${round(matchPercent, 0, 2)}%</b>`
      } else if (matchPercent >= 95) {
        matchHR = `<b>${round(matchPercent, 0, 1)}%</b>`
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

</script>

<style scoped lang="postcss">

</style>
