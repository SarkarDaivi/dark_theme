<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :class="{'bg-dark-toolbar': isDarkMode, 'bg-light-toolbar': !isDarkMode}">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
        <!-- Dark Mode Toggle Button -->
        <q-btn
          :label="isDarkMode ? 'Light Mode' : 'Dark Mode'"
          class="q-ml-md"
          @click="toggle"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="{'bg-dark-left-panel': isDarkMode, 'bg-light-left-panel': !isDarkMode}"
    >
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

import toggleDarkMode from 'src/constants/toggleDarkMode';

defineOptions({
  name: 'MainLayout'
});

// Toggle dark mode
const { toggle, isDarkMode } = toggleDarkMode();

// List of links for the drawer
const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

// Left drawer state
const leftDrawerOpen = ref(false);

// Toggle function for left drawer
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}


</script>

<style scoped>
/* Light theme background colors */

</style>
