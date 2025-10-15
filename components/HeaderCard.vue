<script setup lang="ts">
import { computed } from 'vue'
import MapPinIcon from './icons/IconMapPin.svg?component'
import BuildingIcon from './icons/IconBuilding.svg?component'

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
    style="background-image: linear-gradient(278.93deg, #B176FF 0%, #FF7342 50%), radial-gradient(50.15% 126.47% at 100% 0%, rgba(255, 187, 225, 0.5) 0%, rgba(255, 187, 225, 0) 100%);"
  >
    <div class="flex flex-wrap items-start gap-2">
      <div class="min-w-0 flex-1">
        <h2
          class="text-[20px] leading-[24px] font-bold tracking-[-0.02em] text-white"
          style="font-family: 'DM Sans', sans-serif; vertical-align: middle;"
        >
          {{ nameToShow }}
        </h2>

        <div
          class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] leading-4 font-normal text-white"
          style="font-family: 'DM Sans', sans-serif; vertical-align: middle;"
        >
          <span class="inline-flex items-center gap-1">
            <MapPinIcon class="h-3 w-3 inline-block align-middle text-white" aria-hidden="true" />
            {{ props.city }}
          </span>
          <span class="inline-flex items-center gap-1">
            <BuildingIcon class="h-3 w-3 inline-block align-middle text-white" aria-hidden="true" />
            {{ typeToShow }}
          </span>
        </div>
      </div>

      <button
        class="ml-auto shrink-0 rounded-full bg-white text-[14px] leading-4 font-medium text-[#111111]"
        style="font-family: 'DM Sans', sans-serif; width: 87px; height: 32px; padding: 8px 16px;"
        @click="emit('edit')"
      >
        Modifier
      </button>
    </div>
  </div>
</template>
