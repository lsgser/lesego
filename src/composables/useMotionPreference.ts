import { onMounted, onUnmounted, ref } from 'vue'

export function useMotionPreference() {
  const reduceMotion = ref(false)
  const coarsePointer = ref(true)

  let motionQuery: MediaQueryList | null = null
  let pointerQuery: MediaQueryList | null = null

  function sync() {
    reduceMotion.value = motionQuery?.matches ?? false
    coarsePointer.value = pointerQuery?.matches ?? true
  }

  onMounted(() => {
    motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    pointerQuery = window.matchMedia('(pointer: coarse)')

    sync()
    motionQuery.addEventListener('change', sync)
    pointerQuery.addEventListener('change', sync)
  })

  onUnmounted(() => {
    motionQuery?.removeEventListener('change', sync)
    pointerQuery?.removeEventListener('change', sync)
  })

  return { reduceMotion, coarsePointer }
}
