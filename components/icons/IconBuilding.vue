<script setup lang="ts">
withDefaults(defineProps<{ size?: number | string }>(), { size: 12 })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
</template>
