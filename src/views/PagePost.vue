<template>
  <div class="page-post">
    <div class="pages" v-if="this.page_type == 404">
      <div class="text-center w-full h-screen mt-0 bg-black">
        <br />
        <div class="mt-40">
          <h2 class="text-4xl text-primary mt-0 font-bluunext">
            Halaman Tidak Ditemukan!
          </h2>
          <p class="font-nunito text-gray-400 text-xs mt-10">
            Err request: 404 not found
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
    </div>

    <Banner :titleBanner="this.title" :subtitleBanner="this.page_type" />
    <div
      class="wrapper-card mt-5 p-4 lg:flex grid grid-cols-1 lg:gap-10 gap-5 lg:max-w-5xl max-w-full mx-auto box-border"
    >
      <div class="lg:flex-auto lg:w-auto w-full box-border">
        <div class="article border border-secondary">
          <div class="article-image" v-if="this.icon?.length > 0">
            <img
              :src="this.icon ?? ''"
              class="w-full text-white"
              alt="can't display this image"
            />
          </div>
          <div class="article-body p-5">
            <h2 class="text-primary text-sm font-nunito">
              Di post pada {{ this.createAt }}
            </h2>

            <h1 class="text-2xl font-bold font-bluunext text-white">
              {{ this.title }}
            </h1>
            <p
              class="text-white mt-5 font-nunito"
              v-html="this.descriptions"
            ></p>
          </div>
        </div>
      </div>
      <div class="lg:flex-none lg:w-80 w-full box-border">
        <div class="card border border-secondary p-5 h-96">
          <h2 class="font-bold font-bluunext text-lg text-primary">Iklan</h2>
        </div>
      </div>
    </div>
    <TestimoniView />
  </div>
</template>

<script>
  import ErrorPage from "@/components/neterror";
  import axios from "axios";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";

  export default {
    setup() {},
    data() {
      return {
        icon: "",
        page_type: "",
        page_types: "",
        title: "",
        subtitle: "",
        short_description: "",
        slug: "",
        descriptions: "",
        article: "",
        error: false,
        days: "",
        month: 0,
        years: "",
        masehi: "",
        hijriah: "",
        jawa: "",
        pasaran: "",
        description: "",
        neptu: "",
        warsa: "",
        showWeton: false,
      };
    },
    components: {
      TestimoniView,
      Banner,
      ErrorPage,
    },
    mounted() {
      try {
        axios
          .get(
            `${this.$baseURL}pages/${this.$route.params.page_type}/${this.$route.params.slug}`
          )
          .then((response) => {
            if (response.data.data == null) {
              this.page_type = 404;
              this.icon = "";
              document.title = "Halaman tidak ditemukan 404";
            } else {
              var query = response.data.data;
              this.icon =
                ` https://backend.primbonjawa.net/favicon/` + query.icon ?? "";
              this.page_type =
                "Home / Halaman /" + query.page_type + "/" + query.slug;
              this.page_type = query.page_type ?? 404;
              this.title = query.title;
              this.subtitle = query.subtitle;
              this.slug = query.slug;
              this.descriptions = query.description;
              document.title = query.title + " - Halaman Primbon";
              document.description = query.short_description;
              var date = new Date(query.created_at);
              const favicon = document.getElementById("favicon");
              favicon.href = this.icon ?? "";

              this.createAt =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
              this.error = false;
            }
          })

          .catch((error) => {
            console.log(error);
            this.error = true;
          });
      } catch (e) {
        alert(e);
      }
    },
    methods: {
      func() {
        this.$router.push({ path: "/" });
      },
    },
  };
</script>

<style></style>
