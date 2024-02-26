import { defineStore } from 'pinia';
import { theme } from 'ant-design-vue';
import type { IAppConfigState } from './type';
import { c } from 'node_modules/unplugin-vue-router/dist/options-yBvUhD_i.d.mts';
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm, defaultSeed } = theme;

// const { token } = useToken();
const token = defaultAlgorithm(defaultSeed);

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAppConfigStore = defineStore('APP_CONFIG', {
  state() {
    // fix data persistence issue: function serialization problems arise
    const algorithm = [compactAlgorithm];
    try {
      const APP_CONFIG_JSON = localStorage.getItem('APP_CONFIG');
      const local = APP_CONFIG_JSON ? JSON.parse(APP_CONFIG_JSON) : {};

      if (local.themeScheme === 'dark') {
        algorithm.push(darkAlgorithm);
      }
    } catch (e) {
      console.error(e, '🍍');
    }
    return {
      theme: { algorithm },
      themeScheme: 'light',
      layout: {
        sider: {
          width: 200,
          collapsedWidth: 60,
          backgroundColor: token.colorBgContainer,
        },
        header: {
          height: 50,
          backgroundColor: '#CADFFB',
        },
      },
    };
  },

  actions: {
    setThemeScheme(scheme: IAppConfigState['themeScheme']) {
      this.themeScheme = scheme;
      if (scheme === 'dark' && Array.isArray(this.theme.algorithm)) {
        this.theme.algorithm.push(darkAlgorithm);
      }
      if (scheme === 'light' && Array.isArray(this.theme.algorithm)) {
        // const algorithm = this.theme.algorithm.filter((a) => a !== darkAlgorithm);
        // Object.assign(this.theme, { algorithm });
        this.theme.algorithm.pop();
      }
    },
  },

  persist: {
    // CONFIG OPTIONS HERE
    beforeRestore(context) {},
    paths: ['themeScheme', 'layout'],
  },
});
