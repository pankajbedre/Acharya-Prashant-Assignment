<template>
  <div class="flex items-center gap-2 px-4 pt-4 lg:px-8">
    <div class="h-full items-center cursor-pointer text-sm hover:text-brand-700">
      <span>Home</span>
    </div>
    <div class="h-full items-center">
      <RightArrowIcon></RightArrowIcon>
    </div>
    <div class="h-full items-center font-hi font-medium text-sm">
      <span>संतवाणी</span>
    </div>
  </div>
</template>

<script>
import RightArrowIcon from '../icons/RightArrowIcon.vue'

export default { components: { RightArrowIcon } }
</script>

<style></style>
