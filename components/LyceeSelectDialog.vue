<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  modelValue: boolean
  allLycees: readonly string[]
  selected: string
}
const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'confirm': [lycee: string]
}>()

const searchQuery = ref('')
const tempSelected = ref(props.selected)

watch(() => props.modelValue, (open) => {
  if (open) {
    tempSelected.value = props.selected
    searchQuery.value = ''
  }
})

const filteredLycees = computed(() => {
  if (!searchQuery.value) return props.allLycees
  const q = searchQuery.value.toLowerCase()
  return props.allLycees.filter(l => l.toLowerCase().includes(q))
})

function close() { emit('update:modelValue', false) }
function selectLycee(l: string) { tempSelected.value = l }
function confirm() {
  if (tempSelected.value) {
    emit('confirm', tempSelected.value)
    close()
  }
}
</script>

<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/50" @click="close" />
    <div class="relative bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-xl">
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Choisir un lycée</h2>
        <button @click="close" class="p-1 rounded-full hover:bg-gray-100 transition-colors" aria-label="Fermer">
          <svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="p-4 border-b border-gray-200">
        <div class="relative">
          <input v-model="searchQuery" type="text" placeholder="Rechercher un lycée..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none">
          <svg class="absolute right-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <div class="overflow-y-auto max-h-80">
        <div v-if="filteredLycees.length === 0" class="p-4 text-center text-gray-500">Aucun lycée trouvé</div>
        <button
          v-for="l in filteredLycees"
          :key="l"
          @click="selectLycee(l)"
          class="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
          :class="{ 'bg-gray-50 font-medium': l === tempSelected }"
        >
          {{ l }}
        </button>
      </div>

      <div class="p-4 border-t border-gray-200 flex gap-2">
        <button @click="close" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">Annuler</button>
        <button @click="confirm" :disabled="!tempSelected" class="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">Confirmer</button>
      </div>
    </div>
  </div>
</template>