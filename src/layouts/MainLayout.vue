<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <ui-header v-model:drawer="leftDrawer" />
    <!-- Drawer -->
    <ui-left-drawer v-model="leftDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

let leftDrawer = ref(true);
</script>
