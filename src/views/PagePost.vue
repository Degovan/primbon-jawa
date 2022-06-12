<template>
  <div class="page-post">
    <Banner :titleBanner="this.title" :subtitleBanner="this.page_type" />
    <div class="wrapper-card mt-5 flex gap-10 max-w-5xl mx-auto">
      <div class="flex-auto">
        <div class="article border border-secondary">
          <div class="article-image">
            <img
              :src="imageAssets('image-45-copyright-min-800x508.jpg')"
              class="w-full"
            />
          </div>
          <div class="article-body p-5">
            <h2 class="text-primary text-lg font-bluunext">24 Apr 2022</h2>
            <article class="space-y-4 mt-5">
              <h1 class="text-2xl font-bold font-bluunext text-white">
                {{ this.title }}
              </h1>
              <p>{{ this.description }}</p>
            </article>
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
            this.icon = query.icon;
            this.page_type =
              "Home / Halaman /" + query.page_type + "/" + query.slug;
            this.title = query.title;
            this.subtitle = query.subtitle;
            this.slug = query.slug;
            this.description = query.description;
            document.title = query.title + " - Halaman Primbon";
            document.description = query.short_description;
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
