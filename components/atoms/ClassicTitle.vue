<template>
  <div>
    <h1
    :class="[color+'--text', small ? 'small' : '']"
    class="text-center text-no-wrap"
    >
      {{text}}<br>{{line2}}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: { type: String },
    line2: { type: String },
    color: { type: String, default: 'text' },
    small: { type: Boolean}
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

.small{
  font-size: 30px;
}

</style>
