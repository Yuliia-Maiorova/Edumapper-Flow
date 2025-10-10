<script setup lang="ts">
import { ref, computed } from 'vue'

const lycee = ref('EDHEC Business School')
const city = ref('Roubaix')
const lyceeType = ref('École de commerce')

const classe = ref({ value: '', options: ['Terminale générale', 'Terminale technologique', 'Terminale professionnelle'] })
const voie = ref({ value: '', options: ['Bac général', 'Bac technologique STMG', 'Bac professionnel'] })

const isClasseComplete = computed(() => Boolean(classe.value.value && voie.value.value))
const classeSubtitle = computed(() => (isClasseComplete.value ? `${classe.value.value}, ${voie.value.value}` : undefined))

function onClasseChange(next: { classe?: string; voie?: string }) {
  if (next.classe !== undefined) classe.value = { ...classe.value, value: next.classe }
  if (next.voie !== undefined) voie.value = { ...voie.value, value: next.voie }
}

function confirmClasse() {
}
</script>

<template>
  <main class="space-y-4 pb-16">
    <HeaderCard :lycee="lycee" :city="city" :lyceeType="lyceeType" />

    <CollapsibleCard :title="'Classe'" :subtitle="classeSubtitle" :rightNote="isClasseComplete ? '' : 'À compléter'" :open="true" :onConfirm="confirmClasse" :confirmDisabled="!isClasseComplete">
      <div class="px-4 pt-2 pb-4">
        <p class="text-[12px] font-medium text-gray-700">Classe</p>
        <div class="mt-2 flex flex-wrap gap-2">
          <button v-for="opt in classe.options" :key="opt" class="shrink-0 rounded-full px-4 py-2 text-sm transition whitespace-nowrap" :class="opt===classe.value ? 'border border-black bg-white text-black' : 'border-transparent bg-gray-100 hover:bg-gray-200 text-gray-800'" @click="onClasseChange({ classe: opt })">{{ opt }}</button>
        </div>

        <div class="my-4 border-t border-gray-200"></div>

        <p class="text-[12px] font-medium text-gray-700">Type de bac</p>
        <div class="mt-2 flex flex-wrap gap-2">
          <button v-for="opt in voie.options" :key="opt" class="shrink-0 rounded-full px-4 py-2 text-sm transition whitespace-nowrap" :class="opt===voie.value ? 'border border-black bg-white text-black' : 'border-transparent bg-gray-100 hover:bg-gray-200 text-gray-800'" @click="onClasseChange({ voie: opt })">{{ opt }}</button>
        </div>
      </div>
    </CollapsibleCard>

    <CollapsibleCard :title="'Spécialités'" :subtitle="''" :rightNote="'À compléter'">
      <div class="px-4 pt-2 pb-4 text-sm text-gray-500">
        À définir
      </div>
    </CollapsibleCard>

    <CollapsibleCard :title="'Notes'" :subtitle="''" :rightNote="'À compléter'">
      <div class="px-4 pt-2 pb-4 text-sm text-gray-500">
        À définir
      </div>
    </CollapsibleCard>
  </main>
</template>