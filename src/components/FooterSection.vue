<script setup lang="ts">
defineProps<{
  name: string
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner section-container">
      <p class="footer__text">
        Designed & built by {{ name.split(' ')[0] }}
      </p>
      <p class="footer__copy">&copy; {{ year }} {{ name }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer__text,
.footer__copy {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
