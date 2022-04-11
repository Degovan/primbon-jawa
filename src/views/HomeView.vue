<template>
  <div>
    <div class="home bg-black h-auto text-white">
      <div class="swiper-box-1 border-b border-secondary lg:mt-0 mt-10">
        <div
          class="navigation-slider lg:block hidden absolute w-full box-border mt-60 z-30 mr-auto ml-auto mx-auto"
        >
          <button
            class="slidePrev-btn float-left ml-40 text-2xl hover:text-black hover:border-black hover:bg-primary text-white border-secondary border bg-black py-3 px-3"
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
            class="slideNext-btn float-right mr-40 text-2xl hover:text-black hover:border-black hover:bg-primary text-white border-secondary border bg-black py-3 px-3"
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
          :modules="modules"
        >
          <swiper-slide>
            <div class="w-full lg:h-slider h-96 overflow-hidden slider-animate">
              <div
                class="w-full font-nunito absolute lg:p-0 p-3 z-10 ml-auto mr-auto left-0 right-0 top-1/4 text-center"
              >
                <h2
                  class="text-heading tracking-wide text-white font-bluunext lg:mt-5 -mt-5 lg:text-6xl text-4xl max-w-3xl mx-auto font-bold"
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
                  class="lg:px-6 lg:py-3 px-4 uppercase py-3 text-xs mt-10 bg-black hover:bg-primary hover:text-black hover:border-primary border-secondary border text-white font-normal font-nunito"
                >
                  Baca selangkapnya
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
                class="w-full font-nunito absolute lg:p-0 p-3 z-10 ml-auto mr-auto left-0 right-0 top-1/4 text-center"
              >
                <h2
                  class="text-heading tracking-wide text-white font-bluunext lg:mt-5 -mt-5 lg:text-6xl text-4xl max-w-3xl mx-auto font-bold"
                >
                  Konsultasi <b class="text-primary">Primbon Jawa</b> untuk
                  berbagai keperluan.
                </h2>
                <p
                  class="text-paragraph max-w-2xl mx-auto mt-4 text-xs font-nunito font-normal text-gray-300"
                >
                  Sejak jaman dahulu leluhur kita percaya bahwa hari dimana
                  seorang anak dilahirkan akan membawa pengaruh pada watak,
                  karakter, dan jalan hidup anak tersebut.
                </p>
                <button
                  class="lg:px-6 lg:py-3 uppercase px-4 py-3 text-xs mt-10 bg-black hover:bg-primary hover:text-black hover:border-primary border-secondary border text-white font-normal font-nunito"
                >
                  Baca selangkapnya
                </button>
              </div>
              <img
                :src="
                  backgroundAssets('clouds-moonlight-wallpaper-preview.jpg')
                "
                class="w-full filter-brightness lg:h-screen object-cover h-96 image-zoom"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div
        class="box-v2 w-full lg:flex table box-border border-b border-secondary"
      >
        <div
          class="flex-auto table-footer-group w-full border-b border-r border-secondary"
        >
          <img
            :src="imageAssets('istockphoto-1341819113-612x612.jpg')"
            class="w-full filter grayscale"
          />
        </div>
        <div class="flex-auto w-full p-5 table-header-group">
          <div
            class="container mx-auto lg:max-w-lg max-w-full box-border p-9 lg:mt-28 mt-0"
          >
            <div class="text-xl w-full text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#FFC367"
                  d="M38.2 34.6L64 32l-25.8-2.6l16.4-20l-20 16.4L32 0l-2.6 25.8l-20-16.4l16.4 20L0 32l25.8 2.6l-16.4 20l20-16.4L32 64l2.6-25.8l20 16.4z"
                />
              </svg>
            </div>
            <h1
              class="text-4xl max-w-sm font-bluunext mt-5 text-primary tracking-wide"
            >
              Apa yang dimaksud weton jawa?
            </h1>
            <p class="font-nunito max-w-sm text-sm text-gray-400 mt-5">
              Weton adalah hari kelahiran menurut penanggalan Jawa yang biasa
              digunakan sebagai ramalan baik untuk mengetahui kecocokan
              pasangan, menentukan karakter, rezeki, jodoh, dan kesuksesan
              seseorang.
            </p>
            <router-link to="/weton">
              <button
                class="lg:px-6 lg:py-3 uppercase px-4 py-3 text-xs mt-10 bg-black hover:bg-primary hover:text-black hover:border-primary border-secondary border text-white font-normal font-nunito"
              >
                Hitung Weton mu
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="mt-20 w-full p-10"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <h1
          class="text-center font-bluunext max-w-xl mx-auto text-4xl text-primary"
        >
          Orang lain juga mengunjungi halaman ini
        </h1>
        <div
          class="wrapper grid grid-cols-1 gap-5 mt-10 lg:max-w-5xl mx-auto max-w-full container"
        >
          <div
            class="card lg:flex block w-full gap-5 p-3 border-b border-secondary"
          >
            <div class="flex-auto border border-secondary">
              <img
                :src="imageAssets('image-45-copyright-min-800x508.jpg')"
                class="lg:w-64 w-full"
              />
            </div>
            <div class="flex-auto w-full lg:mt-0 mt-5">
              <h3 class="text-sm text-primary font-nunito font-medium">
                01 Apr 22
              </h3>
              <h2 class="text-3xl mt-2 font-bluunext">Ramalan Jodoh</h2>
              <p class="mt-3 font-nunito text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nemo ut ex illum maxime accusantium harum dolore soluta nisi
                omnis ea dolores voluptatibus dicta, cum praesentium ratione
                laboriosam iusto ad!
              </p>
            </div>
          </div>
          <div
            class="card lg:flex block w-full gap-5 p-3 border-b border-secondary"
          >
            <div class="flex-auto border border-secondary">
              <img
                :src="imageAssets('image-16-copyright-min-800x508.jpg')"
                class="lg:w-64 w-full"
              />
            </div>
            <div class="flex-auto w-full lg:mt-0 mt-5">
              <h3 class="text-sm text-primary font-nunito font-medium">
                10 Apr 22
              </h3>
              <h2 class="text-3xl mt-2 font-bluunext">Perhitungan Selametan</h2>
              <p class="mt-3 font-nunito text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nemo ut ex illum maxime accusantium harum dolore soluta nisi
                omnis ea dolores voluptatibus dicta, cum praesentium ratione
                laboriosam iusto ad!
              </p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button
            class="lg:px-6 lg:py-3 uppercase px-4 py-3 text-xs mt-10 bg-primary text-black text-center font-normal font-nunito"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>

      <!-- Testimoni -->
      <div
        class=""
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <TestimoniView />
      </div>
    </div>
  </div>
</template>

<script>
  import TestimoniView from "@/components/Testimoni";
  import AOS from "aos";
  // Import Swiper Vue.js components
  import { Icon } from "@iconify/vue";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
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
      TestimoniView,
      Icon,
    },
    data() {
      return {
        swiperBannerOptions: {
          540: {
            pagination: true,
          },

          640: {
            pagination: true,
          },

          768: {
            pagination: true,
          },

          900: {
            pagination: false,
          },

          1024: {
            pagination: false,
          },
        },
      };
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
    mounted() {
      AOS.init();
    },
  };
</script>
