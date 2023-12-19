<template>

  <v-app light>

      <v-navigation-drawer
        app
        absolute
        temporary
        v-model="drawer"
        class="d-flex flex-column align-center pt-10"
      >
        <p>plop</p>
        <p>plip</p>
        <p>plap</p>
      </v-navigation-drawer>

      <v-btn
      @click.stop="drawer = !drawer"
      class="mobile drawer-btn pa-6 ml-4 align-self-start"
      icon
      width="70px"
      height="70px"
      elevation="1"
      >
        <v-icon
        color="black"
        size="45px"
        >mdi-menu</v-icon>
      </v-btn>

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
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({
  components: { HeaderVue, FooterVue, TopLogo },
  name: 'Default',

  setup () {
    const drawer = ref(false)
    // To know if HeadLogo has to be shown in Navigation
    const head = ref(true)
    const isHeadVisible = (isVisible:boolean) => {
      head.value = isVisible
    }

    const mobile = isMobile(window)

    return {
      head,
      mobile,
      drawer,
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

.drawer-btn{
  position: sticky;
  background-color: #ffffff;
  margin-bottom: -100px;
  margin-top: 28px;
  left: 17px;
  top: 17px;
  z-index: 2;
}

.v-navigation-drawer{
  z-index: 3;
}

</style>
