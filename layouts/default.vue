<script setup lang="ts">
import logoUrl from '../components/icons/Logo.svg?url'
</script>

<template>
  <div class="min-h-screen bg-[#F8F5F2]">
    <header class="mx-auto w-full max-w-[1280px] px-4 py-4">
      <div class="flex items-center gap-1">
        <img
          :src="logoUrl"
          alt="Edumapper"
          class="w-[146px] h-[28px] opacity-100"
          style="transform: rotate(0deg);"
        />
      </div>
    </header>
  <div class="border-t border-gray-200"></div>
  <div class="h-6"></div>
    <main class="mx-auto w-full max-w-[960px] px-4 pb-12">
      <slot />
    </main>
  </div>
</template>
