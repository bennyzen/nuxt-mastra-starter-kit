<script setup lang="ts">
const { data, status } = await useFetch("/api/weather", {
  method: "POST",
  body: {
    location: "New York",
  },
});
</script>

<template>
  <main>
    <div v-if="data">
      {{ data.result }}
    </div>
    <div v-else>
      <p>{{ status }}</p>
    </div>
  </main>
</template>
