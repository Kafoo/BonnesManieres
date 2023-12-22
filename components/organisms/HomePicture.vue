<template>
  <v-sheet
  class="d-flex flex-column justify-center align-center ma-auto mb-7"
  width="100%"
  :height="mobile?'600px':'350px'"
  >
    <v-img
    width="100%"
    height="100%"
    cover
    :src="require('/static/pictures/Home.jpg')"
    ></v-img>
    <div style="position: absolute;" class="d-flex flex-column align-center">
      <ClassicTitle
      v-if="mobile"
      color='white'
      spaced
      :text="['Anything,', 'Anytime,', 'Anywhere']"
      />

      <ClassicTitle
      v-else
      color='white'
      :text="['Anything, Anytime, Anywhere']"/>

      <ClassicButton
      class="mt-7"
      text="découvrez notre expertise"
      to="/expertise"
      color="white"
      />
    </div>
<!--
    <v-img style="position: absolute;" width="40px" color="white" :src="require('~/static/icons/arrow_circle_down.svg')"></v-img>
-->
  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'
import ClassicButton from '~/components/molecules/ClassicButton.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({
  name: '',
  setup () {
    const mobile = isMobile(window)
    return {
      mobile
    }
  },
  components: { ClassicTitle, ClassicButton }
})

</script>

<style scoped>

</style>
