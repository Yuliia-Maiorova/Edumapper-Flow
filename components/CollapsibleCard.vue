<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import IconArrowDown from '~/components/icons/IconArrowDown.vue'

const props = withDefaults(defineProps<{
  title: string
  subtitle?: string
  open?: boolean
  onConfirm?: () => void
  confirmDisabled?: boolean
  rightNote?: string
}>(), { open: false, subtitle: undefined, confirmDisabled: false, rightNote: undefined })

const isOpen = ref(!!props.open)
watchEffect(() => { isOpen.value = !!props.open })

function toggle() { isOpen.value = !isOpen.value }
</script>

<template>
  <div class="rounded-2xl bg-white">
    <button type="button" class="flex w-full items-start justify-between gap-3 rounded-2xl px-4 py-3 text-left" @click="toggle">
      <div class="min-w-0">
        <div class="truncate text-sm font-medium text-gray-900">{{ title }}</div>
        <div v-if="subtitle" class="mt-0.5 truncate text-xs text-gray-500">{{ subtitle }}</div>
      </div>
      <div class="flex items-center gap-2">
        <span v-if="rightNote" class="text-[11px] text-gray-500">{{ rightNote }}</span>
        <IconArrowDown class="h-5 w-5 shrink-0 text-gray-500 transition-transform" :class="isOpen ? 'rotate-180' : 'rotate-0'" />
      </div>
    </button>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
      <div v-if="isOpen">
        <slot />
        <div v-if="onConfirm" class="mt-4 px-4 pb-4">
          <button :disabled="props.confirmDisabled" class="w-full rounded-full py-3 text-sm disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400 disabled:border disabled:border-gray-300 bg-black text-white" @click.stop="props.onConfirm?.()">Confirmer</button>
        </div>
      </div>
    </transition>
  </div>
</template>