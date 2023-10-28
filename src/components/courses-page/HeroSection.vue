<script setup>
import { ref } from 'vue'
import FacebookBgIcon from '../icons/social-icons/FacebookBgIcon.vue'
import FacebookIcon from '../icons/social-icons/FacebookIcon.vue'
import LinkedInBgIcon from '../icons/social-icons/LinkedInBgIcon.vue'
import LinkedInIcon from '../icons/social-icons/LinkedInIcon.vue'
import TwitterBgIcon from '../icons/social-icons/TwitterBgIcon.vue'
import TwitterIcon from '../icons/social-icons/TwitterIcon.vue'
import WhatsappBgIcon from '../icons/social-icons/WhatsappBgIcon.vue'
import WhatsappIcon from '../icons/social-icons/WhatsappIcon.vue'
defineProps({
  details: Object
})

const hoveredIcon = ref(null)
</script>

<template>
  <div>
    <div class="flex items-center px-4 py-2 md:py-4 md:pt-4 lg:px-8">
      <div class="text-lg font-semibold text-gray-title md:text-xl lg:py-0 lg:text-2xl py-1.5">
        <span class="font-hi"> {{ details.title }}</span>
      </div>
    </div>

    <div class="px-4 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-start">
        <div class="w-full shrink-0 md:w-2/5">
          <div class="aspect-[16/9] w-full">
            <div class="relative h-full w-full overflow-hidden rounded">
              <img
                class="h-full w-full object-cover"
                :src="`${details.thumbnail.domain}/${details.thumbnail.basePath}/${details.thumbnail.qualities[0]}/${details.thumbnail.key}`"
                alt=""
              />
            </div>
          </div>

          <div class="pt-4">
            <div class="flex flex-col items-center md:items-start">
              <div class="">
                <span>Share this series</span>
              </div>
              <div class="w-full px-8 md:px-0 md:mt-2 md:-ml-1.5 flex">
                <div class="flex gap-2 items-center">
                  <div class="flex w-full justify-center md:justify-start space-lg cursor-pointer">
                    <div
                      class="scale-100 px-1.5 hover:scale-125"
                      @mouseenter="hoveredIcon = 'facebook'"
                      @mouseleave="hoveredIcon = null"
                    >
                      <FacebookBgIcon v-if="hoveredIcon == 'facebook'"></FacebookBgIcon>
                      <FacebookIcon v-else></FacebookIcon>
                    </div>
                  </div>
                  <div class="flex w-full justify-center md:justify-start space-lg cursor-pointer">
                    <div
                      class="scale-75 px-1.5 hover:scale-100"
                      @mouseenter="hoveredIcon = 'twitter'"
                      @mouseleave="hoveredIcon = null"
                    >
                      <TwitterBgIcon v-if="hoveredIcon == 'twitter'"></TwitterBgIcon>
                      <TwitterIcon v-else></TwitterIcon>
                    </div>
                  </div>
                  <div class="flex w-full justify-center md:justify-start space-lg cursor-pointer">
                    <div
                      class="scale-75 px-1.5 hover:scale-100"
                      @mouseenter="hoveredIcon = 'whatsapp'"
                      @mouseleave="hoveredIcon = null"
                    >
                      <WhatsappBgIcon v-if="hoveredIcon == 'whatsapp'"></WhatsappBgIcon>
                      <WhatsappIcon v-else></WhatsappIcon>
                    </div>
                  </div>
                  <div class="flex w-full justify-center md:justify-start space-lg cursor-pointer">
                    <div
                      class="scale-75 px-1.5 hover:scale-100"
                      @mouseenter="hoveredIcon = 'linkedin'"
                      @mouseleave="hoveredIcon = null"
                    >
                      <LinkedInBgIcon v-if="hoveredIcon == 'linkedin'"></LinkedInBgIcon>
                      <LinkedInIcon v-else></LinkedInIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col self-stretch pt-4 text-sm md:pl-4 md:pt-0 lg:text-lg">
          <div class="text-lg font-medium text-gray-title lg:text-xl">
            <span class="font-hi">{{ details.subtitle }}</span>
          </div>
          <div class="text-justify text-base text-gray-subtitle tab:pr-4">
            <div class="">
              <span class="font-hi">{{ details.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
