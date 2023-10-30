<template>
  <header class="bg-brand-700 h-12 items-center">
    <nav class="flex h-full justify-between text-white">
      <div class="flex items-stretch pl-4 text-sm lg:pl-8">
        <a href="/" class="flex justify-center items-center mr-1">
          <img
            src="https://acharyaprashant.org/images/ic_favicon.png"
            class="rounded-full mr-2 h-8 w-8"
            alt=""
          />
        </a>
        <div class="hidden h-full flex-row items-stretch justify-center font-medium md:flex">
          <a
            id="main-website-nav-item-internal-home"
            href="/"
            class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
            ><div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">Home</span>
            </div></a
          >
          <div
            @click="showLiveSessionsDropdown = !showLiveSessionsDropdown"
            ref="showLiveSessionsDropdownRef"
            id="main-website-nav-item-in-place-live"
            class="relative text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew hover:bg-brand-600"
          >
            <div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">Live Sessions</span>
              <div class="pt-0.5 transition duration-500">
                <DropdownArrowIcon></DropdownArrowIcon>
              </div>
            </div>

            <Transition>
              <div
                @click.stop
                v-if="showLiveSessionsDropdown"
                class="absolute top-[50px] z-[999] flex flex-col overflow-hidden whitespace-nowrap rounded-lg bg-white bg-opacity-100 px-1.5 py-2 text-slate-800 shadow-lg lg:-left-5 xl:-left-6"
              >
                <div class="rounded-md p-2 hover:bg-brand-100">
                  <span class="font-en svelte-t3mcl">Bhagavad Gita</span>
                </div>
                <div class="rounded-md p-2 hover:bg-brand-100">
                  <span class="font-en svelte-t3mcl">Sant Sarita</span>
                </div>
                <div class="rounded-md p-2 hover:bg-brand-100">
                  <span class="font-en svelte-t3mcl">Ashtavakra Samhita</span>
                </div>
                <div class="rounded-md p-2 hover:bg-brand-100">
                  <span class="font-en svelte-t3mcl">Bodh Pratyusha</span>
                </div>
              </div>
            </Transition>
          </div>
          <a
            id="main-website-nav-item-internal-courses"
            href="/en/courses"
            class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew bg-brand-600"
            ><div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">Video Series</span>
            </div></a
          ><a
            id="main-website-nav-item-internal-books"
            href="/en/books"
            class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
            ><div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">AP Books</span>
            </div></a
          ><a
            id="main-website-nav-item-internal-articles"
            href="/en/articles"
            class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
            ><div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">AP Articles</span>
            </div></a
          >
          <div
            @click="showInviteDropdown = !showInviteDropdown"
            ref="showInviteDropdownRef"
            id="main-website-nav-item-in-place-invite"
            class="relative text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew hover:bg-brand-600"
          >
            <div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">Invite</span>
              <div class="pt-0.5 transition duration-500">
                <DropdownArrowIcon></DropdownArrowIcon>
              </div>
            </div>

            <Transition>
              <div
                @click.stop
                v-if="showInviteDropdown"
                class="absolute top-[50px] z-[999] flex flex-col overflow-hidden whitespace-nowrap rounded-lg bg-white bg-opacity-100 px-1.5 py-2 text-slate-800 shadow-lg lg:-left-5 xl:-left-6"
              >
                <div class="rounded-md p-2 hover:bg-brand-100">
                  <span class="font-en svelte-t3mcl">For a talk</span>
                </div>
                <div class="rounded-md p-2 hover:bg-brand-100">
                  <span class="font-en svelte-t3mcl">For a Interview</span>
                </div>
              </div>
            </Transition>
          </div>

          <a
            id="main-website-nav-item-internal-media"
            href="/en/media"
            class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
            ><div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">In Media</span>
            </div></a
          ><a
            id="main-website-nav-item-internal-contribute"
            href="/en/contribute"
            class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
            ><div class="relative flex items-center space-x-2">
              <span class="font-en svelte-t3mcl">Donate</span>
            </div></a
          >
        </div>
      </div>
      <div class="flex h-full content-center items-center justify-center lg:mt-[1px] lg:pr-8">
        <a class="rounded border-[1.5px] border-white px-2 text-sm md:hidden" href="/en/contribute"
          ><span class="font-en svelte-t3mcl">Donate</span></a
        >
        <div
          id="main-website-navbar-language-selector"
          class="ml-3 inline-flex cursor-pointer items-center px-2 md:px-0 md:px-1"
        >
          <div class="relative">
            <div
              class="flex inline-flex items-center space-x-1 py-2 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="21"
                viewBox="0 0 28 21"
                class="fill-current"
              >
                <path
                  d="M24.193 0c1.27 0 2.22.301 2.855.904.59.56.905 1.372.947 2.437l.005.25v13.817c0 1.19-.317 2.085-.952 2.688-.589.56-1.452.86-2.588.9l-.267.004H3.807c-1.252 0-2.2-.301-2.843-.904-.597-.56-.916-1.372-.96-2.437L0 17.409V3.591C0 2.402.321 1.507.964.904c.597-.56 1.457-.86 2.58-.9L3.806 0h20.386Zm.435 1.5H3.346c-.598 0-1.055.153-1.371.458-.282.271-.438.66-.47 1.166l-.005.195v14.375c0 .593.158 1.043.475 1.348.281.271.673.422 1.177.452l.194.006h21.282c.597 0 1.059-.153 1.384-.458.29-.271.45-.657.482-1.156l.006-.192V3.319c0-.602-.163-1.056-.488-1.361-.325-.305-.787-.458-1.384-.458ZM11.905 5.559v1.6H7.511v2.533h4.128v1.498H7.511v2.65h4.394v1.599h-6.32v-9.88h6.32Zm3.236 0 4.35 6.572h.065V5.559h1.812v9.88h-1.61L15.391 8.83h-.057v6.609h-1.812v-9.88h1.618Z"
                ></path>
              </svg>
              <div class="pt-0.5 transition duration-500">
                <DropdownArrowIcon></DropdownArrowIcon>
              </div>
            </div>
          </div>
        </div>
        <a
          id="main-website-navbar-contact-icon"
          class="ml-5 hidden text-white hover:cursor-pointer lg:block"
          href="/en/enquiry"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="h-5 w-5 fill-current"
          >
            <path
              d="M11.895 16c.708 0 1.314-.104 1.817-.313.503-.209.965-.548 1.388-1.017a1.27 1.27 0 0 0 .094-.103l.086-.103a2.93 2.93 0 0 0 .544-.81 1.98 1.98 0 0 0 .176-.785c0-.298-.086-.585-.257-.862-.171-.278-.44-.54-.806-.785l-2.382-1.665a2.048 2.048 0 0 0-1.17-.39c-.408-.003-.781.164-1.118.502l-.617.609c-.097.103-.193.159-.287.167a.49.49 0 0 1-.305-.09 8.1 8.1 0 0 1-.544-.416 18.5 18.5 0 0 1-1.332-1.205c-.206-.2-.405-.405-.596-.614a11.947 11.947 0 0 1-.527-.613 5.1 5.1 0 0 1-.394-.558.42.42 0 0 1-.095-.296.506.506 0 0 1 .163-.287l.609-.618c.343-.343.512-.719.51-1.128a1.985 1.985 0 0 0-.399-1.162L4.782 1.047C4.536.692 4.275.431 3.998.262A1.699 1.699 0 0 0 3.137 0C2.61-.01 2.08.223 1.543.704a.848.848 0 0 0-.108.09.648.648 0 0 1-.098.081c-.469.43-.809.897-1.02 1.403C.106 2.784 0 3.398 0 4.118c0 .784.153 1.612.458 2.484.306.872.762 1.76 1.367 2.664a18.027 18.027 0 0 0 2.237 2.685 18.605 18.605 0 0 0 2.674 2.217c.897.604 1.782 1.06 2.657 1.369.874.309 1.708.463 2.502.463Zm0-1.295c-.691.005-1.428-.146-2.211-.455a11.557 11.557 0 0 1-2.365-1.296 16.925 16.925 0 0 1-2.28-1.921 16.885 16.885 0 0 1-1.941-2.3A12.06 12.06 0 0 1 1.765 6.32c-.32-.798-.474-1.543-.462-2.235.005-.44.087-.847.244-1.218a2.64 2.64 0 0 1 .788-1.038c.026-.023.053-.046.082-.069.114-.097.233-.173.355-.227a.895.895 0 0 1 .365-.082c.251 0 .45.115.6.343l1.55 2.317a.663.663 0 0 1 .13.411c-.007.143-.075.28-.207.412l-.685.678c-.291.292-.437.6-.437.922 0 .323.1.625.3.905.223.31.515.67.878 1.081.363.412.707.78 1.033 1.107.228.223.48.462.754.716.274.255.546.496.814.725.269.229.503.418.703.566.28.2.581.3.904.3.323 0 .63-.148.921-.445l.677-.678c.132-.137.27-.208.416-.21a.69.69 0 0 1 .416.133L14.2 12.26c.12.08.206.171.257.274a.738.738 0 0 1 .078.335c0 .234-.103.474-.309.72a2.054 2.054 0 0 1-.137.155c-.269.314-.591.55-.968.708a3.384 3.384 0 0 1-1.226.253Z"
            ></path></svg
        ></a>

        <div
          id="main-website-right-menu-btn"
          class="mx-2 inline-flex cursor-pointer items-center px-2 py-2 text-white md:pl-0 md:pr-4 pl-1 md:pl-1 lg:pl-[11px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            class="fill-current"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.826"
              d="M1 1.609h20M1 8h20M1 14.391h20"
            ></path>
          </svg>
          <div class="hidden pl-2 lg:block">
            <span class="font-en svelte-t3mcl">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DropdownArrowIcon from '../icons/DropdownArrowIcon.vue'

const showLiveSessionsDropdown = ref(false)
const showLiveSessionsDropdownRef = ref(null)
const showInviteDropdown = ref(false)
const showInviteDropdownRef = ref(null)

onMounted(() => {
  document.addEventListener('click', closeDropdownOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnClickOutside)
})

function closeDropdownOnClickOutside(event) {
  if (
    !showLiveSessionsDropdownRef.value ||
    !showLiveSessionsDropdownRef.value.contains(event.target)
  ) {
    showLiveSessionsDropdown.value = null
  }
  if (!showInviteDropdownRef.value || !showInviteDropdownRef.value.contains(event.target)) {
    showInviteDropdown.value = null
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
