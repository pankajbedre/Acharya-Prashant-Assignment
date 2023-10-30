<template>
  <header class="bg-white shadow h-12 items-center sticky top-0 z-[100]">
    <nav class="flex h-full justify-between text-white">
      <!-- left part -->
      <div class="flex items-stretch pl-4 text-sm lg:pl-8">
        <div class="flex items-center">
          <a href="/" class="flex justify-center items-center mr-1">
            <img
              src="https://acharyaprashant.org/images/ic_videoseries.png"
              class="h-6 mr-2"
              alt=""
            />
          </a>

          <div class="ml-6 hidden w-[36rem] flex-grow md:block">
            <div class="relative items-center rounded border border-gray-disabled shadow-sm">
              <div class="relative flex w-full flex-row">
                <button
                  class="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal"
                  @click="showTagsDropdown = !showTagsDropdown"
                >
                  <div class="text-xs font-medium text-gray-subtitle">
                    <span class="font-en">All</span>
                  </div>
                  <div class="px-3 text-slate-500">
                    <DropdownArrowIcon></DropdownArrowIcon>
                  </div>
                </button>
                <input
                  type="search"
                  class="h-9 w-full px-3 border-0 text-gray-title caret-brand-600 focus:ring-0 focus:outline-none"
                  placeholder=" Search for video series"
                />
                <button
                  id="main-website-search-courses-btn"
                  class="items-end rounded-r bg-brand-200 fill-current py-1 px-2 text-slate-700"
                >
                  <SearchIcon></SearchIcon>
                </button>
              </div>

              <Transition>
                <div class="absolute top-[50px] z-[999]" v-if="showTagsDropdown">
                  <div
                    class="z-[0] fixed inset-0 z-10 hidden bg-slate-700 opacity-60 md:block mt-10 w-screen min-h-screen"
                    @click="(showChild = null), (showTagsDropdown = false)"
                  ></div>
                  <div class="relative z-[1]">
                    <div
                      @click.stop
                      class="h-[60vh] flex flex-col overflow-hidden whitespace-nowrap rounded-lg  bg-white bg-opacity-100 py-2 text-slate-800 shadow-lg lg:-left-5 xl:-left-6"
                    >
                      <div
                        class="flex items-center justify-between cursor-pointer min-w-[270px] rounded-md p-3 hover:bg-slate-100 hover:text-brand-600 whitespace-nowrap text-sm lg:pr-4 lg:text-sm"
                      >
                        <span class="font-en svelte-t3mcl">All</span>
                      </div>
                      <div
                        class="flex items-center justify-between cursor-pointer min-w-[270px] rounded-md p-3 hover:bg-slate-100 hover:text-brand-600 whitespace-nowrap text-sm lg:pr-4 lg:text-sm"
                        v-for="(tag, index) in tags[0]"
                        :key="index"
                        @mouseenter="showChild = tag.tagId"
                      >
                        <span class="font-en svelte-t3mcl">{{ tag.name.english }}</span>
                        <RightArrowIcon
                          v-if="tag.hasChildren"
                          class="text-gray-500"
                        ></RightArrowIcon>
                      </div>
                    </div>

                    <transition>
                      <div
                        v-if="showChild"
                        @click.stop
                        class="z-[1] absolute top-0 left-[270px] h-[60vh] flex flex-col overflow-auto border-l-[1px] border-gray-600 whitespace-nowrap rounded-lg bg-white bg-opacity-100 py-2 text-slate-800"
                      >
                        <div
                          class="flex items-center justify-between cursor-pointer min-w-[270px] rounded-md p-3 hover:bg-slate-100 hover:text-brand-600 whitespace-nowrap text-sm lg:pr-4 lg:text-sm"
                          v-for="(tag, index) in tags[1].filter((t) => {
                            return t.parent == showChild
                          })"
                          :key="index"
                        >
                          <span class="font-en svelte-t3mcl">{{ tag.name.english }}</span>
                          <RightArrowIcon
                            v-if="tag.hasChildren"
                            class="text-gray-500"
                          ></RightArrowIcon>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <!-- right -->
      <div class="flex h-full content-center items-center justify-center space-x-4 pr-4 lg:pr-12">
        <div class="cursor-pointer md:hidden">
          <SearchIcon></SearchIcon>
        </div>
        <div class="whitespace-nowrap text-sm">
          <div
            class="cursor-pointer bg-brand-600 py-1 px-3 rounded-md text-center transition duration-150 btn-solid btn-sm hover:bg-brand-700"
          >
            <span class="font-en">Login</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import DropdownArrowIcon from '../icons/DropdownArrowIcon.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import TagServices from '../../services/TagsServices'
import { onMounted, ref } from 'vue'
import RightArrowIcon from '../icons/RightArrowIcon.vue'

const tags = ref(null)
const showTagsDropdown = ref(false)
const showChild = ref(null)

async function getTagsData() {
  try {
    const data = await TagServices.getTags()
    tags.value = data.data
    console.log(tags.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getTagsData()
})
</script>

<style></style>
