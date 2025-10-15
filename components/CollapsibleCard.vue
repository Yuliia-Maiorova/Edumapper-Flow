<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ArrowDownIcon from './icons/IconArrowDown.svg?component'

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
    <button
      type="button"
      class="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left bg-white"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <div class="min-w-0">
        <div
          class="truncate text-[16px] leading-[1.4] font-semibold text-[#212121] align-middle"
          style="font-family: 'DM Sans', sans-serif;"
        >
          {{ title }}
        </div>
        <div v-if="subtitle" class="mt-0.5 text-[14px] leading-[1.4] font-medium text-[#333333]" style="font-family: 'DM Sans', sans-serif;">
          {{ subtitle }}
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span v-if="rightNote" class="text-[14px] leading-[1.4] font-normal text-[#757575] align-middle" style="font-family: 'DM Sans', sans-serif;">
          {{ rightNote }}
        </span>

        <ArrowDownIcon
          class="block w-[6px] h-[12px] shrink-0 origin-center transition-transform overflow-visible p-px text-[#212121]"
          :class="isOpen ? 'rotate-180' : 'rotate-0'"
          aria-hidden="true"
          focusable="false"
        />
      </div>
    </button>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isOpen">
        <slot />
        <div class="mt-4 px-4 pb-4">
          <button
            :disabled="props.confirmDisabled"
            :class="[
              'w-full rounded-full py-3 text-center align-middle font-medium',
              'text-[16px] leading-[20px]',
              props.confirmDisabled
                ? 'bg-white text-[#BDBDBD] border border-[#E0E0E0]'
                : 'bg-[#212121] text-white'
            ]"
            style="font-family: 'DM Sans', sans-serif;"
            @click.stop="props.onConfirm?.()"
          >
            Confirmer
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
