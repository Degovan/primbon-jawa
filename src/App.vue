<template>
  <div class="app bg-black">
    <div>
      <transition name="fade" mode="out-in">
        <Header />
      </transition>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <div v-if="!$route.meta.hideNavigation">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  export default {
    components: {
      Header,
      Footer,
    },
  };
</script>
