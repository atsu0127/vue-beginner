<template>
  <button @click="handleEmit('hello')">click</button>
</template>

<script>
  export default {
    props: {
      foo: {
        type: String,
        default: 'foo'
      }
    },
    setup(props, ctx) {
      console.log(props.foo)

      function handleEmit(str) {
        ctx.emit('baz', str)
      }

      return {
        handleEmit,
      }
    }
  }
</script>