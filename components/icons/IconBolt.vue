<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="icon-bolt"
    aria-hidden="true"
  >
    <!-- Symmetric bolt shape centered in viewbox -->
    <path d="M12 1L7 12h4l-1 11 7-13h-4l-1-9z"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number | string
}

withDefaults(defineProps<Props>(), {
  size: 24
})
</script>