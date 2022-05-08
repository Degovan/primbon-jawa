<template>
  <div>
    <Banner titleBanner="Terjemahan" subtitleBanner="Primbon / Terjemahan" />
    <div class="max-w-5xl mt-20 mx-auto p-5 box-border">
      <p class="text-gray-400">Pilih bahasa :</p>
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
        <div class="wrapper-translate flex gap-5">
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
            >{{ this.translategan }}</textarea
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
  import { getWeton } from "javanese-weton";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  const hijri = require("hijri-js");
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
      };
    },
    methods: {
      translateGan: function () {
        var textTerjemahan = terjemahan(this.typeLangJawa, this.translategan);
        this.hasiltranslate = textTerjemahan;
      },
    },
    mounted() {},
  };
</script>
