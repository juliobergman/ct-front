import { boot } from "quasar/wrappers";

// UI Layout
import uiHeader from "../components/ui/mainHeader.vue";
import uiLeftDrawer from "../components/ui/drawer/leftDrawer.vue";
import uiDrawerItem from "../components/ui/drawer/drawerItem.vue";
// Icons
import iconBrand from "../components/ui/icon/iconBrand.vue";

export default boot(async ({ app }) => {
  // UI Layout
  app.component("ui-header", uiHeader);
  app.component("ui-left-drawer", uiLeftDrawer);
  app.component("d-item", uiDrawerItem);
  // Icons
  app.component("icon-brand", iconBrand);
});
