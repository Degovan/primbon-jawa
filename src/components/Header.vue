<template>
  <header
    class="w-full box-border top-0 lg:relative fixed z-30 header border-secondary border-b bg-black text-white"
  >
    <div class="md:container lg:max-w-5xl max-w-full box-border mx-auto">
      <div class="flex text-center w-full justify-between p-3 mx-auto">
        <div
          class="w-full lg:block hidden flex-auto text-gray-400 lg:items-center lg:w-auto font-prozalibre font-medium text-xs"
        >
          <div class="mt-3">
            <router-link
              :to="item.link"
              class="ml-5 tracking-wide hover:text-white"
              v-for="item in menuLeft"
              :key="item.name"
              >{{ item.name }}</router-link
            >
          </div>
        </div>
        <div
          class="lg:max-w-2xl max-w-full box-border lg:flex-none flex-auto font-bluunext items-center"
        >
          <h1 class="lg:text-3xl text-xl lg:text-center text-left text-primary">
            Primbon.
          </h1>
        </div>
        <div
          class="w-full lg:block hidden flex-auto text-gray-400 lg:items-center lg:w-auto font-prozalibre font-medium text-xs"
        >
          <div class="mt-3 lg:inline-block hidden">
            <router-link
              :to="item.link"
              class="tracking-wide hover:text-white"
              :class="{
                'ml-5': item.right,
                'ml-0': !item.right,
              }"
              v-for="item in menuRight"
              :key="item.name"
              >{{ item.name }}</router-link
            >
          </div>
        </div>
        <div class="lg:hidden">
          <button
            @click="openNav"
            class="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div
        class="mobile-menu top-0 z-40 lg:hidden block bg-mobilenav w-full h-screen fixed box-border"
        v-show="toggleNav"
      >
        <button class="float-right mr-4 p-3 mt-2 text-2xl" @click="closeNav">
          <Icon icon="la:times" />
        </button>
        <h2 class="text-primary text-center text-3xl mt-10 font-bluunext">
          Primbon.
        </h2>
        <div
          class="mt-5 container max-w-md mx-auto grid font-bold grid-cols-1 text-gray-400 gap-2 font-bluunext text-lg uppercase"
        >
          <router-link
            :to="item.link"
            class="ml-5 tracking-wide hover:text-black p-2 hover:bg-primary"
            v-for="item in menuLeft"
            :key="item.name"
            >{{ item.name }}</router-link
          >
          <router-link
            :to="item.link"
            class="tracking-wide hover:text-black p-2 hover:bg-primary ml-5"
            v-for="item in menuRight"
            :key="item.name"
            >{{ item.name }}</router-link
          >
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    components: {
      Icon,
    },
    methods: {
      openNav: function () {
        this.toggleNav = true;
        document.body.style.overflow = "hidden";
      },
      closeNav: function () {
        this.toggleNav = false;
        document.body.style.overflow = "auto";
      },
    },
    data() {
      return {
        toggleNav: false,
        menuLeft: [
          {
            name: "HOME",
            link: "/",
          },
          {
            name: "KONSULTASI",
            link: "/",
            right: true,
          },
          {
            name: "WETON ",
            link: "/",
          },
        ],
        menuRight: [
          {
            name: "TESTIMONI",
            link: "/",
            right: false,
          },
          {
            name: "KALENDER",
            link: "/",
            right: true,
          },

          {
            name: "CONTACT",
            link: "/",
            right: true,
          },
        ],
      };
    },
  };
</script>
