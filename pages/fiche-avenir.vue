<script setup lang="ts">
import { ref } from 'vue'
const file = ref<File | null>(null)
const error = ref<string | null>(null)
const uploading = ref(false)
const result = ref<any>(null)

const allowed = ['application/pdf', 'image/png', 'image/jpeg']
const maxBytes = 10 * 1024 * 1024

function validate(f: File) {
  if (!allowed.includes(f.type)) {
    error.value = 'Type de fichier non supporté (PDF, PNG ou JPG)'
    return false
  }
  if (f.size > maxBytes) {
    error.value = 'Fichier trop volumineux (max 10 Mo)'
    return false
  }
  error.value = null
  return true
}

function onDrop(e: DragEvent) {
  e.preventDefault()
  const f = e.dataTransfer?.files?.[0]
  if (f && validate(f)) file.value = f
}

function onPick(e: Event) {
  const target = e.target as HTMLInputElement
  const f = target.files?.[0]
  if (f && validate(f)) file.value = f
}

async function upload() {
  if (!file.value) return
  uploading.value = true
  result.value = null
  try {
    const fd = new FormData()
    fd.append('file', file.value)
    result.value = await $fetch('/api/fiche-avenir', { method: 'POST', body: fd })
  } catch (e: any) {
    error.value = e?.data?.error || 'Erreur lors de l\'envoi'
  } finally {
    uploading.value = false
  }
}
</script>

<template>
  <main class="mx-auto max-w-[420px] md:max-w-[800px] space-y-4 pb-16 px-4">
    <div class="rounded-2xl bg-white p-4">
      <h1 class="text-lg font-semibold">Joindre votre Fiche Avenir</h1>
      <p class="mt-1 text-sm text-gray-600">Ajoutez votre fiche Parcoursup à votre estimation.</p>

      <div class="mt-4">
        <div
          class="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center"
          @dragover.prevent
          @drop="onDrop"
        >
          <p class="text-sm text-gray-700">Glissez-déposez votre fichier ici</p>
          <p class="text-xs text-gray-500">PDF, PNG ou JPG jusqu'à 10 Mo</p>
          <div class="mt-3">
            <label class="inline-flex cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-2 text-sm">Choisir un fichier
              <input type="file" accept=".pdf,.png,.jpg,.jpeg" class="sr-only" @change="onPick" />
            </label>
          </div>
          <div v-if="file" class="mt-3 text-sm text-gray-700">Sélectionné: {{ file?.name }}</div>
          <div v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</div>
        </div>
      </div>

      <div class="mt-4">
        <button :disabled="!file || uploading" class="w-full rounded-full py-3 text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400 disabled:border disabled:border-gray-300 bg-black" @click="upload">
          {{ uploading ? 'Envoi…' : 'Envoyer la fiche' }}
        </button>
      </div>

      <div v-if="result?.ok" class="mt-4 rounded-lg bg-gray-50 p-3 text-sm">
        <div class="font-medium">Fichier reçu</div>
        <div class="text-gray-600">Nom: {{ result.file?.filename }}</div>
        <div class="text-gray-600">Type: {{ result.file?.mimetype }}</div>
        <div class="text-gray-600">Taille: {{ result.file?.size }} octets</div>
      </div>
    </div>
  </main>
</template>
