<template>
  <div>
    <h1 v-for="line in text"
    v-bind:key="line"
    :class="[color+'--text', wrap?'':'text-no-wrap', right?'text-right':left?'text-left':'text-center']"
    class="classic-title"
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
    color: { type: String, default: 'text' },
    wrap: { type: Boolean, default: true },
    right: { type: Boolean, default: false },
    left: { type: Boolean, default: false }
  },
  setup () {
    return {
    }
  }
})

</script>

<style scoped>

</style>
