import { defineStore } from 'pinia'

export const useColorStore = defineStore('colors', {
  state: () => {
    return {
      colorInput: '',
      colorInputParsed: [],
      matchColor: '',
      loadedReference: '',
      /**
       * @todo v-model sends back a string, see if it can be converted
       */
      manipulationOpacity: '100',
      manupulationBg: '#ffffff',
      matchColorManipulated: '',
    }
  },
  actions: {
    parseColors(input) {
      this.colorInput = input

      // Finding hex without alpha
      const regex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/ig
      // Finding hex colors with alpha
      //const regex = /#([A-F0-9]{3,4}|[A-F0-9]{6}|[A-F0-9]{8})/ig
      const foundColors = input.match(regex)
      if (foundColors) {
        this.colorInputParsed = foundColors.map((i) => {
          return {
            hex: i,
            asWritten: i.toLowerCase(),
          }
        })
      } else {
        this.colorInputParsed = []
      }
    },
  },
})
