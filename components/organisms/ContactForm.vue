<template>

  <v-sheet
  class="d-flex justify-center"
  :class="mobile?'flex-column align-center':''"
  >

    <v-sheet
    max-width="300px"
    class="mt-8 d-flex flex-column"
    :class="!mobile?'align-end mr-7':'align-center'">
      <ClassicTitle
      class="small"
      :class="mobile?'line-height-1':''"
      :right="!mobile"
      :text="['Besoin d\'un', 'devis pour votre', 'projet ?']"
      />
      <p
      class="classic-text mt-5"
      :class="mobile?'text-center break-max':'text-right'">
        Nous serons ravis de vous aider que votre projet soit défini ou non !
        Remplissez notre formulaire, nous reviendrons vers vous dans les plus brefs délais.
      </p>
    </v-sheet>

    <v-sheet
    :width="mobile?'100%':'300px'"
    class="backgrounded Montserrat--text font-weight-bold mt-5">
      <v-form @submit.prevent>

        <v-text-field
        hide-details
        v-model="firstName"
        label="Nom - Prénom"
        ></v-text-field>

        <v-text-field
        hide-details
        v-model="firstName"
        label="Email"
        ></v-text-field>

        <v-text-field
        hide-details
        v-model="firstName"
        label="Téléphone"
        ></v-text-field>

        <v-select
        :menu-props="{ contentClass: 'plop' }"
        hide-details
        label="Type d'événement"
        :items="['Séminaire', 'Lancement de produit', 'Soirée d\'entreprise', 'Autre']"
        ></v-select>

        <v-select
        hide-details
        label="Nombre d'invités"
        :items="['< 150', '150-300', '300-500', '> 500']"
        ></v-select>

        <v-text-field
        hide-details
        v-model="firstName"
        label="Date de l'événement"
        ></v-text-field>

        <v-textarea
        hide-details
        label="Votre Message"
        no-resize
        rows="2"
        ></v-textarea>
        <div class="submit-container">
          <ClassicButton text="Envoyer"
          :class="mobile?'':'mr-0'"
          small/>
        </div>
      </v-form>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicButton from '../molecules/ClassicButton.vue'
import ClassicTitle from '../atoms/ClassicTitle.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  name: 'ContactForm',

  components: { ClassicButton, ClassicTitle },

  setup () {
    const firstName = undefined
    const mobile = isMobile(window)

    return {
      firstName,
      mobile
    }
  }
})

</script>

<style scoped>

.submit-container{
  width: 100%;
  display: flex;
  justify-content: right;
}

.v-input{
  font-size: 15px;
}

.classic-text{
  max-width: 200px;
}

.break-max{
  max-width: 100%;
}

.line-height-1{
  line-height: 1;
}

</style>
