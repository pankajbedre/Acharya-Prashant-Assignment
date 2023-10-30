<script setup>
defineProps({
  courses: Object
})
function convertToHoursAndMinutes(durationInHours) {
  const hours = Math.floor(durationInHours)
  const minutes = (durationInHours - hours) * 60
  return `${hours} hours ${Math.round(minutes)} minutes`
}
</script>
<template>
  <div class="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16">
    <div class="px-4 lg:px-8">
      <div class="font-medium">
        <span>Video Series ({{ courses?.length }})</span>
      </div>
      <div class="mt-1 h-[0.5px] w-full bg-gray-separator md:mt-2"></div>
    </div>

    <div
      class="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:px-4 xl:grid-cols-4"
    >
      <a
        href=""
        class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow"
        v-for="(course, index) in courses"
        :key="index"
      >
        <div class="flex flex-col space-y-2">
          <div class="self-start pb-2">
            <div
              class="pointer-tag h-[24px] relative flex items-center justify-center rounded pl-2 pr-3 text-center text-xs font-medium"
            >
              <span class="font-hi pt-[3px]">भाग {{ index + 1 }}</span>
            </div>
          </div>
          <div class="font-hi">
            <div class="text-lg font-medium font-hi leading-normal text-gray-title">
              <span>{{ course.title }}</span>
            </div>
            <div class="text-sm leading-normal text-gray-subtitle lg:text-base">
              <span class="pt-[3px]">{{ course.subtitle }}</span>
            </div>
            <div class="pt-1 text-xs text-gray-subtitle lg:text-sm font-en">
              <span class="pt-[3px]">{{ convertToHoursAndMinutes(course.courseHours) }}</span>
            </div>
            <div class="pt-1 text-xs text-gray-subtitle lg:text-sm font-en">
              <span class="pt-[3px]"
                >Contribution: ₹{{ course.amount }}
                <span class="line-through">₹{{ course.originalAmount }}</span></span
              >
            </div>
          </div>
          <div class="mt-2 flex flex-wrap text-xs">
            <div
              class="flex items-center rounded px-1.5 py-0.5 text-xs text-slate-700 bg-blue-background"
            >
              <span class="capitalize">{{ course.language }}</span>
            </div>
          </div>

          <div class="inline-flex gap-2 text-xs mt-1 ">
            <div class="btn-borderless">
              <span>ADD TO CART</span>
            </div>
            <div class="border-s-2"></div>
            <div class="btn-borderless">
              <span>ENROLL</span>
            </div>
          </div>
        </div>
        <div class="pt-2 group-hover:invisible">
          <div class="h-[1px] w-full bg-gray-separator"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.pointer-tag {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.pointer-tag::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 0;
  width: 0;
  border-top: 12px solid transparent;
  border-right: 5px solid white;
  border-bottom: 12px solid transparent;
}
</style>
