<template>

  <v-app light>

      <MobileDrawer :head= "head"/>

      <ChooseLocation v-if="mobile" class="choose-location-absolute"/>

      <TopLogo @visibleHead="isHeadVisible"/>

      <HeaderVue :head= "head" />

      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <FooterVue/>

  </v-app>

</template>

<script lang="ts">

import { defineComponent, ref } from '@nuxtjs/composition-api'
import HeaderVue from '~/components/organisms/Header.vue'
import FooterVue from '~/components/organisms/Footer.vue'
import TopLogo from '~/components/atoms/TopLogo.vue'
import MobileDrawer from '~/components/organisms/MobileDrawer.vue'
import ChooseLocation from '~/components/atoms/ChooseLocation.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({
  components: { HeaderVue, FooterVue, TopLogo, MobileDrawer, ChooseLocation },
  name: 'Default',

  setup () {
    // To know if HeadLogo has to be shown in Navigation
    const head = ref(true)
    const isHeadVisible = (isVisible:boolean) => {
      head.value = isVisible
    }

    const mobile = isMobile(window)

    return {
      head,
      mobile,
      isHeadVisible
    }
  }
})

</script>

<style scoped>

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transition: all 0.15s;
}

.choose-location-absolute{
  position: absolute;
  top: 86px;
  right: 16px;
}

</style>
