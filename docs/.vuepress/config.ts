import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme";
import plugins from "./config-user/plugins";
import headFunctions from "./headFunctions";

export default defineUserConfig({
  theme,
  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },
  extendsMarkdown: (md) => {
    const defaultRender = md.renderer.rules.image
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      tokens[idx].attrSet('loading', 'lazy')
      if (defaultRender) {
        return defaultRender(tokens, idx, options, env, self)
      }
      return self.renderToken(tokens, idx, options)
    }
  },
  plugins,
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['vue-select', 'vue-multiselect'],
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            // List of deprecated HTML tags to treat as custom elements
            // Add any other custom elements to this list 
            const customElements = [
              'Badge', 'center', 'font', 'big', 'small', 'strike', 'tt', 
              'marquee', 'blink', 'applet', 'frameset', 'frame', 'dir',
            ];
            return customElements.includes(tag);
          },
        },
      },
    },
  }),
  head: headFunctions,
});
