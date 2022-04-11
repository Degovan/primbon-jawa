<template>
  <div>
    <Banner titleBanner="Kalender Jawa" subtitleBanner="Primbon / Kalender" />
    <v-calendar is-expanded />

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
  import { Calendar, DatePicker } from "v-calendar";

  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  export default {
    components: {
      Banner,
      TestimoniView,
      Calendar,
      DatePicker,
    },
    data() {
      return {
        date: new Date(),
      };
    },
  };
</script>
