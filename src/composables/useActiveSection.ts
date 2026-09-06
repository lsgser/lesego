import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref('')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          activeSection.value = visible[0].target.id
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )

    elements.forEach((el) => observer!.observe(el))
    activeSection.value = elements[0]!.id
  })

  onUnmounted(() => observer?.disconnect())

  return { activeSection }
}
