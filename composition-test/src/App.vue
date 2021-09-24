<script>
import { onRenderTracked, onRenderTriggered, ref } from "vue";

export default {
  el: '#app',
  setup() {
    const count = ref(0)
    const increment = () => count.value++

    onRenderTracked((e) => {
      console.log('tracker', e)
    })

    onRenderTriggered((e) => {
      console.log('trigger', e)
    })

    return {
      count,
      increment
    }
  }
}
</script>

<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">increment</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
