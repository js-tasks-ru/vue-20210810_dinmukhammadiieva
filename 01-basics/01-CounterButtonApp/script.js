import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    setCounter() {
      return this.counter++;
    },
  },
}).mount('#app');
