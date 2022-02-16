<template>
  <div class="home">
    <div class="box-v1 bg-black p-8 text-center lg:h-custom h-auto">
      <div class="lg:container mx-auto lg:max-w-7xl max-w-full lg:mt-44 mt-28">
        <h1
          class="lg:text-6xl text-4xl lg:max-w-5xl max-w-full mx-auto font-playfair font-medium text-gray-200"
        >
          Konsultasi
          <span class="font-bold border-b-1 text-primary border-white"
            >Primbon Jawa</span
          >
          untuk berbagai keperluan.
        </h1>
        <p
          class="text-gray-200 lg:text-md text-sm mt-5 mx-auto lg:max-w-5xl max-w-full font-nunito"
        >
          PRIMBON adalah sistem ramalan yang umumnya didasarkan pada perhitungan
          WETON JAWA yang bertujuan untuk memprediksi dan mengantisipasi
          terhadap segala persoalan kehidupan manusia, mengenai perilaku, watak,
          jodoh, tata letak, arah, hari, dll. Salah satu warisan budaya leluhur,
          adat kebiasaan turun-temurun yang senantiasa dilestarikan oleh
          masyarakat kita.
        </p>
        <div class="wrap lg:max-w-3xl max-w-full mx-auto mt-10">
          <div
            class="input-box border-1 border border-white transition-all focus-within:bg-gray-900 rounded-full flex"
          >
            <input
              type="text"
              class="bg-black rounded-full px-5 focus:bg-gray-900 transition-all font-nunito py-4 w-full outline-none lg:text-md text-sm text-gray-300 box-border bg-transparent"
              placeholder="Cek nomor hoki mu? siapa tau dapet jodoh..."
            />
            <button
              class="bg-white active: rounded-full px-5 py-3 border-2 border"
            >
              <fa :icon="['fas', 'search']" />
            </button>
          </div>
        </div>
        <div
          class="bg-white z-10 border rounded-lg border-black box-border p-5 lg:max-w-3xl mx-auto max-w-full mt-14"
        >
          <h2 class="text-gray-900 text-left font-semibold mt-2 font-nunito">
            Masukan tanggal lahir mu
          </h2>
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5 text-left">
            <input
              type="number"
              class="border border-black font-nunito p-2 rounded-md bg-gray-300"
              placeholder="tanggal"
            />
            <select
              class="select-js border border-black font-nunito p-2 rounded-md bg-gray-300"
            >
              <option value="Januari">Januari</option>
              <option value="Januari">Februari</option>
              <option value="Januari">Maret</option>
              <option value="Januari">April</option>
              <option value="Januari">Mei</option>
              <option value="Januari">Juni</option>
              <option value="Januari">Juli</option>
              <option value="Januari">Agustus</option>
              <option value="Januari">September</option>
              <option value="Januari">November</option>
              <option value="Januari">Desember</option>
            </select>
            <input
              type="text"
              class="border border-black p-2 font-nunito rounded-md bg-gray-300"
              placeholder="tahun"
            />
          </div>
          <button
            class="bg-black p-4 rounded-full w-full mt-4 text-gray-200 font-medium"
          >
            Check
          </button>
          <p class="text-black mt-4 text-left lg:text-md font-nunito text-xs">
            Masukan tanggal lahir dan check kepribadianmu,
            <span class="text-gray-400">Horoskop jawa</span>
          </p>
        </div>
      </div>
    </div>
    <div class="box-v2 z-0 bg-white p-5 h-screen lg:mt-40 mt-5">
      <div class="lg:container mx-auto lg:max-w-7xl max-w-full">
        <h2 class="font-bold font-nunito text-lg text-black">
          Orang lain juga mengunjungi
        </h2>
        <div class="grid grid-rows-3 grid-flow-col gap-4 mt-10">
          <div
            class="card flex max-w-md rounded-md"
            v-for="item in items"
            :key="item.id"
          >
            <div class="p-5 flex-none text-center">
              <h1 class="text-gray-400 font-bold text-lg font-nunito">
                <span v-if="item.id > 9">
                  {{ item.id }}
                </span>
                <span v-else> 0{{ item.id }} </span>
              </h1>
            </div>
            <div class="p-5 w-full flex-initial">
              <router-link :to="item.link">
                <h1
                  class="text-gray-900 hover:text-primary font-bold text-lg font-nunito"
                >
                  {{ item.name }}
                </h1>
              </router-link>
              <p class="mt-3 text-gray-600 text-md">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 2,
          name: "Tafsir mimpi",
          link: "/",
          desc: "1176 Tafsir Mimpi lengkap, menafsirkan firasat dari arti mimpi anda",
        },
        {
          id: 3,
          name: "Ramalan Jodoh",
          link: "/",
          desc: "Kecocokan jodoh lengkap berdasarkan Kitab Betaljemur Adammakna",
        },
        {
          id: 4,
          name: "Ramalan Jodoh (Bali)",
          link: "/",
          desc: "Kecocokan jodoh berdasarkan wewaran Bali (Pal Sri Sedana)",
        },
        {
          id: 5,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 6,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 7,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 8,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 9,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 10,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 11,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
        {
          id: 12,
          name: "Nomor Hape Hoki",
          link: "/",
          desc: "Cek tingkat hoki nomor HP berdasarkan metode Bagua Shuzi",
        },
      ],
    };
  },
  components: {
    // add components
  },
};
</script>
