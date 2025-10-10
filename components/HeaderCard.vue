<script setup lang="ts">
import { computed } from 'vue'
import IconMapPin from './icons/IconMapPin.vue'
import IconBuilding from './icons/IconBuilding.vue'
const props = withDefaults(defineProps<{ lycee?: string; school?: string; city?: string; lyceeType?: string; schoolType?: string }>(), {
  city: 'Paris',
  lyceeType: 'Lycée public',
  schoolType: 'Lycée public'
})
const nameToShow = computed(() => props.school || props.lycee || '')
const typeToShow = computed(() => props.schoolType || props.lyceeType || 'Lycée public')
const emit = defineEmits<{ (e: 'edit'): void }>()
</script>

<template>
  <div
    class="rounded-xl p-4 text-white"
    style="background: linear-gradient(90deg, var(--grad-start) 0%, var(--grad-end) 100%)"
  >
      <div class="flex flex-wrap items-start gap-2">
        <div class="min-w-0 flex-1">
          <h2 class="text-[17px] font-semibold leading-tight">{{ nameToShow }}</h2>
          <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] opacity-90">
            <span class="inline-flex items-center gap-1">
              <IconMapPin :size="12" />
              {{ props.city }}
            </span>
            <span class="inline-flex items-center gap-1">
              <IconBuilding :size="12" />
              {{ typeToShow }}
            </span>
          </div>
        </div>
        <button class="ml-auto shrink-0 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-black" @click="emit('edit')">
          Modifier
        </button>
      </div>
  </div>
</template>
