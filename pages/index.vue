<script setup lang="ts">
const library = [
  { name: 'Nuxt 3', link: 'https://nuxt.com' },
  { name: 'Pinia', link: 'https://pinia.vuejs.org' },
  { name: 'SCSS', link: 'https://sass-lang.com' },
  { name: '@antfu/eslint-config', link: 'https://github.com/antfu/eslint-config' },
  { name: '@nuxtjs/tailwindcss', link: 'https://nuxt.com/modules/tailwindcss' },
  { name: '@nuxt/icon', link: 'https://nuxt.com/modules/icon' },
  { name: '@vueuse/nuxt', link: 'https://nuxt.com/modules/vueuse' },
]
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="p-4 max-w-[480px]">
      <h4 class="font-semibold text-black-800">
        Nuxt Minimal Starter
      </h4>
      <h6 class="font-light text-black-600 mb-10">
        by Faisal Indrianto
      </h6>

      <p class="text-black-800 mb-10">
        This starter starter provides a lightweight and flexible foundation for building Nuxt 3 apps.
      </p>

      <small class="font-light text-black-600 mb-2 block">Powered with : </small>

      <div class="flex flex-wrap gap-2">
        <a
          v-for="(item, index) in library"
          :key="index"
          :href="item.link"
          target="_blank"
          class="rounded px-2 py-1 bg-black-200 hover:bg-black-300 transition-all text-caption"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>
