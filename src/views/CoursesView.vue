<script setup>
import { onMounted, ref } from 'vue'
import BreadCrumb from '../components/common/BreadCrumb.vue'
import CourseSeries from '../services/CoursesServices'
import HeroSection from '../components/courses-page/HeroSection.vue'
import VideoSeriesSection from '../components/courses-page/VideoSeriesSection.vue'
import RelatedCourses from '../components/courses-page/RelatedCourses.vue'
import FaqSection from '../components/common/FaqSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

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
    <VideoSeriesSection :courses="courseData?.courses"></VideoSeriesSection>
    <RelatedCourses :relatedContent="courseData?.relatedContent"></RelatedCourses>
    <FaqSection></FaqSection>
    <FooterSection></FooterSection>
  </main>
</template>
