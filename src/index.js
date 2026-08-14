/*--------------------
Import Components
--------------------*/
import { initNavbar } from "./components/navbar.js"
import { initBunnyPlayer } from "./components/bunny-player.js"
import { initBunnyPlayerBackground } from "./components/bunny-background.js"
import { initBunnyLightboxPlayer } from "./components/bunny-lightbox.js"
import { initSmoothScroll } from "./components/smooth-scroll.js"
import { initIntro } from "./components/intro.js"
import { initHorizontalScroll } from "./components/horizontal-scroll.js"
import { initAccordion } from "./components/accordion.js"
import { splideSwiperInit } from "./components/splide.js"

window.addEventListener("load", () => {
  initNavbar()
  initBunnyPlayer()
  initBunnyPlayerBackground()
  initBunnyLightboxPlayer()
  initIntro()
  initSmoothScroll()
  initHorizontalScroll()
  initAccordion()
  splideSwiperInit()
})
