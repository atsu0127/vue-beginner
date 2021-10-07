<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputRadio from './InputRadio.vue'

export default defineComponent({
  name: 'InputRadioSample',
  components: {
    InputRadio
  },
  setup() {
    const radioValue1 = ref('1')
    const radioValue2 = ref('2')
    const radioValue3 = ref('3')
    const radioValue4 = ref('4')
    const radioValue5 = ref('5')

    const selectedRadio = ref(radioValue1.value)

    return {
      radioValue1,
      radioValue2,
      radioValue3,
      radioValue4,
      radioValue5,
      selectedRadio
    }
  },
})
</script>

<template>
  <div class="m-4">選択中: {{ selectedRadio }}</div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue1" name="radio">radio1</InputRadio>
  </div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue2" name="radio">radio2</InputRadio>
  </div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue3" name="radio">radio3</InputRadio>
  </div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue4" name="radio">radio4</InputRadio>
  </div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue5" name="radio" :disabled="true">radio5</InputRadio>
  </div>
</template>
