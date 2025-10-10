<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    class="icon-building"
  >
    <path d="M3 21h4V10H3v11zm7-11h4v11h-4V10zm7 0h4v11h-4V10zM2 8l10-5 10 5v1H2V8z"/>
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