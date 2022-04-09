<template>
  <header
    class="w-full box-border top-0 lg:relative fixed z-40 header border-gray-600 border-b bg-black text-white"
  >
    <div class="md:container lg:max-w-5xl max-w-full box-border mx-auto">
      <div class="flex text-center w-full p-3 mx-auto">
        <div
          class="w-full flex-auto text-gray-400 lg:items-center lg:w-auto font-prozalibre font-medium text-xs"
        >
          <div class="mt-3 lg:block hidden">
            <router-link
              :to="item.link"
              class="ml-5 tracking-wide"
              v-for="item in menuLeft"
              :key="item.name"
              >{{ item.name }}</router-link
            >
          </div>
        </div>
        <div class="max-w-4xl flex-none font-bluunext items-center">
          <h1 class="text-3xl text-center text-primary">Primbon.</h1>
        </div>
        <div
          class="w-full flex-auto text-gray-400 lg:items-center lg:w-auto font-prozalibre font-medium text-xs"
        >
          <div class="mt-3 lg:inline-block hidden">
            <router-link
              :to="item.link"
              class="ml-5 tracking-wide"
              v-for="item in menuRight"
              :key="item.name"
              >{{ item.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        menuLeft: [
          {
            name: "HOME",
            link: "/",
          },
          {
            name: "KONSULTASI",
            link: "/",
          },
          {
            name: "KALENDER",
            link: "/",
          },
          {
            name: "WETON",
            link: "/",
          },
        ],
        menuRight: [
          {
            name: "TESTIMONI",
            link: "/",
          },
          {
            name: "RAMALAN",
            link: "/",
          },
          {
            name: "MISTERI",
            link: "/",
          },
          {
            name: "CONTACT",
            link: "/",
          },
        ],
      };
    },
  };
</script>
