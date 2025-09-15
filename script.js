class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
    this.init()
  }

  init() {
    // Criar observer para animações
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, this.observerOptions)

    // Observar elementos
    const animatedElements = document.querySelectorAll(".portfolio-box, .contact-item, .stat-item")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      this.observer.observe(el)
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ScrollAnimations()
  document.body.classList.add("loaded")
})