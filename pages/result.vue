<script setup lang="ts">
import { ref, computed } from 'vue'
import IconStar from '../components/icons/IconStar.vue'
import IconBolt from '../components/icons/IconBolt.vue'
import IconMapPin from '../components/icons/IconMapPin.vue'
import IconBuilding from '../components/icons/IconBuilding.vue'
import { useRoute } from 'nuxt/app'
const route = useRoute()
const lyceeName = computed(() => (route.query.lycee as string) || 'EDHEC Business School')
const city = computed(() => (route.query.city as string) || 'Roubaix')
const score = ref(91)
const levelLabel = computed(() => score.value >= 90 ? 'Très élevées' : score.value >= 75 ? 'Élevées' : score.value >= 50 ? 'Moyennes' : 'Faibles')
const reliability = ref(4)
</script>

<template>
  <div class="mx-auto max-w-[420px] md:max-w-[960px] pb-16">
    
    <div class="rounded-2xl bg-[#EEE9E3] px-4 py-3 text-gray-900">
    <div class="flex items-center justify-center gap-2 text-[12px] text-gray-600">
      <span class="inline-flex items-center gap-1 font-semibold text-gray-500">
        {{ lyceeName }}
      </span>
      <span class="text-gray-300">|</span>
      <span class="inline-flex items-center gap-1 font-semibold text-gray-500">
        <IconMapPin :size="12" />
        {{ city }}
      </span>
        </div>
        <div class="mt-2 text-center text-[18px] font-semibold tracking-tight">International BBA</div>
    </div>

  <div class="mt-4 rounded-3xl bg-white p-6 text-center">
  <div class="relative mx-auto h-36 w-36">
        
    <svg class="h-36 w-36" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--grad-start)"/>
              <stop offset="100%" stop-color="var(--grad-end)"/>
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" stroke="#F2F2F2" stroke-width="8" fill="none" />
          <circle :stroke-dasharray="Math.PI*2*44" :stroke-dashoffset="(1 - score/100) * Math.PI*2*44" cx="50" cy="50" r="44" :stroke="'url(#grad)'" stroke-width="8" fill="none" stroke-linecap="round" transform="rotate(-90 50 50)" />
        </svg>
  <IconBolt class="absolute inset-0 m-auto h-10 w-10" style="fill: url(#grad)" />
      </div>
      <div class="mt-4 text-[18px] font-semibold">{{ score }}% • {{ levelLabel }}</div>
      <div class="mt-2 text-sm text-gray-600">
        Fiabilité
        <span class="ml-2 inline-flex items-center">
          <IconStar v-for="i in 5" :key="i" class="h-4 w-4" :style="{ fill: i <= reliability ? '#111111' : '#E5E7EB' }" />
        </span>
      </div>
      <p class="mt-4 text-sm leading-6 text-gray-600">Cette estimation est fournie à titre indicatif et ne garantit en aucun cas la décision d’admission de l’établissement.</p>
    </div>
    <button class="mt-6 w-full rounded-full bg-black py-3 text-white" @click="$router.push('/')">Tester une autre formation</button>
  </div>
</template>
