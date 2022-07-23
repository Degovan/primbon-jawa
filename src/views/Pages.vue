<template>
  <div class="page">
    <div class="page-error" v-if="this.error == true">
      <ErrorPage />
    </div>
    <div class="page-show" v-else>
      <Banner
        titleBanner="Semua Halaman"
        subtitleBanner="Home / Semua Halaman"
        image="night-sky-wallpaper-thumb.jpg"
      />
      <div class="p-10">
        <div class="container mx-auto max-w-5xl">
          <div
            class="wrapper grid grid-cols-1 gap-5 mt-10 lg:max-w-5xl mx-auto max-w-full container"
          >
            <div
              v-if="this.pageList.length > 0"
              class="card lg:flex block w-full gap-5 p-3 border-b border-secondary"
              v-for="item in pageList[page - 1]"
              :key="item.id"
            >
              <div class="flex-auto border border-secondary">
                <img
                  :src="imageAssets('image-16-copyright-min-800x508.jpg')"
                  class="lg:w-64 w-full"
                />
              </div>
              <div class="flex-auto w-full lg:mt-0 mt-5">
                <h3 class="text-sm text-primary font-nunito font-medium">
                  {{ item.page_type }}
                </h3>
                <a
                  :href="
                    $router.resolve({
                      path: `/${item.page_type}/${item.slug}`,
                    }).href
                  "
                >
                  <h2 class="text-3xl mt-2 font-bluunext text-white">
                    {{ item.title }}
                  </h2>
                </a>
                <p
                  class="mt-3 font-nunito text-gray-400"
                  v-if="item.description.length < 200"
                  v-html="item.description"
                ></p>
                <p
                  class="mt-3 font-nunito text-gray-400"
                  v-if="item.description.length >= 200"
                  v-html="item.description.substring(0, 200) + '...'"
                ></p>
              </div>
            </div>
            <div class="loading font-nunito text-gray-400" v-else>
              <p>Memuat...</p>
            </div>
            <div class="mt-5">
              <pagination
                :total-pages="totalPages"
                :total="total"
                :per-page="perPage"
                :current-page="currentPage"
                :has-more-pages="hasMorePages"
                @pagechanged="showMore"
              >
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ErrorPage from "@/components/neterror";
  import Pagination from "@/components/Pagination";
  import axios from "axios";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  export default {
    data() {
      return {
        searchSlug: "",
        pageList: [],
        page: 1,
        totalPages: 4,
        total: 40,
        perPage: 4,
        currentPage: 1,
        hasMorePages: true,
        error: false,
      };
    },
    components: {
      TestimoniView,
      Banner,
      Pagination,
      ErrorPage,
    },
    methods: {
      showMore(page) {
        this.page = page;
        this.currentPage = page;
      },
      chunk(arr, size) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
          arr.slice(i * size, i * size + size)
        );
      },
    },
    async mounted() {
      try {
        axios
          .get(`${this.$baseURL}pages`)
          .then((response) => {
            this.pageList = this.chunk(response.data.data, this.perPage);
            this.totalPages = this.pageList.length;
            this.error = false;
          })
          .catch((error) => {
            this.error = true;
          });
      } catch (e) {
        alert(e);
      }
    },
  };
</script>

<style></style>
