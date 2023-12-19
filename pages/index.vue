<template>
  <div class="relative">

      <v-sheet class="d-flex flex-column justify-center align-center backgrounded" color="blue" width="100%" height="300px">

          <ClassicTitle color='white' text="Anything, Anytime, Anywhere"/>

          <ClassicButton text="découvrez notre expertise" to="/expertise"/>

      </v-sheet>

    <v-sheet class="ma-6 centering-column" position="relative">
        <HorizontalDivider/>
        <ClassicTitle text="Nos services"/>
        <HorizontalDivider/>

    </v-sheet>

    <v-sheet class="centering text-center">
      <p class="black--text">Les Bonnes Manières est une agence événementielle qui s’associe aux plus grands acteurs du luxe pour créer des
        événements hors du commun. Notre engagement réside dans l’art de penser et de façonner chacun de vos événements en
        une expérience inoubliable, plaçant avec soin le client au coeur de chacun de nos choix.
        <br> <b>Découvrez l’art de la célébration avec Les Bonnes Manières !</b>
      </p>
    </v-sheet>

    <v-sheet class="d-flex justify-center align-start mt-8">

      <LabeledPicture :imageSrc="require('@/static/pictures/Dior-303.jpg')" text="Soirées d'entreprise et lancement de produit"/>
      <LabeledPicture :imageSrc="require('@/static/pictures/Dior-784.jpg')" text="Séminaires d'entreprise"/>
      <LabeledPicture :imageSrc="require('@/static/pictures/alban_pichon.jpg')" text="Lieux éphémères / Stands"/>

    </v-sheet>

    <v-sheet class="centering mt-6">
      <ClassicButton text="découvrez nos créations" to="/creations"/>
    </v-sheet>

  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicButton from '~/components/molecules/ClassicButton.vue'
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue'
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'
import LabeledPicture from '~/components/molecules/LabeledPicture.vue'

export default defineComponent({

  components: { ClassicButton, HorizontalDivider, ClassicTitle, LabeledPicture },

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