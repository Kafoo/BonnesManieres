<template>
  <div class="relative">

    <HomePicture
    v-if="mobile"
    class="mt-3"/>

    <v-container v-else>
      <HomePicture/>
    </v-container>

    <v-container>

      <HomeServices/>

      <v-sheet
      class="centering mt-6 desktop">
        <ClassicButton text="découvrez nos créations" to="/creations"/>
      </v-sheet>

    </v-container>

    <HomeSquare/>

    <v-container>
      <ContactForm/>
    </v-container>

  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicButton from '~/components/molecules/ClassicButton.vue'
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue'
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'
import ContactForm from '~/components/organisms/ContactForm.vue'
import HomeServices from '~/components/organisms/HomeServices.vue'
import { isMobile } from '@/ts/functions/composition/displayHelpers'
import HomePicture from '~/components/organisms/HomePicture.vue'
import HomeSquare from '~/components/organisms/HomeSquare.vue'

export default defineComponent({

  name: '',
  components: { ClassicButton, HomeServices, ContactForm, HomePicture, HomeSquare },

  setup () {
    const mobile = isMobile(window)

    return {
      mobile
    }
  }
})

</script>

<style>

</style>
