<template>
  <div>
    <Banner
      :titleBanner="this.title"
      :subtitleBanner="this.page_type"
      image="night-sky-wallpaper-thumb.jpg"
    />
    <div class="max-w-5xl mt-20 mx-auto p-5 box-border">
      <h2 class="text-2xl text-primary font-bluunext">
        Terjemahan Indonesia ke Jawa
      </h2>
      <p class="text-sm text-gray-300" v-html="this.descriptions"></p>

      <p class="text-gray-400 mt-5">Pilih bahasa :</p>
      <br />
      <form action="" name="translate">
        <select
          name=""
          id=""
          v-model="typeLangJawa"
          class="w-full p-2 bg-black border border-secondary text-gray-400 text-sm"
        >
          <option value="jawakeindonesia" selected>Jawa ke indonesia</option>
          <option value="indonesiakejawa">indonesia ke jawa (Ngoko)</option>
          <option value="1">indonesia ke jawa (Krama Alus)</option>
          <option value="4">indonesia ke jawa (Krama Lugu)</option>
        </select>
        <br /><br />
        <div class="wrapper-translate lg:flex grid grid-cols-1 gap-5">
          <textarea
            name=""
            id="kotakkalimat"
            v-model="translategan"
            @keyup="translateGan"
            class="w-full p-4 border bg-black border-secondary h-96 resize-none text-gray-400 outline-none"
            placeholder="Masukan kalimat :"
          ></textarea>
          <textarea
            name=""
            id="kotakkalimat"
            class="w-full p-4 border bg-black border-secondary h-96 resize-none text-gray-400 outline-none"
            placeholder="Terjemahannya.."
            readonly
            >{{ this.hasiltranslate }}</textarea
          >
        </div>
      </form>
    </div>
    <div class="">
      <TestimoniView />
    </div>
  </div>
</template>

<script>
  const terjemahan = require("../helper/translategan.js");
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  import axios from "axios";
  export default {
    components: {
      Banner,
      TestimoniView,
    },
    data() {
      return {
        translategan: "",
        typeLangJawa: "jawakeindonesia",
        hasiltranslate: "",
        title: "",
        page_type: "",
        subtitle: "",
        slug: "",
        descriptions: "",
      };
    },
    methods: {
      translateGan: function () {
        var textTerjemahan = terjemahan(this.typeLangJawa, this.translategan);
        this.hasiltranslate = textTerjemahan;
      },
    },
    mounted() {
      try {
        axios
          .get(`${this.$baseURL}pages${this.$route.fullPath}`)
          .then((response) => {
            var query = response.data.data;
            this.icon =
              ` https://backend.primbonjawa.net/favicon/` + query.icon ?? "";
            this.page_type = "Halaman / " + query.page_type;
            this.title = query.title;
            this.subtitle = query.subtitle;
            this.slug = query.slug;
            this.descriptions = query.description;
            document.title = query.title + " - Halaman Primbon";
            document.description = query.short_description;
          })

          .catch((error) => {
            console.log(error);
            this.error = true;
          });
      } catch (e) {
        alert(e);
      }
    },
  };
</script>
