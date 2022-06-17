<template>
  <div class="page-post">
    <Banner :titleBanner="this.title" :subtitleBanner="this.page_type" />
    <div class="wrapper-card mt-5 flex gap-10 max-w-5xl mx-auto">
      <div class="flex-auto">
        <div class="article border border-secondary">
          <div class="article-image" v-if="this.icon.length > 0">
            <img
              :src="this.icon"
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
              v-html="this.description"
            ></p>
          </div>
        </div>
      </div>
      <div class="flex-none w-80">
        <div class="card border border-secondary p-5 h-96">
          <h2 class="font-bold font-bluunext text-lg text-primary">Iklan</h2>
        </div>
      </div>
    </div>
    <TestimoniView />
  </div>
</template>

<script>
  import axios from "axios";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  export default {
    setup() {},
    data() {
      return {
        icon: "",
        page_type: "",
        title: "",
        subtitle: "",
        short_description: "",
        slug: "",
        description: "",
        article: "",
      };
    },
    components: {
      TestimoniView,
      Banner,
    },
    mounted() {
      try {
        axios
          .get(
            `${this.$baseURL}pages/${this.$route.params.pagetype}/${this.$route.params.slug}`
          )
          .then((response) => {
            var query = response.data.data;
            this.icon = "http://107.172.29.252:2022/favicon/" + query.icon;
            this.page_type =
              "Home / Halaman /" + query.page_type + "/" + query.slug;
            this.title = query.title;
            this.subtitle = query.subtitle;
            this.slug = query.slug;
            this.description = query.description;
            document.title = query.title + " - Halaman Primbon";
            document.description = query.short_description;
            var date = new Date(query.created_at);
            const favicon = document.getElementById("favicon");
            favicon.href = this.icon;
            this.createAt =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate();
          })
          .catch((error) => {
            console.log(error);
            confirm("Kesalahan pada server : " + error);
          });
      } catch (e) {
        alert(e);
      }
    },
  };
</script>

<style></style>
