import { Dark } from 'quasar';
import { ref } from 'vue';

export default function toggleDarkMode() {
  const isDarkMode = ref(Dark.isActive);

  // Function to toggle dark mode
  const toggle = () => {
    Dark.set(!Dark.isActive); // Toggle the dark mode
    isDarkMode.value = Dark.isActive; // Sync local state with Quasar Dark mode state
  };

  return { toggle, isDarkMode };
}
