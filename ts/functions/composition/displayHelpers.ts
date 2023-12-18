import { computed } from '@nuxtjs/composition-api'

export const isMobile = (root: any) =>
  computed(() => {
    const breakpoint = root.$vuetify.breakpoint.name
    return breakpoint === 'xs'
  })

export const windowWidth = (root: any) =>
  computed(() => {
    return root.$vuetify.breakpoint.width
  })
