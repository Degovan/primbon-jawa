<template>
  <div class="home bg-black h-screen text-white">
    <div class="border-b border-gray-400 lg:mt-0 mt-10">
      <div
        class="navigation-slider lg:block hidden absolute w-full box-border mt-60 z-30 mr-auto ml-auto mx-auto"
      >
        <button
          class="slidePrev-btn float-left ml-40 text-2xl hover:text-black hover:border-black hover:bg-primary text-white border-gray-400 border bg-black py-3 px-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(180 12 12)">
              <path
                fill="currentColor"
                d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"
              />
            </g>
          </svg>
        </button>
        <button
          class="slideNext-btn float-right mr-40 text-2xl hover:text-black hover:border-black hover:bg-primary text-white border-gray-400 border bg-black py-3 px-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(180 12 12)">
              <path
                fill="currentColor"
                d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"
              />
            </g>
          </svg>
        </button>
      </div>
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :effect="'fade'"
        :loop="true"
        :observer="true"
        :navigation="{
          prevEl: '.slidePrev-btn',
          nextEl: '.slideNext-btn',
        }"
        :observeParents="true"
        :autoplay="{
          delay: 15000,
          disableOnInteraction: false,
        }"
        :pagination="{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="{
          540: {
            pagination: {
              dynamicBullets: true,
              dynamicMainBullets: 8,
              clickable: false,
            },
          },

          640: {
            pagination: {
              dynamicBullets: true,
              dynamicMainBullets: 8,
            },
          },

          768: {
            pagination: {
              dynamicBullets: false,
            },
          },

          900: {
            pagination: {
              dynamicBullets: false,
            },
          },

          1024: {
            pagination: {
              dynamicBullets: false,
            },
          },

          1280: {
            pagination: {
              dynamicBullets: false,
            },
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="w-full lg:h-slider h-96 overflow-hidden slider-animate">
            <div
              class="w-full font-prozalibre absolute lg:p-0 p-3 z-10 ml-auto mr-auto left-0 right-0 top-1/4 text-center"
            >
              <h2
                class="text-heading text-white font-bluunext lg:mt-5 -mt-5 lg:text-6xl text-4xl max-w-3xl mx-auto font-bold"
              >
                Apa itu <b class="text-primary">Primbon Jawa</b> ?
              </h2>
              <p
                class="text-paragraph max-w-2xl mx-auto mt-4 text-xs font-nunito font-normal text-gray-300"
              >
                Primbon adalah sistem ramalan yang umumnya didasarkan pada
                perhitungan Weton Jawa yang bertujuan untuk memprediksi dan
                mengantisipasi terhadap segala persoalan kehidupan manusia,
                mengenai perilaku, watak, jodoh, tata letak, arah, hari, dll.
              </p>
              <button
                class="lg:px-6 lg:py-3 px-4 uppercase py-3 text-xs mt-5 bg-black hover:bg-primary hover:text-black hover:border-primary border-gray-600 border text-white font-normal font-prozalibre"
              >
                Baca selangkapnya
              </button>
              <button
                class="ml-5 lg:px-6 lg:py-3 px-4 uppercase py-3 text-xs mt-5 bg-black hover:bg-primary hover:text-black hover:border-primary border-gray-600 border text-white font-normal font-prozalibre"
              >
                Hitung weton mu
              </button>
            </div>
            <img
              :src="backgroundAssets('Zodiac-Wallpaper-25.jpg')"
              class="w-full filter-brightness lg:h-screen object-cover h-96 image-zoom"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-full lg:h-slider h-96 mt-0 overflow-hidden slider-animate"
          >
            <div
              class="w-full font-prozalibre absolute lg:p-0 p-3 z-10 ml-auto mr-auto left-0 right-0 top-1/4 text-center"
            >
              <h2
                class="text-heading text-white font-bluunext lg:mt-5 -mt-5 lg:text-6xl text-4xl max-w-3xl mx-auto font-bold"
              >
                Konsultasi <b class="text-primary">Primbon Jawa</b> untuk
                berbagai keperluan.
              </h2>
              <p
                class="text-paragraph max-w-2xl mx-auto mt-4 text-xs font-nunito font-normal text-gray-300"
              >
                Sejak jaman dahulu leluhur kita percaya bahwa hari dimana
                seorang anak dilahirkan akan membawa pengaruh pada watak,
                karakter, dan jalan hidup anak tersebut. Begitu juga untuk
                hal-hal yang lain, seperti halnya hari dimana kita mengawali
                atau memulai suatu fase kehidupan yang baru, misalnya
                pernikahan, memulai suatu usaha yang baru, atau menempati rumah
                baru, juga akan membawa pengaruh pada masa depan atau jalan
                hidup orang yang bersangkutan..
              </p>
              <button
                class="lg:px-6 lg:py-3 uppercase px-4 py-3 text-xs mt-3 bg-black hover:bg-primary hover:text-black hover:border-primary border-gray-600 border text-white font-normal font-prozalibre"
              >
                Baca selangkapnya
              </button>
            </div>
            <img
              :src="backgroundAssets('clouds-moonlight-wallpaper-preview.jpg')"
              class="w-full filter-brightness lg:h-screen object-cover h-96 image-zoom"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  import SwiperCore, { Autoplay } from "swiper/core";
  import { EffectFade, Pagination, Navigation } from "swiper";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/effect-fade";

  SwiperCore.use([Autoplay]);
  export default {
    name: "HomeView",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {};
      const onSlideChange = () => {};
      return {
        onSwiper,
        onSlideChange,
        modules: [EffectFade, Pagination, Navigation],
      };
    },
  };
</script>
