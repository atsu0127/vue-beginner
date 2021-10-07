<script lang="ts">
import { defineComponent } from 'vue'
import DialogSample from './components/modals/DialogSample.vue'
import ButtonSample from './components/buttons/ButtonSample.vue'
import InputRadioSample from './components/forms/InputRadioSample.vue'
import InputTextSample from './components/forms/InputTextSample.vue'
import ContentsLoaderSample from './components/loader/ContentsLoaderSample.vue'

export default defineComponent({
  name: 'App',
  components: {
    DialogSample,
    ButtonSample,
    InputRadioSample,
    InputTextSample,
    ContentsLoaderSample
  },
})
</script>

<template>
  <div class="m-4">
    <ContentsLoaderSample />
    <ButtonSample />
    <DialogSample />
    <InputTextSample />
    <InputRadioSample />
  </div>
</template>
