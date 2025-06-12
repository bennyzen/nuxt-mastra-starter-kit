<script setup lang="ts">
const streamedContent = ref("");
const isStreaming = ref(false);
const error = ref("");

const startStreaming = async () => {
  isStreaming.value = true;
  streamedContent.value = "";
  error.value = "";

  try {
    const response = await fetch("/api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: "New York",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error("No response body");
    }

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value);
      streamedContent.value += chunk;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  } finally {
    isStreaming.value = false;
  }
};

// Start streaming on component mount
onMounted(() => {
  startStreaming();
});
</script>

<template>
  <main>
    <div v-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else>
      <div v-if="isStreaming && !streamedContent">
        <p>Starting stream...</p>
      </div>
      <div v-if="streamedContent">
        <pre>{{ streamedContent }}</pre>
      </div>
      <div v-if="isStreaming">
        <p>Streaming...</p>
      </div>
    </div>
  </main>
</template>
