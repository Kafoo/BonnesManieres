import { computed } from '@nuxtjs/composition-api'

export const isMobile = (window: any) =>
  computed(() => {
    const breakpoint = window.$nuxt.$vuetify.breakpoint.name
    return breakpoint === 'xs'
  })

export const isSm = (window: any) =>
  computed(() => {
    const breakpoint = window.$nuxt.$vuetify.breakpoint.name
    return breakpoint === 'sm'
  })

export const windowWidth = (window: any) =>
  computed(() => {
    return window.$nuxt.$vuetify.breakpoint.width
  })
