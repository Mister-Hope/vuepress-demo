import { defineClientConfig } from "@vuepress/client";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // ...
  },
  setup() {
    const route = useRoute();
    const editDom = () => {
      document.querySelectorAll<HTMLElement>("button.test").forEach((el) => {
        if (!el.hasAttribute("test")) {
          el.setAttribute("test", "test");
          el.addEventListener("click", () => {
            alert("Test");
          });
        }
      });
    };

    onMounted(() => {
      editDom();
    });

    watch(
      () => route.path,
      () => {
        console.log("change");
        editDom();
      }
    );
  },
  rootComponents: [
    // ...
  ],
});
