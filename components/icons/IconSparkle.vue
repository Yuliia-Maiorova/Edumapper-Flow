<script setup lang="ts">
withDefaults(defineProps<{ size?: number | string }>(), { size: 16 })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l1.8 4.8L19 9l-5.2 2.2L12 16l-1.8-4.8L5 9l5.2-2.2L12 2z"/>
  </svg>
</template>
