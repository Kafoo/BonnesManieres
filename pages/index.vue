<template>
  <div class="relative">

      <v-sheet class="d-flex flex-column justify-center align-center" color="blue" width="100%" height="300px">

          <ClassicTitle text="Anything, Anytime, Anywhere"/>

          <ClassicButton text="découvrez notre expertise" to="/expertise"/>

      </v-sheet>

    <v-sheet class="ma-6 centering-column" position="relative">
        <HorizontalDivider/>
        <ClassicTitle text="Nos services"/>
        <HorizontalDivider/>

    </v-sheet>

    <v-sheet class="centering text-center">
      <p>Les Bonnes Manières est une agence événementielle qui s’associe aux plus grands acteurs du luxe pour créer des
        événements hors du commun. Notre engagement réside dans l’art de penser et de façonner chacun de vos événements en
        une expérience inoubliable, plaçant avec soin le client au coeur de chacun de nos choix.
        Découvrez l’art de la célébration avec Les Bonnes Manières !</p>
    </v-sheet>

  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicButton from '~/components/molecules/ClassicButton.vue'
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue'
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'

export default defineComponent({

  components: { ClassicButton, HorizontalDivider, ClassicTitle },

  props: {

  },
  data () {
    return {
    }
  }
})
</script>

<style>

.relative{
  position: relative;
}

</style>