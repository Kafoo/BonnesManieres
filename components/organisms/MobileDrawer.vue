<template>
  <div>

    <v-btn
    @click.stop="drawer = !drawer"
    class="mobile drawer-btn pa-6 ml-4 align-self-start"
    icon
    width="70px"
    height="70px"
    :class="head?'elevated':''"
    >
      <v-icon
      color="black"
      size="45px"
      >mdi-menu</v-icon>
    </v-btn>

    <v-navigation-drawer
      app
      fixed
      temporary
      v-model="drawer"
      class="pt-15"
    >

      <v-btn
      @click.stop="drawer = false"
      class="ma-1 drawer-cross"
      icon
      width="50px"
      height="50px"
      elevation="0"
      >
        <v-icon
        color="black"
        size="30px"
        >mdi-close</v-icon>
      </v-btn>

      <v-btn
      icon
      to="/"
      width="50px"
      height="50px"
      class="ma-1 home-btn">
        <v-icon size="30px">mdi-home</v-icon>
      </v-btn>

      <div class="mt-13 ml-2">

        <div
        v-for="navItem in navItems"
        :key="navItem.name"
        >
          <v-card v-if="navItem.id > 1" elevation="0" width="20px" class="my-2" color="background">
            <v-divider class="ma-0 mb-1 ml-3" color="#00000070"></v-divider>
          </v-card>
          <div class="ma-2 my-3">
            <nuxt-link
            class="nuxt-link text-uppercase text--text"
            :to="navItem.path"
            exact>
              {{navItem.name}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </v-navigation-drawer>

  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({

  name: 'MobileDrawer',

  props: {
    head: Boolean
  },

  setup () {
    const drawer = ref(false)

    const navItems = [
      {
        id: 1,
        name: 'notre expertise',
        path: '/expertise'
      },
      {
        id: 2,
        name: 'nos créations',
        path: '/creations'
      },
      {
        id: 3,
        name: 'qui sommes nous',
        path: '/nous'
      },
      {
        id: 4,
        name: 'contact',
        path: '/contact'
      }
    ]

    return {
      drawer,
      navItems
    }
  }
})

</script>

<style scoped>

.drawer-btn{
  position: fixed;
  background-color: #ffffff;
  left: -10px;
  top: 36px;
  z-index: 2;
  box-shadow: none;
  transition: 0.5sec;
}
.drawer-btn.elevated{
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
transition: 0.5sec;
}

.drawer-cross{
  position: absolute;
  top: 10px;
  right: 10px;
}

.v-navigation-drawer{
  z-index: 3;
}

.nuxt-link{
  font-family:'Montserrat';
  font-size: 13pt;
  letter-spacing: 2px;
  font-weight: lighter;
  text-decoration: none;
  color: black;
  transition: 0.1s ease-out;
}

.home-btn{
  position: absolute;
  top: 10px;
  left: 10px;
}

</style>
