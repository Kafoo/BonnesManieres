<template>
  <div class="relative">

      <v-sheet
      class="d-flex flex-column justify-center align-center ma-auto "
      width="100%"
      :height="mobile?'800px':'300px'"
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
          :text="['Anything,', 'Anytime,', 'Anywhere']"
          line1="Anything,"
          line2="Anytime,"
          line3="Anywhere"
          />

          <ClassicTitle
          v-else
          color='white'
          :text="['Anything, Anytime, Anywhere']"/>

          <ClassicButton
          text="découvrez notre expertise"
          to="/expertise"
          color="white"
          />
        </div>

      </v-sheet>

    <v-sheet class="ma-6 centering-column" position="relative">
        <HorizontalDivider/>
        <ClassicTitle :text="['Nos services']"/>
        <HorizontalDivider/>

    </v-sheet>

    <v-sheet class="centering text-center">
      <p class="black--text">Les Bonnes Manières est une agence événementielle qui s’associe aux plus grands acteurs du luxe pour créer des
        événements hors du commun. Notre engagement réside dans l’art de penser et de façonner chacun de vos événements en
        une expérience inoubliable, plaçant avec soin le client au coeur de chacun de nos choix.
        <br> <b>Découvrez l’art de la célébration avec Les Bonnes Manières !</b>
      </p>
    </v-sheet>

      <v-carousel
      v-if="mobile"
      height="800px"
      :show-arrows="false"
      cycle
      >
        <v-carousel-item
        :src="require('@/static/pictures/Dior-303.jpg')"
        cover
        >
          <div class="carousel-title-container d-flex justify-center align-center">
            <div class="carousel-title text-uppercase text-center">Soirées d'entreprise et lancement de produits</div>
          </div>
        </v-carousel-item>

        <v-carousel-item
        :src="require('@/static/pictures/Dior-784.jpg')"
        cover
        >
          <div class="carousel-title-container d-flex justify-center align-center">
            <div class="carousel-title text-uppercase text-center">Séminaires d'entreprise</div>
          </div>
        </v-carousel-item>

        <v-carousel-item
        :src="require('@/static/pictures/alban_pichon_107.jpg')"
        cover
        >
          <div class="carousel-title-container d-flex justify-center align-center">
            <div class="carousel-title text-uppercase text-center">Lieux éphémères / Stands</div>
          </div>
        </v-carousel-item>

      </v-carousel>

    <v-sheet
    v-else
    class="d-flex justify-center align-start mt-8"
    :class="mobile ?'flex-column':''">

      <LabeledPicture :imageSrc="require('@/static/pictures/Dior-303.jpg')" text="Soirées d'entreprise et lancement de produit"/>
      <LabeledPicture :imageSrc="require('@/static/pictures/Dior-784.jpg')" text="Séminaires d'entreprise"/>
      <LabeledPicture :imageSrc="require('@/static/pictures/alban_pichon_107.jpg')" text="Lieux éphémères / Stands"/>

    </v-sheet>

    <v-sheet
    class="centering mt-6 desktop">
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
import { isMobile } from '@/ts/functions/composition/displayHelpers'

export default defineComponent({

  name: '',
  components: { ClassicButton, HorizontalDivider, ClassicTitle, LabeledPicture },

  setup () {
    const mobile = isMobile(window)

    return {
      mobile
    }
  }
})

</script>

<style>

.relative{
  position: relative;
}

.carousel-title{
  font-family: 'Yeseva One';
  font-size: 30px;
  letter-spacing: 1px;
  padding: 25px;
  max-width: 80%;
  background-color: rgba(255, 255, 255, 0.533);
}

.carousel-title-container{
  height: 100%;
}

/* .v-responsive__content{
  display: flex;
  justify-content: center;
  align-items: center;
} */

</style>
