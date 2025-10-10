<script setup lang="ts">
interface Props {
  lycee: string
  city: string
  lyceeType: string
}
defineProps<Props>()
</script>

<template>
  <div class="rounded-2xl bg-[#EEE9E3] px-4 py-3 text-gray-900">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-[12px] text-gray-600">
        <span class="inline-flex items-center gap-1 font-semibold text-gray-600">{{ lycee }}</span>
        <span class="text-gray-300">|</span>
        <span class="inline-flex items-center gap-1 font-semibold text-gray-600">{{ city }}</span>
      </div>
      <button class="text-[12px] text-gray-600 hover:text-black transition-colors font-medium">
        Modifier
      </button>
    </div>
    <div class="mt-2 text-[14px] font-medium text-gray-700">{{ lyceeType }}</div>
  </div>
</template>