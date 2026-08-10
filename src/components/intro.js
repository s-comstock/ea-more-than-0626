/*--------------------
Intro Scroll Text JS
--------------------*/
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

export function initIntro() {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  function isMobile() {
    return window.innerWidth <= 767
  }

  const introComponent = document.querySelectorAll("[data-intro-component]")
  if (!introComponent) return

  introComponent.forEach(component => {
    const text = component.querySelector("[data-intro-text]")

    const split = new SplitText(text, { types: "words" })

    const tl = gsap.timeline()

    // Define different start and end values for mobile devices
    let startValue = isMobile() ? "top 35%" : "top center"
    let endValue = isMobile() ? "bottom 90%" : "bottom center"

    tl.from(split.words, {
      opacity: 0.25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "[data-intro-component]",
        start: startValue,
        end: endValue,
        scrub: 2
      }
    })
  })
}
