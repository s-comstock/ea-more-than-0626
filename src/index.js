/*--------------------
Import Components
--------------------*/
import { initBunnyPlayer } from "./components/bunny-player.js"
import { initBunnyPlayerBackground } from "./components/bunny-background.js"
import { initBunnyLightboxPlayer } from "./components/bunny-lightbox.js"
import { initSmoothScroll } from "./components/smooth-scroll.js"

console.log("SCD-CF-STARTER HERE")

window.addEventListener("load", () => {
  initBunnyPlayer()
  initBunnyPlayerBackground()
  initBunnyLightboxPlayer()
  initSmoothScroll()
})
