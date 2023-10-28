<script setup>
import { onMounted, ref } from 'vue'
import BreadCrumb from '../components/common/BreadCrumb.vue'
import CourseSeries from '../services/CoursesServices'
import HeroSection from '../components/courses-page/HeroSection.vue'

const courseData = ref(null)

async function getCourseData() {
  try {
    const data = await CourseSeries.getCourseSeries()
    courseData.value = data.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getCourseData()
})
</script>

<template>
  <main>
    <BreadCrumb></BreadCrumb>
    <HeroSection v-if="courseData" :details="courseData?.details"></HeroSection>
  </main>
</template>
