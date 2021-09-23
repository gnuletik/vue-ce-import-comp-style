<script setup lang="ts">
import OtherComponent from './OtherComponent.vue'
</script>

<template>
  <p class="my-red">This should be red</p>
	<OtherComponent />
</template>

<style scoped>
.my-red {
  color: red;
}
</style>
