<template>
  <div id="app-header">
    <header
      class="header bg-secondary px-3 py-3 w-full fixed z-40 border-b-2 border-white"
      id="header"
    >
      <div
        class="lg:container lg:max-w-7xl max-w-full mx-auto flex item-center justify-between flex-wrap"
      >
        <div class="title-head flex flex-wrap flex-shrink-0">
          <h1
            class="text-gray-300 font-normal mt-1 lg:text-2xl text-xl font-playfair"
          >
            Primbon <span class="font-bold text-primary">Jawa</span>
          </h1>
        </div>
        <div
          class="w-full hidden lg:items-center font-nunito lg:w-auto lg:flex lg:flex-grow text-gray-300 lg:ml-10 ml-0 text-md"
        >
          <router-link to="/" class="ml-5 hover:text-primary"
            >Beranda</router-link
          >
          <router-link to="/" class="ml-5 hover:text-primary"
            >Ramalan</router-link
          >
          <router-link to="/" class="ml-5 hover:text-primary"
            >Konsultasi</router-link
          >
        </div>
        <div>
          <button
            class="bg-black hover:bg-white hover:text-black font-nunito transition-all text-sm font-medium border-1 border border-gray-300 lg:px-6 lg:p-3 px-4 py-2 rounded-full text-gray-300"
          >
            Hubungi kami
            <span class="ml-2"><fa :icon="['far', 'comment-alt']" /></span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>
