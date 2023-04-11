import { boot } from "quasar/wrappers";

// UI Layout
import uiLeftDrawer from "../components/ui/drawer/leftDrawer.vue";

export default boot(async ({ app }) => {
  // UI Layout
  app.component("ui-left-drawer", uiLeftDrawer);
});
