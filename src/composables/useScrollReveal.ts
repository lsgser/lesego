import { onMounted, onUnmounted } from 'vue'

function revealElement(el: Element) {
  const htmlEl = el as HTMLElement
  htmlEl.style.opacity = '1'
  htmlEl.style.transform = 'translateY(0)'
  htmlEl.dataset.revealed = 'true'
}

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    document.querySelectorAll('[data-reveal][data-revealed="true"]').forEach(revealElement)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target)
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    document.querySelectorAll('[data-reveal]:not([data-revealed="true"])').forEach((el) => {
      observer!.observe(el)
    })
  })

  onUnmounted(() => observer?.disconnect())
}
