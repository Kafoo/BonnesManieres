<template>
  <div>
    <h1 v-for="line in text"
    v-bind:key="line"
    :class="color+'--text'"
    class="text-center text-no-wrap classic-title"
    >
      {{ line }}
    </h1>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

  name: '',

  props: {
    text: {
      type: Array as () => Array<string>,
      default () {
        return []
      }
    },
    color: { type: String, default: 'text' }
  },
  setup () {
    return {
    }
  }
})

</script>

<style scoped>

</style>
