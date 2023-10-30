import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faFileArrowDown, faUser, faChevronDown, faMagnifyingGlass, faSpinner, faGear, faCartShopping, faBars, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faFileArrowDown, faUser, faChevronDown, faMagnifyingGlass, faSpinner, faGear, faCartShopping, faBars, faStar)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})