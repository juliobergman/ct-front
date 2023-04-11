<template>
  <q-item clickable v-if="showItem">
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label v-if="caption" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "favorite",
  },
});

const showItem = computed(() => (props.title ? true : false));

const title = computed(() => props.title);
const caption = computed(() => props.caption);
const icon = computed(() => props.icon);
</script>
