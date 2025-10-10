<script setup lang="ts">
import IconSparkle from '../components/icons/IconSparkle.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F8F5F2]">
    <header class="mx-auto w-full max-w-[1280px] px-4 py-4">
      <div class="flex items-center gap-1">
        <span class="font-brand text-[22px] font-semibold tracking-tight">Edumapper</span>
        <IconSparkle class="h-4 w-4 text-black/70" />
      </div>
    </header>
  <div class="border-t border-gray-200"></div>
  <div class="h-6"></div>
    <main class="mx-auto w-full max-w-[960px] px-4 pb-12">
      <slot />
    </main>
  </div>
</template>
