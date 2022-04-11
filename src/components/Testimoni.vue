<template>
  <div class="mt-20 w-full">
    <h1 class="text-center font-bluunext text-4xl text-primary">
      Testimonials
    </h1>
    <div
      class="wrapper-swiper lg:p-0 p-10 max-w-5xl mx-auto lg:mt-10 mt-5 text-center"
    >
      <swiper
        ref="slideTestimonial"
        :slide-per-view="3"
        :space-between="20"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :navigation="{
          prevEl: '#prevTesti',
          nextEl: '#nextTesti',
        }"
        :modules="modules"
        :loop="true"
        :breakpoints="swiperTestimoniOptions.breakpoints"
      >
        <swiper-slide>
          <div
            class="card-testimonial bg-black w-full hover:border-primary transition-all border-secondary border h-96 p-5"
          >
            <h1 class="text-5xl text-primary font-prozalibre mt-4">''</h1>
            <p class="text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore neque quam, quisquam, voluptatum reprehenderit sequi a
              hic at autem optio quos aperiam? Quasi, asperiores exercitationem
              deleniti dolorem quisquam repellendus commodi.
            </p>
            <div class="profile-info mt-5">
              <img
                :src="imageAssets('image-40-copyright-min-90x90.jpg')"
                class="profile-image rounded-full mx-auto"
              />
              <h2 class="text-sm font-bluunext text-primary mt-5">Avery Mia</h2>
              <p class="text-gray-500 text-xs mt-1">Los Angeles</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="card-testimonial bg-black w-full hover:border-primary transition-all border-secondary border h-96 p-5"
          >
            <h1 class="text-5xl text-primary font-prozalibre mt-4">''</h1>
            <p class="text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore neque quam, quisquam, voluptatum reprehenderit sequi a
              hic at autem optio quos aperiam? Quasi, asperiores exercitationem
              deleniti dolorem quisquam repellendus commodi.
            </p>
            <div class="profile-info mt-5">
              <img
                :src="imageAssets('image-40-copyright-min-90x90.jpg')"
                class="profile-image rounded-full mx-auto"
              />
              <h2 class="text-sm font-bluunext text-primary mt-5">Avery Mia</h2>
              <p class="text-gray-500 text-xs mt-1">Los Angeles</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="card-testimonial bg-black w-full hover:border-primary transition-all border-secondary border h-96 p-5"
          >
            <h1 class="text-5xl text-primary font-prozalibre mt-4">''</h1>
            <p class="text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore neque quam, quisquam, voluptatum reprehenderit sequi a
              hic at autem optio quos aperiam? Quasi, asperiores exercitationem
              deleniti dolorem quisquam repellendus commodi.
            </p>
            <div class="profile-info mt-5">
              <img
                :src="imageAssets('image-40-copyright-min-90x90.jpg')"
                class="profile-image rounded-full mx-auto"
              />
              <h2 class="text-sm font-bluunext text-primary mt-5">Avery Mia</h2>
              <p class="text-gray-500 text-xs mt-1">Los Angeles</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <button
        id="prevTesti"
        class="lg:px-6 lg:py-3 uppercase px-4 py-3 text-xs mt-10 bg-black hover:bg-primary hover:text-black hover:border-primary border-secondary border text-white font-normal font-nunito"
      >
        prev
      </button>
      <button
        id="nextTesti"
        class="lg:px-6 lg:py-3 ml-5 uppercase px-4 py-3 text-xs mt-10 bg-black hover:bg-primary hover:text-black hover:border-primary border-secondary border text-white font-normal font-nunito"
      >
        next
      </button>
    </div>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import SwiperCore, { Autoplay } from "swiper/core";
  import { Pagination, Navigation } from "swiper";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  SwiperCore.use([Autoplay]);
  export default {
    name: "HomeView",

    components: {
      Swiper,
      SwiperSlide,
      Icon,
    },
    data() {
      return {
        swiperTestimoniOptions: {
          breakpoints: {
            540: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            900: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 3,
            },
          },
        },
      };
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };
</script>
