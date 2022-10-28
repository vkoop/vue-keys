<template>
  <div class="keyboard">
    <div v-for="key in keyCount" :key="key" class="key" :class="classes(key)" >
    </div>
  </div>
</template>

<script>
import {keyEngine} from "@/components/keyEngine";

const whiteKeys = ['a', "b", "c", "d", "e", "f", "g"];

export default {
  setup(){
    const isWhite = (keynumber) => {
      const keyname = getKeyName(keynumber);
      return ( whiteKeys.includes(keyname)  )
    }

    const {pressedKeys, play} = keyEngine();
    play();

    const isPressed = (keynumber) => {
      return pressedKeys.value.indexOf(keynumber)!== -1
    }

    const getKeyName = (keyNumber) => {
      let result = ""
      switch(keyNumber % 12){
        case 0:
          result = "g#"
          break;
        case 1:
          result = "a"
          break;
        case 2:
          result = "bb"
          break;
        case 3:
          result = "b"
          break;
        case 4:
          result = "c"
          break;
        case 5:
          result = "c#"
          break;
        case 6:
          result = "d"
          break;
        case 7:
          result = "d#"
          break;
        case 8:
          result = "e"
          break;
        case 9:
          result = "f"
          break;
        case 10:
          result = "f#"
          break;
        case 11:
          result = "g"
          break;
        default:
          break;
      }

      return result;
    }

    const classes = (keyNumber) => {
      let white = isWhite(keyNumber);
      return ({
        'key--white': white,
        'key--black': !white,
        'key--pressed': isPressed(keyNumber)
      })
    }

    return {
      keyCount: 88,
      classes
    }
  }
}
</script>
<style scoped>
.keyboard {
  display: flex;
}

.key {
  width: 2em;
  border: 1px solid black;
  height: 10em;
  box-sizing: border-box;
}

.key--black {
  background: black;
  margin-left: -0.7em;
  margin-right: -0.7em;
  width: 1.4em;
  height: 8em;
}

.key--pressed {
  background: hsl(0,10%, 50%);
}


</style>
