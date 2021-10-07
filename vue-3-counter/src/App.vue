<template>
  <div class="flex justify-center">
    <TheHeader text="My Counter" />
  </div>
  <div class="flex justify-center">
    <div v-if="!validationMessageList.length">{{ count }}</div>
    <div v-else v-for="message in validationMessageList" :key="message">
      {{ message }}
    </div>
  </div>
  <div class="flex justify-center">
    <SecondaryButton :disabled="hasMaxCount" @click="plusOne">+</SecondaryButton>
    <SecondaryButton :disabled="hasMaxCount" @click="minusOne">-</SecondaryButton>
  </div>

  <div class="flex items-center justify-center">
    <InputText label="count" type="number" v-model:value="count" max="9999" min="0" />
    <PrimaryButton @click="insertCount">inserrt</PrimaryButton>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import { InputText, PrimaryButton, SecondaryButton } from 'atsu0127-ui-component-test'

export default {
  components: {
    TheHeader,
    PrimaryButton,
    SecondaryButton,
    InputText
  },
  data() {
    return {
      count: "0",
      interval: 0,
      isEditing: false,
    }
  },
  methods: {
    plusOne() {
      this.count++;
    },
    minusOne() {
      this.count--;
    },
    insertCount() {
      if (this.hasMaxInterval || this.hasMinInterval) return;
      this.count += this.interval;
      this.isEditing = false;
    }
  },
  watch:{
    interval() {
      this.isEditing = true;
    }
  },
  computed: {
    hasMaxCount() {
      return this.count >= 9999
    },
    hasMinCount() {
      return this.count <= 0
    },
    hasMaxInterval() {
      return this.interval > 9999
    },
    hasMinInterval() {
      return this.interval < 0
    },
    validationMessageList() {
      const validationList = [];
      if (this.isEditing) {
        validationList.push('編集中...')
      }

      if (this.hasMaxInterval) {
        validationList.push('9999以上は入力できません')
      }

      if (this.hasMinInterval) {
        validationList.push('0以下は入力できません')
      }

      return validationList
    }
  }
};
</script>

<style>
#app {
  margin: 0 auto;
  padding-top: 60px;
  max-width: 480px;
}
</style>
