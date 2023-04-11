<template>
  <q-header>
    <q-toolbar>
      <icon-brand
        color="toolbar-logo"
        v-if="!$mobile"
        size="sm"
        class="q-ml-sm"
      />
      <q-toolbar-title> Front </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  drawer: {
    type: Boolean,
    default: false,
  },
});
const $emit = defineEmits(["update:drawer"]);

const drawer = computed({
  get: () => props.drawer,
  set: (val) => $emit("update:drawer", val),
});
</script>
