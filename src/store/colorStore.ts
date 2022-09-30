import { defineStore } from 'pinia'

export const useColorStore = defineStore('colors', {
  state: () => {
    return {
      colorInput: '#ededed sldkfjsd posdjf sdpogj #eee #eeeeee hej #e100f3 #papapa',
      colorInputParsed: ['#ededed', '#eee', '#eeeeee', '#e100f3'],
      matchColor: '',
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
      console.log(foundColors)
      this.colorInputParsed = foundColors.map((i) => {
        return {
          hex: i,
          asWritten: i.toLowerCase(),
        }
      })
    },
  },
})
