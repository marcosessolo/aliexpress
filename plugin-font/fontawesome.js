import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faFileArrowDown, faUser, faChevronDown, faMagnifyingGlass, faSpinner, faGear, faCartShopping, faBars, faStar, faTrashCan, faPlus, faXmark, faPenNib, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faFileArrowDown, faUser, faChevronDown, faMagnifyingGlass, faSpinner, faGear, faCartShopping, faBars, faStar, faTrashCan, faPlus, faXmark, faPenNib, faRightFromBracket, faRightToBracket)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})