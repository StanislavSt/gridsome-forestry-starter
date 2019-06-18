import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
