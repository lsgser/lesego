<script setup lang="ts">
defineProps<{
  name: string
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner section-container">
      <p class="footer__brand">{{ name }}</p>
      <p class="footer__copy">&copy; {{ year }} · crafted with Vue</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 0 calc(2rem + var(--safe-bottom));
  border-top: 1px solid var(--color-border);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__brand {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.footer__copy {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

@media (min-width: 640px) {
  .footer__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
