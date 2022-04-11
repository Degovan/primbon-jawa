<template>
  <div>
    <Banner
      titleBanner="Cek Ramalan Weton Mu"
      subtitleBanner="Primbon / Weton Jawa"
    />
    <div
      class="max-w-5xl mt-20 mx-auto grid lg:grid-cols-2 grid-cols-1 p-5 gap-4 box-border"
    >
      <div class="bg-black row-span-1 w-full border p-10 border-secondary">
        <h2 class="text-2xl text-primary font-bluunext">
          Kalkulator Weton Jawa
        </h2>
        <p class="text-sm text-gray-300">
          Isi tanggal lahir kamu dibawah ini mengecek ramalan weton mu.
        </p>
        <div class="w-full mt-5 box-border">
          <div class="input-box mt-5">
            <input
              type=""
              id="days"
              placeholder="Tanggal"
              class="w-full p-2 bg-black border border-secondary text-white text-sm"
            />
          </div>
          <div class="input-box mt-5">
            <select
              id="month"
              class="w-full p-2 bg-black border border-secondary text-white text-sm"
            >
              <option value="Januari">Januari</option>
              <option value="Februari">Februari</option>
              <option value="Maret">Maret</option>
              <option value="April">April</option>
              <option value="Mei">Mei</option>
              <option value="Juni">Juni</option>
              <option value="Juli">Juli</option>
              <option value="Agustus">Agustus</option>
              <option value="September">September</option>
              <option value="November">November</option>
              <option value="Desember">Desember</option>
            </select>
          </div>
          <div class="input-box mt-5">
            <input
              type=""
              id="years"
              placeholder="Tahun"
              class="w-full p-2 bg-black border border-secondary text-white text-sm"
            />
          </div>
          <button
            class="lg:px-6 lg:py-3 w-full uppercase px-4 py-3 text-xs mt-5 font-bold bg-primary text-black text-center font-nunito"
          >
            Check
          </button>
        </div>
      </div>
      <div class="bg-black col-span-1 w-full border p-10 border-secondary">
        <h2 class="text-2xl text-primary font-bluunext">
          Apa itu ramalan weton ?
        </h2>
        <p class="mt-5 text-sm text-gray-300">
          Dalam budaya Jawa, weton adalah hitungan hari lahir seseorang yang
          digunakan sebagai patokan untuk menunjuk ramalan tertentu. Cara
          menghitung weton bisa dilihat berdasarkan hari dan pasaran, ada juga
          yang dihitung berdasarkan bulan tahun kelahiran.
        </p>
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
</template>

<script>
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  export default {
    components: {
      Banner,
      TestimoniView,
    },
  };
</script>
