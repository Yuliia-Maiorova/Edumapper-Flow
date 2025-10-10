<script setup lang="ts">
import { useAsyncData, useRouter } from 'nuxt/app'
import { ref, computed } from 'vue'
import { LYCEES, getLyceeByName } from '../utils/lycees'
const router = useRouter()

type OptionGroup = { value: string; options: string[] }
type PrefillPayload = {
  lycee: string
  city: string
  lyceeType?: string
  classe: OptionGroup
  voie: OptionGroup
}

const { data, refresh } = await useAsyncData<PrefillPayload>('prefill', () => $fetch('/api/prefill'))

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

const lycee = ref<string>(data.value?.lycee ?? '')
const city = ref<string>(data.value?.city ?? (getLyceeByName(data.value?.lycee ?? '')?.city ?? 'Paris'))
const lyceeType = ref<string>(data.value?.lyceeType ?? (getLyceeByName(data.value?.lycee ?? '')?.type ?? 'Lycée public'))
const classe = ref<OptionGroup>(data.value?.classe ?? { value:'', options:[] })
const voie = ref<OptionGroup>(data.value?.voie ?? { value:'', options:[] })
const lyceeDialogOpen = ref(false)
const classeOpen = ref(true)
const isClasseComplete = computed(() => Boolean(classe.value.value && voie.value.value))
const classeSubtitle = computed(() => (!classeOpen.value && isClasseComplete.value) ? `${classe.value.value}, ${voie.value.value}` : undefined)
const rightNote = computed(() => isClasseComplete.value ? '' : 'À compléter')
const classeMinWidth = computed(() => {
  const arr = classe.value?.options || []
  const longest = arr.reduce((a, b) => (a.length > b.length ? a : b), '')
  return `${Math.max(longest.length + 2, 8)}ch`
})
const voieMinWidth = computed(() => {
  const arr = voie.value?.options || []
  const longest = arr.reduce((a, b) => (a.length > b.length ? a : b), '')
  return `${Math.max(longest.length + 2, 10)}ch`
})

async function handleRefresh() {
  await refresh()
  if (data.value) {
    lycee.value = data.value.lycee
    city.value = data.value.city
  lyceeType.value = data.value.lyceeType ?? 'Lycée public'
    const clsOpts = (data.value.classe?.options || []) as string[]
    const voieOpts = (data.value.voie?.options || []) as string[]
    classe.value = { value: pick(clsOpts), options: clsOpts }
    voie.value = { value: pick(voieOpts), options: voieOpts }
    classeOpen.value = true
  }
}

function classeConfirmed() {
  classeOpen.value = false
}

function onLyceeChange(next: string) {
  lycee.value = next
  const meta = getLyceeByName(next)
  if (meta) {
    city.value = meta.city
    lyceeType.value = meta.type ?? 'Lycée public'
  }
}
function onClasseChange(next: { classe:string; voie:string }) {
  classe.value = { ...classe.value, value: next.classe }
  voie.value = { ...voie.value, value: next.voie }
}
</script>

<template>
  <main class="mx-auto max-w-[420px] md:max-w-[800px] space-y-4 pb-16">
    <HeaderCard :lycee="lycee" :city="city" :lyceeType="lyceeType" @edit="() => { lyceeDialogOpen = true }" />

    <div class="rounded-2xl bg-white p-0">
      <CollapsibleCard :title="'Classe'" :subtitle="classeSubtitle" :rightNote="rightNote" :open="classeOpen" :onConfirm="classeConfirmed" :confirmDisabled="!isClasseComplete">
        <div class="px-4 pt-2 pb-4">
          <p class="text-[12px] font-medium text-gray-700">Classe</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <button v-for="opt in classe.options" :key="opt" class="shrink-0 rounded-full px-4 py-2 text-sm transition whitespace-nowrap" :style="{ minWidth: classeMinWidth }" :class="opt===classe.value ? 'border border-black bg-white text-black' : 'border-transparent bg-gray-100 hover:bg-gray-200 text-gray-800'" @click="onClasseChange({ classe: opt, voie: voie.value })">{{ opt }}</button>
          </div>
          <div class="my-4 border-t border-gray-200"></div>
          <p class="text-[12px] font-medium text-gray-700">Type de bac</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <button v-for="opt in voie.options" :key="opt" class="shrink-0 rounded-full px-4 py-2 text-sm transition whitespace-nowrap" :style="{ minWidth: voieMinWidth }" :class="opt===voie.value ? 'border border-black bg-white text-black' : 'border-transparent bg-gray-100 hover:bg-gray-200 text-gray-800'" @click="onClasseChange({ classe: classe.value, voie: opt })">{{ opt }}</button>
          </div>
        </div>
      </CollapsibleCard>
    </div>

    <div class="rounded-2xl bg-white p-0">
      <CollapsibleCard :title="'Spécialités'" :subtitle="''" :rightNote="'À compléter'" :open="false">
        <div class="px-4 pt-2 pb-4 text-sm text-gray-500">À définir</div>
      </CollapsibleCard>
    </div>

    <div class="rounded-2xl bg-white p-0">
      <CollapsibleCard :title="'Notes'" :subtitle="''" :rightNote="'À compléter'" :open="false">
        <div class="px-4 pt-2 pb-4 text-sm text-gray-500">À définir</div>
      </CollapsibleCard>
    </div>

    <div class="mt-4">
      <button :disabled="!isClasseComplete" class="w-full rounded-full py-3 text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400 disabled:border disabled:border-gray-300 bg-black" @click="router.push({ path: '/result', query: { lycee: lycee, city: city } })">Confirmer</button>
      <div class="mt-2 flex justify-end">
        <button class="text-[12px] text-gray-600 hover:text-black" @click="handleRefresh">Recharger aléatoirement</button>
      </div>
    </div>

    <LyceeSelectDialog v-model="lyceeDialogOpen" :all-lycees="(LYCEES as readonly string[])" :selected="lycee" @confirm="onLyceeChange" />
  </main>
  </template>
