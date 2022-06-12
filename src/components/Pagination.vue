<template>
  <div class="w-full">
    <ul class="pagination flex bg-black p-2 shadow-sm rounded">
      <li class="pagination-item flex">
        <span
          class="rounded-l rounded-sm border border-secondary px-3 py-2 cursor-not-allowed no-underline text-gray-600 h-10"
          v-if="isInFirstPage"
          >&laquo;</span
        >
        <a
          v-else
          @click.prevent="onClickFirstPage"
          class="rounded-l rounded-sm border border-secondary px-3 py-2 text-gray-600 hover:bg-primary no-underline"
          href="#"
          role="button"
          rel="prev"
        >
          &laquo;
        </a>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Go to previous page"
          class="rounded-sm border border-secondary px-3 py-3 hover:bg-primary text-gray-600 no-underline mx-2 text-sm"
          :class="{ 'cursor-not-allowed': isInFirstPage }"
        >
          Previous
        </button>
      </li>

      <li v-for="page in pages" class="pagination-item flex" :key="page.name">
        <span
          class="rounded-sm px-3 py-2 bg-primary no-underline text-black cursor-not-allowed mx-2"
          v-if="isPageActive(page.name)"
          >{{ page.name }}</span
        >
        <a
          class="rounded-sm border border-secondary px-3 py-2 hover:bg-primary text-gray-600 hover:text-black no-underline mx-2"
          href="#"
          v-else
          @click.prevent="onClickPage(page.name)"
          role="button"
          >{{ page.name }}</a
        >
      </li>

      <li class="pagination-item flex">
        <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          aria-label="Go to next page"
          class="rounded-sm border border-secondary px-3 py-2 hover:bg-primary text-gray-600 no-underline mx-2 text-sm"
          :class="{ 'cursor-not-allowed': isInLastPage }"
        >
          Next
        </button>

        <a
          class="rounded-r rounded-sm border border-secondary px-3 py-2 hover:bg-primary text-gray-600 no-underline"
          href="#"
          @click.prevent="onClickLastPage"
          rel="next"
          role="button"
          v-if="hasMorePages"
          >&raquo;</a
        >
        <span
          class="rounded-r rounded-sm border border-secondary px-3 py-2 hover:bg-primary text-gray-600 no-underline cursor-not-allowed"
          v-else
          >&raquo;</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3,
      },

      totalPages: {
        type: Number,
        required: true,
      },

      total: {
        type: Number,
        required: true,
      },

      perPage: {
        type: Number,
        required: true,
      },

      currentPage: {
        type: Number,
        required: true,
      },

      hasMorePages: {
        type: Boolean,
        required: true,
      },
    },

    computed: {
      startPage() {
        if (this.currentPage === 1) {
          return 1;
        }

        if (this.currentPage === this.totalPages) {
          return this.totalPages - this.maxVisibleButtons + 1;
        }

        return this.currentPage - 1;
      },
      endPage() {
        return Math.min(
          this.startPage + this.maxVisibleButtons - 1,
          this.totalPages
        );
      },
      pages() {
        const range = [];

        for (let i = this.startPage; i <= this.endPage; i += 1) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          });
        }

        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
    },

    methods: {
      onClickFirstPage() {
        this.$emit("pagechanged", 1);
      },
      onClickPreviousPage() {
        this.$emit("pagechanged", this.currentPage - 1);
      },
      onClickPage(page) {
        this.$emit("pagechanged", page);
      },
      onClickNextPage() {
        this.$emit("pagechanged", this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit("pagechanged", this.totalPages);
      },
      isPageActive(page) {
        return this.currentPage === page;
      },
    },
  };
</script>

<style></style>
