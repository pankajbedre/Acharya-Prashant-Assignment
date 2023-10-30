<script setup>
import { ref, onMounted } from 'vue'
import DownArrowIcon from '../icons/DownArrowIcon.vue'
import FaqsServices from '../../services/FaqServices'

const faqs = ref(null)
const openedQuestionIndex = ref(null)

async function getFaqsData() {
  try {
    const data = await FaqsServices.getFaqs()
    faqs.value = data.data
    console.log(faqs.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getFaqsData()
})
</script>
<template>
  <div class="bg-gradient-to-b from-slate-50 px-4 py-16 md:px-4 lg:px-20">
    <div class="md:flex">
      <div class="pb-10 md:w-1/3 md:pb-0">
        <div class="text-lg font-semibold text-gray-title">
          <span class="font-en">FAQs</span>
        </div>
        <div class="pt-1">
          <span class="font-en">
            <p>Can’t find the answer you’re looking for? Reach out to our</p>
            <a class="text-brand-700" href=""> Support </a>
            team
          </span>
        </div>
      </div>
      <div class="w-full md:pl-24">
        <div>
          <div v-for="(faq, index) in faqs" :key="index">
            <div
              class="flex text-gray-subtitle font-semibold items-center justify-between md:cursor-pointer"
              @click="
                openedQuestionIndex !== index
                  ? (openedQuestionIndex = index)
                  : (openedQuestionIndex = null)
              "
            >
              <span class="font-hi">{{ faq.question }}</span>
              <DownArrowIcon
                class="transition-all"
                :class="{ 'rotate-180': openedQuestionIndex == index }"
              ></DownArrowIcon>
            </div>
            <div
              class="transition-all max-h-0 overflow-hidden text-gray-subtitle"
              :class="{
                'py-2': openedQuestionIndex == index,
                'pr-3': openedQuestionIndex == index
              }"
              :style="{ 'max-height': openedQuestionIndex == index ? '100px' : 0 }"
            >
              <p class="font-hi" v-html="faq.answer"></p>
            </div>
            <div
              class="h-[0.5px] bg-gray-separator w-full my-4"
              v-if="index < faqs.length - 1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
