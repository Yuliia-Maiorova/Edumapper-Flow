<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{ modelValue: boolean; allLycees: readonly string[]; selected: string }>()
const emit = defineEmits<{ (e:'update:modelValue', v:boolean):void; (e:'confirm', v:string):void }>()

const open = computed({ get: () => props.modelValue, set: (v: boolean) => emit('update:modelValue', v) })
const local = ref(props.selected)
const query = ref('')
watch(() => props.selected, v => { local.value = v })

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.allLycees
  return props.allLycees.filter(l => l.toLowerCase().includes(q))
})

function onConfirm() { emit('confirm', local.value); open.value = false }
</script>

<template>
  <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="duration-150 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="open" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4">
      <div class="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white">
        <div class="px-4 py-3 border-b border-gray-200">
          <h4 class="text-[15px] font-semibold">Changer de lycée</h4>
        </div>
        <div class="p-4">
          <input type="text" placeholder="Rechercher un lycée" class="w-full rounded-full border border-gray-300 px-4 py-2 text-[14px] placeholder:text-gray-400" v-model="query" />
          <div class="mt-3 max-h-64 overflow-auto rounded-xl border border-gray-200 p-3">
            <label v-for="l in filtered" :key="l" class="mb-2 inline-flex items-center last:mb-0">
              <input class="peer sr-only" type="radio" name="lycee" :value="l" v-model="local">
              <span class="rounded-full px-4 py-2 text-[14px] transition whitespace-nowrap"
                    :class="local===l ? 'border border-black bg-white text-black' : 'border border-transparent bg-gray-100 hover:bg-gray-200 text-gray-800'">
                {{ l }}
              </span>
            </label>
          </div>
        </div>
        <div class="flex justify-end gap-2 px-4 pb-4">
          <button class="rounded-full border border-gray-300 px-4 py-2 text-[13px]" @click="open=false">Annuler</button>
          <button class="rounded-full bg-black px-4 py-2 text-[13px] text-white" @click="onConfirm">Valider</button>
        </div>
      </div>
    </div>
  </transition>
</template>
