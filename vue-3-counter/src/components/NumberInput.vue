<template>
  <input :value="modelValue" @input="emitValue" type="number" />
</template>

<script>
export default {
  name: 'NumberInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    modelModifiers: {
      default: () => ({})
    }
  },
  methods: {
    emitValue({ target: { value } }) {
      console.log('=======start=========')
      if (this.modelModifiers.numberOnly && value === '') {
        value = 0;
      }
      console.log(`value: ${value}`)
      console.log(`before emit: ${this.modelValue}`)


      this.$emit('update:modelValue', Number(value));
      this.$nextTick(() => {
        console.log(`after emit: ${this.modelValue}`)
        console.log('=======finish=========')
      })
    }
  }
}
</script>
