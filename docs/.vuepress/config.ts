import { defaultTheme, defineUserConfig, viteBundler } from "vuepress";

export default defineUserConfig({
  base: "/vuepress-demo/",
  title: "VuePress Starter",
  description: "VuePress Starter Project in Stackblitz",

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
  }),
});
