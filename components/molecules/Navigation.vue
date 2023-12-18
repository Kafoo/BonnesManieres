<template>
  <v-toolbar-items class="d-flex mx-auto align-center">

    <div v-for="navItem in navItems" :key="navItem.name" class="d-flex mx-auto align-center">

      <v-card v-if="navItem.id > 1" elevation="0" height="20px" class="my-2" color="background">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>

      <nuxt-link
      class="nuxt-link text-uppercase ma-2"
      :to="navItem.path"
      exact>
        {{navItem.name}}
      </nuxt-link>

    </div>

  </v-toolbar-items>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {

  },
  data () {
    return {
      navItems: [
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
    }
  }
})
</script>

<style scoped>

.nuxt-link{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 13pt;
  padding: 5px;
  font-weight: lighter;
  text-decoration: none;
  color: black;
  transition: 0.1s ease-out;
  letter-spacing: 1px
}

.nuxt-link:hover, .nuxt-link-active {
  text-shadow: 1px 0px 0px black;
  transition: 0.1s ease-out;
}

</style>
