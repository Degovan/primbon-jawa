<template>
  <div class="w-full text-center box-border border-b border-secondary">
    <div class="lg:mt-20 mt-28 left-0 right-0 absolute z-20">
      <h2 class="lg:text-5xl text-3xl font-bluunext text-white">
        {{ titleBanner }}
      </h2>
      <p
        class="text-center lg:text-lg text-sm font-bluunext text-gray-400 mt-5"
      >
        {{ subtitleBanner }}
      </p>
    </div>
    <img
      :src="backgroundAssets(this.img)"
      class="w-full filter grayscale brightness-50 object-cover object-bottom h-64"
    />
  </div>
</template>

<script>
  export default {
    props: {
      titleBanner: String,
      subtitleBanner: String,
      image: String,
    },
    data(){
      return{
        img: this.image,
      }
    }
  };
</script>
