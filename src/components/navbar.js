/*--------------------
EA Swim+ Navbar JS
--------------------*/
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initNavbar() {
  const nav = document.querySelector("[data-nav-component]")
  const navBrand = document.querySelector("[data-nav-brand]")

  // Create a reusable tween for the navbar transition
  const hideNav = gsap.to(nav, {
    y: -100,
    duration: 0.8,
    ease: "power2.out",
    paused: true
  })

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: self => {
      // self.direction === 1 means scrolling DOWN -> Hide it
      // self.direction === -1 means scrolling UP -> Show it
      if (self.direction === 1) {
        hideNav.play() // Moves to y: -100
      } else {
        hideNav.reverse() // Returns to y: 0
      }
    }
  })

  ScrollTrigger.create({
    start: "50px top", // Triggers when the top of the viewport hits 50px down the page
    end: "max",
    onEnter: () => {
      // Changes color when scrolling past 50px
      gsap.to(nav, { backgroundColor: "#ffffff", ease: "power1.inOut", duration: 0.4 })
      gsap.to(navBrand, { color: "#000000", ease: "power1.inOut", duration: 0.4 })
    },
    onLeaveBack: () => {
      // Returns to transparent (or your original color) when scrolling back to the very top
      gsap.to(nav, { backgroundColor: "transparent", ease: "power1.inOut", duration: 0.4 })
      gsap.to(navBrand, { color: "#ffffff", ease: "power1.inOut", duration: 0.4 })
    }
  })

  // Set the initial state of the animation to the end position (y: -100)
  // Ensure the CSS has an initial transform or we force it here
}
