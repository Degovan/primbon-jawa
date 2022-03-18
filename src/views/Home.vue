<template>
  <div class="home">
    <div class="modal z-50 w-full h-screen fixed p-9" v-show="toggleSearch">
      <div
        class="modal-search bg-secondary border border-secondary mt-8 rounded-md lg:max-w-4xl mx-auto max-w-full"
      >
        <div class="modal-body">
          <div class="p-3 border-b-2 border-black">
            <input
              type="search"
              placeholder="Cari artikel atau lompat ke halaman..."
              v-model="searchQuery"
              class="w-full p-3 rounded-sm bg-transparent text-white"
            />
          </div>
          <div class="p-3">
            <span
              class="mt-10 text-white font-medium"
              v-for="result in resultQuery.slice(0, 5)"
              :key="result.id"
            >
              <router-link
                :to="result.link"
                class="block p-4 border-b-2 border-black rounded-sm font-normal hover:text-secondary hover:bg-primary text-gray-200"
                >{{ result.name }}</router-link
              >
            </span>
          </div>
          <div class="p-2"></div>
        </div>
      </div>
    </div>
    <div class="box-v1 bg-black p-8 text-center lg:h-custom h-auto">
      <div class="lg:container mx-auto lg:max-w-7xl max-w-full lg:mt-44 mt-28">
        <h1
          class="lg:text-6xl text-4xl stroke-1 stroke-current lg:max-w-5xl max-w-full mx-auto font-playfair font-medium text-gray-200"
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
            class="input-box border-1 border bg-secondary border-black transition-all focus-within:bg-gray-900 rounded-full flex"
          >
            <input
              type="text"
              @click="toggleSearch = !toggleSearch"
              class="bg-secondary rounded-full px-5 focus:bg-gray-900 transition-all font-nunito py-4 w-full outline-none lg:text-md text-sm text-gray-300 box-border bg-transparent"
              placeholder="Cek nomor hoki mu? siapa tau dapet jodoh..."
            />
            <button class="bg-white rounded-full px-5 py-3 border-2">
              <fa :icon="['fas', 'search']" />
            </button>
          </div>
        </div>
        <div
          class="bg-white z-10 border rounded-lg border-black box-border p-5 lg:max-w-3xl mx-auto max-w-full mt-20"
        >
          <h2 class="text-gray-900 text-left font-semibold mt-2 font-nunito">
            Masukan tanggal lahir mu
          </h2>
          <!-- <div class="lg:flex lg:flex-warp block lg:items-center gap-5">
            <input
              type="date"
              name=""
              class="border border-black font-nunito p-2 rounded-md bg-gray-300 w-full box-border mt-5"
              id=""
            />
            <button
              class="bg-black lg:px-10 lg:py-3 p-3 lg:w-auto w-full rounded-full mt-4 text-gray-200 font-medium"
            >
              Check
            </button>
          </div> -->
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5 text-left">
            <input
              type="number"
              class="border border-black font-nunito p-2 rounded-md text-gray-900 bg-gray-300"
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
              class="border border-black p-2 font-nunito text-gray-900 rounded-md bg-gray-300"
              placeholder="tahun"
            />
          </div>
          <button
            class="bg-black p-3 transform active:translate-y-1 transition-all w-full rounded-full mt-8 text-gray-200 font-medium"
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
        <div
          class="grid lg:grid-rows-4 lg:grid-flow-col grid-flow-row grid-cols-1 gap-4 mt-10"
        >
          <div
            class="card flex lg:max-w-md max-w-full lg:border-none border rounded-md"
            v-for="item in items"
            :key="item.id"
          >
            <div class="p-5 flex-none text-center lg:bg-transparent">
              <h1 class="text-primary font-bold text-2xl font-nunito">
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
    <div class="divide-y divide-gray-400 md:divide-y-8"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      searchQuery: null,
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
      toggleSearch: false,
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.items.filter((result) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => result.name.toLowerCase().includes(v));
        });
      } else {
        return this.items;
      }
    },
  },
  components: {
    // add components
  },
  mounted() {
    document.addEventListener("keyup", function (e) {
      if (e.keyCode === 27) {
        this.toggleSearch = false;
      } else {
        console.log("nothing happens");
      }
    });
  },
};
</script>
