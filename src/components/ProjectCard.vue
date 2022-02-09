<template>
  <div class="project">
    <div class="title">{{ title }}</div>
    <div class="abstract">
      {{ abstract }}
    </div>
    <button class="call-of-action">click for more +</button>
  </div>
</template>

<script>
export default {
  props: ["title", "abstract"],
};
</script>

<style></style>
