<template>
  <div class="row justify-center q-pa-lg">
    <q-btn
      :label="isDarkMode ? 'Light Mode' : 'Dark Mode'"
      class="bg-green q-ma-lg"
      @click="toggle"
    ></q-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import toggleDarkMode from 'src/constants/toggleDarkMode';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    // Use only the toggle function
    const { toggle, isDarkMode } = toggleDarkMode();

    return { toggle, isDarkMode };
  },
});
</script>
