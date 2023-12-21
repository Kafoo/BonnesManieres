<template>
  <div class="relative">


    <v-container>

      <v-sheet
      class="d-flex flex-column justify-center align-center ma-auto "
      width="100%"
      :height="mobile?'600px':'300px'"
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
        height="600px"
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

    </v-container>

    <v-sheet
    class="d-flex flex-column justify-center canvas backgrounded pa-10 mt-8 text--text"
    :class="mobile?'align-left':'align-center text-center'"
    width="100%"
    >
      <HorizontalDivider class="mt-5 mb-2"/>
      <ClassicTitle
      color='text'
      :text="['We think out of the box']"
      class="small wrap-text"
      wrap
      :left="mobile"
      />
      <HorizontalDivider class="mt-1"/>
      <span class="classic-text py-5">
        Nous transformons vos désirs en réalité, avec un engagement particulier pour dépasser vos attentes.
        Notre approche collaborative permet de créer l’événement de manière à refléter fidèlement l’essence même de
        nos clients et de les surprendre.
      </span>
      <ClassicTitle
      color='text'
      left
      :text="['Pourquoi travailler ensemble ?']"
      class="xsmall mt-3 mb-2 wrap-text"
      wrap
      />
      <v-sheet
      class="d-flex justify-center mt-5"
      max-width="900px"
      :class="mobile?'flex-column align-center':''"
      >
        <div class="d-flex flex-column align-center mb-5">
          <v-icon color="black" class="mb-1">mdi-check-circle-outline</v-icon>
          <span
          class="classic-text text-center checked-text px-2 py-1"
          :class="mobile?'font-weight-bold':''"
          >Pour notre parfaite connaissance de l’industrie du travel retail.</span>
        </div>
        <div class="d-flex flex-column align-center mb-5">
          <v-icon color="black" class="mb-1">mdi-check-circle-outline</v-icon>
          <span
          class="classic-text text-center checked-text px-2 py-1"
          :class="mobile?'font-weight-bold':''"
          >Pour notre connaissance approfondie des codes et des exigences de votre secteur d’activité.</span>
        </div>
        <div class="d-flex flex-column align-center mb-5">
          <v-icon color="black" class="mb-1">mdi-check-circle-outline</v-icon>
          <span
          class="classic-text text-center checked-text px-2 py-1"
          :class="mobile?'font-weight-bold':''"
          >Pour le serieux et la légitimité d’une agence reconnue dans le milieu depuis plus de 25 ans.</span>
        </div>
      </v-sheet>
      <ClassicButton class="mt-4"
      text="Contactez-nous"
      to="/contact"/>
    </v-sheet>



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
import LabeledPicture from '~/components/molecules/LabeledPicture.vue'
import ContactForm from '~/components/organisms/ContactForm.vue'
import { isMobile } from '@/ts/functions/composition/displayHelpers'

export default defineComponent({

  name: '',
  components: { ClassicButton, HorizontalDivider, ClassicTitle, LabeledPicture, ContactForm },

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

.canvas{
  background-color: #F1EFE6 !important;
}

.checked-text{
  max-width: 200px;
  line-height: 15px;
}

.wrap-text{
  line-height: 34px;
}

</style>
