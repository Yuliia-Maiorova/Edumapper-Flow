<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    class="icon-bolt"
  >
    <path d="M13 1L8.5 8.5H1l4.5 5.5L13 23l-2.5-8.5H18L13 1z"/>
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