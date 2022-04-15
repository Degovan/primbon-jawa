<template>
  <div>
    <Banner titleBanner="Kalender Jawa" subtitleBanner="Primbon / Kalender" />
    <div
      class="max-w-5xl mt-20 mx-auto grid lg:grid-cols-2 grid-cols-1 p-5 gap-4 box-border"
    >
      <div class="calendar">
        <Calendar
          :attributes="attr"
          color="orange"
          is-dark
          @dayclick="onDayClick"
        />
      </div>
      <div class="sign"></div>
    </div>
    <!-- Testimoni -->
    <div class="">
      <TestimoniView />
    </div>
  </div>
</template>

<script>
  import { Calendar, DatePicker } from "v-calendar";
  import "v-calendar/dist/style.css";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  export default {
    data() {
      return {
        range: {
          start: new Date(2020, 0, 1),
          end: new Date(2020, 0, 5),
        },
        days: [],
        attr: {
          key: "today",
          date: new Date(),
        },
      };
    },

    components: {
      TestimoniView,
      Banner,
      Calendar,
      DatePicker,
    },
    methods: {
      onDayClick: function (day) {
        console.log(day);
      },
    },
    data() {
      return {
        date: new Date(),
      };
    },
  };
</script>
