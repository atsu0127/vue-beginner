<script lang="ts">
import { defineComponent } from 'vue'
import ContentsLoader from './ContentsLoader.vue'
import PostView from '../PostView.vue'

export default defineComponent({
  name: 'ComponentsLoaderSample',
  components: {
    ContentsLoader,
    PostView
  }
})
</script>

<template>
  <div>
    <p class="mb-2 text-2xl">ContentsLoader</p>
  </div>
  <div>
    <p>fetch data</p>
    <Suspense>
      <template #default>
        <PostView />
      </template>
      <template #fallback>
        <ContentsLoader :line="3" />
      </template>
    </Suspense>
  </div>
</template>
