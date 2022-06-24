<template>
  <div class="text-center w-full h-screen mt-0 bg-black">
    <br />
    <div class="mt-40">
      <h2 class="text-4xl text-primary mt-0 font-bluunext">
        Opps!, endpoint cannot be reach
      </h2>
      <p class="font-nunito text-gray-400 text-xs mt-10">
        Err response: network to server error
      </p>
      <button
        @click="func"
        class="lg:px-6 lg:py-3 uppercase px-4 py-3 text-xs mt-10 bg-black hover:bg-primary hover:text-black hover:border-primary border-secondary border text-white font-normal font-nunito"
      >
        Pergi ke Home
      </button>
      <p class="font-nunito text-gray-400 text-xs mt-10">primbonjawa.net</p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      func() {
        this.$router.push({ path: "/" });
      },
    },
  };
</script>
