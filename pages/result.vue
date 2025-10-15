<script setup lang="ts">
import { ref, computed } from 'vue'
import ratingIconUrl from '../components/icons/RatingIcon.svg?url'
import ratingStarsUrl from '../components/icons/RatingStars.svg?url'
import { useRoute } from 'nuxt/app'
const route = useRoute()
const lyceeName = computed(() => (route.query.lycee as string) || 'EDHEC Business School')
const city = computed(() => (route.query.city as string) || 'Roubaix')
const score = ref(91)
const levelLabel = computed(() => score.value >= 90 ? 'Très élevées' : score.value >= 75 ? 'Élevées' : score.value >= 50 ? 'Moyennes' : 'Faibles')
</script>

<template>
  <div class="mx-auto max-w-[420px] md:max-w-[960px] pb-16">
    <div class="rounded-2xl bg-[#EEE9E3] px-4 py-3 text-gray-900">
      <div class="flex items-center justify-center gap-2 text-[12px] text-gray-600">
        <span class="inline-flex items-center gap-1 font-semibold text-gray-500">
          {{ lyceeName }}
        </span>
        <span class="text-gray-300">|</span>
        <span class="inline-flex items-center gap-1 font-semibold text-gray-500"
             style="color:#757575;"
        >
          <svg
            class="h-3 w-3 inline-block align-middle"
            viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"
          >
            <path d="M12 21s-6-4.5-6-10a6 6 0 1 1 12 0c0 5.5-6 10-6 10z"
                  stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <circle cx="12" cy="11" r="2" stroke="currentColor" stroke-width="1.5" />
          </svg>
          {{ city }}
        </span>
      </div>
      <div class="mt-2 text-center text-[18px] font-semibold tracking-tight">International BBA</div>
    </div>

    <div class="mt-4 rounded-3xl bg-white p-6 text-center">
      <div class="relative mx-auto h-48 w-48">
        <img :src="ratingIconUrl" alt="" class="absolute inset-0 m-auto h-[112px] w-[112px]" aria-hidden="true" />
      </div>

      <div class="text-[18px] font-semibold">{{ score }}% • {{ levelLabel }}</div>
      <div
        class="mt-4 mb-6 inline-flex items-center justify-center gap-2"
        style="font-family: 'DM Sans', sans-serif;"
      >
        <span
          class="text-[12px] leading-[1.4] font-medium"
          style="color:#333333; vertical-align: middle;"
        >
          Fiabilité
        </span>
        <img
          :src="ratingStarsUrl"
          alt="Notation"
          class="h-4 w-auto align-middle"
          aria-hidden="true"
        />
      </div>

      <!-- Disclaimer right after -->
      <p
        class="mt-2 text-[14px] leading-[1.4] text-center"
        style="font-family: 'DM Sans', sans-serif; color:#757575; vertical-align: middle;"
      >
        Cette estimation est fournie à titre indicatif et ne garantit en aucun cas la décision d’admission de l’établissement.
      </p>
    </div>

    <div class="mt-6 flex flex-col items-center gap-2 sm:flex-row">
      <NuxtLink
        to="/fiche-avenir"
        class="rounded-full border border-gray-300 px-4 py-3 text-center text-[14px] font-medium text-gray-700 hover:text-black hover:border-black sm:flex-1"
      >
        Joindre la fiche Avenir
      </NuxtLink>
      <button class="rounded-full bg-black px-4 py-3 text-[14px] font-medium text-white sm:flex-1" @click="$router.push('/')">
        Tester une autre formation
      </button>
    </div>
  </div>
</template>
