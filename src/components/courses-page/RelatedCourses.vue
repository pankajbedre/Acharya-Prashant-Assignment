<script setup>
defineProps({
  relatedContent: Object
})
</script>
<template>
  <div class="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16">
    <div class="px-4 lg:px-8">
      <div class="font-medium">
        <span>Other Helpful Video Series </span>
      </div>
      <div class="mt-1 h-[0.5px] w-full bg-gray-separator md:mt-2"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:gap-x-8 lg:px-4 xl:grid-cols-3">
      <a
        href=""
        class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow"
        v-for="(course, index) in relatedContent"
        :key="index"
      >
        <div class="flex h-full">
          <div class="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1">
            <div class="w-full">
              <div class="relative aspect-[16/9] w-full">
                <div class="absolute inset-0 mx-2 border border-t border-white">
                  <div class="relative h-full w-full overflow-hidden rounded">
                    <img
                      class="h-full w-full object-cover"
                      :src="`${course.thumbnail.domain}/${course.thumbnail.basePath}/${course.thumbnail.qualities[0]}/${course.thumbnail.key}`"
                      alt=""
                    />
                  </div>
                </div>
                <div class="absolute inset-0 top-1 mx-1 border border-t border-white">
                  <div class="relative h-full w-full overflow-hidden rounded">
                    <img
                      class="h-full w-full object-cover"
                      :src="`${course.thumbnail.domain}/${course.thumbnail.basePath}/${course.thumbnail.qualities[0]}/${course.thumbnail.key}`"
                      alt=""
                    />
                  </div>
                </div>
                <div class="absolute inset-0 top-2 border border-t border-white">
                  <div class="relative h-full w-full overflow-hidden rounded">
                    <img
                      class="h-full w-full object-cover"
                      :src="`${course.thumbnail.domain}/${course.thumbnail.basePath}/${course.thumbnail.qualities[0]}/${course.thumbnail.key}`"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-4">
            <div class="text-lg font-medium" :class="{ 'font-hi': course.language === 'hindi' }">
              <span>{{ course.title }}</span>
            </div>
            <div
              class="text-sm font-normal leading-normal text-gray-subtitle lg:text-base"
              :class="{ 'font-hi': course.language === 'hindi' }"
            >
              <span>{{ course.subtitle }}</span>
            </div>
            <div
              class="text-sm font-normal leading-normal text-gray-subtitle lg:text-base"
              :class="{ 'font-hi': course.language === 'hindi' }"
            >
              <span>{{ course.coursesCount }} video series</span>
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

<style></style>
