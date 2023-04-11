<template>
  <q-drawer
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    :breakpoint="500"
    mini-to-overlay
    bordered
    show-if-above
    v-model="open"
    side="left"
  >
    <q-list>
      <!-- <q-item-label header> Drawer </q-item-label> -->
      <d-item
        v-for="(item, idx) in links"
        :key="idx"
        :title="item.title"
        :caption="item.caption"
        :icon="item.icon"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["update:modelValue"]);

const open = computed({
  get: () => props.modelValue,
  set: (val) => $emit("update:modelValue", val),
});

let miniState = ref(true);

const links = [
  {
    title: "Item 1",
    // caption: "",
    icon: "description",
    route: "",
  },
  {
    title: "Item 2",
    // caption: "",
    icon: "perm_media",
    route: "",
  },
  {
    title: "Item 3",
    // caption: "",
    icon: "auto_stories",
    route: "",
  },
];
</script>
