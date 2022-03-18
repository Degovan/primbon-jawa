<template>
  <div id="app-header">
    <header
      class="header bg-secondary border-b-2 border-black shadow-md px-3 py-3 w-full fixed z-40 top-0"
      id="header"
    >
      <div
        class="lg:container lg:max-w-7xl max-w-full mx-auto lg:flex lg:item-center block lg:justify-between flex-wrap"
      >
        <div class="title-head flex flex-wrap flex-shrink-0">
          <h1
            class="text-gray-300 font-normal lg:mt-1 mt-0 lg:text-2xl text-xl font-playfair"
          >
            Primbon <span class="font-bold text-primary">Jawa</span>
          </h1>
        </div>
        <!-- bar button -->
        <div class="block lg:hidden float-right lg:float-none -mt-7">
          <button
            @click="toggle = !toggle"
            class="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-secondary hover:bg-primary"
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
        <!-- dekstop menu -->
        <div
          class="dekstop-menu w-full hidden lg:items-center font-nunito lg:w-auto lg:flex lg:flex-grow text-gray-300 lg:ml-10 ml-0 text-md"
        >
          <span v-for="menu in menus" :key="menu.name">
            <router-link :to="menu.link" class="ml-5 hover:text-primary">{{
              menu.name
            }}</router-link>
          </span>
        </div>
        <!-- mobile menu -->
        <div
          class="mobile-menu w-full font-nunito lg:hidden block text-gray-300 lg:ml-10 ml-0 mt-10 text-md"
          v-show="toggle"
        >
          <span v-for="menu in menus" :key="menu.name" class="">
            <router-link
              :to="menu.link"
              class="ml-0 mt-5 block hover:text-secondary bg-transparent hover:bg-primary p-3"
              @click="hideMenu"
              >{{ menu.name }}</router-link
            >
          </span>
          <div>
            <button
              class="bg-primary lg:mt-0 mt-10 transform active:translate-y-1 hover:bg-primary border-none outline-non text-secondary font-nunito transition-all text-sm font-bold lg:px-6 lg:py-3 px-6 py-3 lg:rounded-full rounded-md"
            >
              Hubungi kami
              <span class="ml-2"><fa :icon="['far', 'comment-alt']" /></span>
            </button>
          </div>
        </div>
        <div class="lg:block hidden">
          <button
            class="bg-primary lg:mt-0 mt-10 transform active:translate-y-1 hover:bg-primary border-none outline-non text-secondary font-nunito transition-all text-sm font-bold lg:px-6 lg:py-3 px-6 py-3 lg:rounded-full rounded-md"
          >
            Hubungi kami
            <span class="ml-2"><fa :icon="['far', 'comment-alt']" /></span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "Beranda",
          link: "/",
        },
        {
          name: "Ramalan",
          link: "/ramalan",
        },
        {
          name: "Konsultasi",
          link: "/konsultasi",
        },
      ],
      toggle: false,
    };
  },
  methods: {
    hideMenu: function () {
      this.toggle = !this.toggle;
    },
  },
};
</script>
