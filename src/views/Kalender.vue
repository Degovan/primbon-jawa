<template>
  <div>
    <Banner titleBanner="Kalender Jawa" subtitleBanner="Primbon / Kalender" />
    <div class="max-w-5xl mt-20 mx-auto p-5 box-border">
      <div class="calendar w-full box-border h-auto">
        <div class="calendar-head p-5 bg-black text-primary">
          <div class="flex justify-between items-center">
            <div class="flex-auto w-full">
              <button class="text-left ml-4" @click="previous">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(180 12 12)">
                    <path
                      fill="currentColor"
                      d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div class="flex-auto text-center w-full">
              <h2
                class="text-3xl font-bold text-white font-bluunext"
                id="monthAndYear"
              >
                {{ this.currentMonthYear }}
              </h2>

              <p>{{ this.infodate }}</p>
            </div>
            <div class="flex-auto w-full">
              <button class="float-right mr-4" @click="next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(180 12 12)">
                    <path
                      fill="currentColor"
                      d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="calendar-body w-full box-border">
          <table
            class="table-calendar p-2 border-collapse w-full text-gray-400"
            id="calendar"
            data-lang="en"
          >
            <thead id="thead-month" class="font-bluunext"></thead>
            <tbody id="calendar-body"></tbody>
          </table>
          <div class="calendar-footer w-full p-5">
            <div class="mt-1 mr-10 lg:float-right float-none">
              <label for="libur" class="text-gray-400">Hari libur : </label>
              <br />
              <p v-if="holiday.length < 1" class="text-white">
                Tidak ada hari libur dibulan ini.
              </p>
              <div
                class="mt-3"
                v-for="items in holiday"
                :key="items.holiday_date"
              >
                <p class="text-gray-400">
                  {{ items.holiday_date.substr(8) }} : {{ items.holiday_name }}
                </p>
              </div>
            </div>
            <p class="text-gray-400 lg:mt-0 mt-10">Lompat tanggal :</p>
            <div class="flex max-w-sm mt-5">
              <select
                id="month"
                class="w-full p-2 bg-black border border-secondary text-gray-400 text-sm"
                @change="jumpTo"
              >
                <option value="0">Jan</option>
                <option value="1">Feb</option>
                <option value="2">Mar</option>
                <option value="3">Apr</option>
                <option value="4">May</option>
                <option value="5">Jun</option>
                <option value="6">Jul</option>
                <option value="7">Aug</option>
                <option value="8">Sep</option>
                <option value="9">Oct</option>
                <option value="10">Nov</option>
                <option value="11">Dec</option>
              </select>
              <select
                id="year"
                class="w-full ml-4 p-2 bg-black border border-secondary text-gray-400 text-sm"
                @change="jumpTo"
              ></select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <!-- Testimoni -->
    <div class="">
      <TestimoniView />
    </div>
  </div>
</template>
<style>
  .black-text-calendar {
    color: #000 !important;
  }
</style>
<script>
  import axios from "axios";
  import { getWeton } from "javanese-weton";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  const hijri = require("hijri-js");
  export default {
    data() {
      return {
        holiday: [],
        libur: false,
        sYear: "",
        sMonth: "",
        cYear: "",
        cMonth: "",
        months: "",
        infodate: "",
        hariIni: "",
        dayDate: "",
        years: "",
        todayNow: "",
        currentMonthYear: "",
      };
    },
    components: {
      TestimoniView,
      Banner,
    },

    methods: {
      next: function () {
        this.cYear = this.cMonth === 11 ? this.cYear + 1 : this.cYear;
        this.cMonth = (this.cMonth + 1) % 12;
        this.showCalendar(this.cMonth, this.cYear);
      },

      previous: function () {
        this.cYear = this.cMonth == 0 ? this.cYear - 1 : this.cYear;
        this.cMonth = this.cMonth === 0 ? 11 : this.cMonth - 1;
        this.showCalendar(this.cMonth, this.cYear);
      },
      getLibur: function (month, year) {
        return fetch(
          `https://api-harilibur.vercel.app/api?month=${month}&year=${year}`
        )
          .then((response) => response.json())
          .then((data) => {
            return data;
          });
      },
      jumpTo: function () {
        this.cYear = parseInt(this.sYear.value);
        this.cMonth = parseInt(this.sMonth.value);
        this.showCalendar(this.cMonth, this.cYear);
        // console.log(this.cYear, this.cMonth);
      },
      showCalendar: async function (month, year) {
        var bulan = [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ];
        var hari = [
          "Minggu",
          "Senin",
          "Sel",
          "Rabu",
          "Kamis",
          "Jum'at",
          "Sabtu ",
        ];
        this.hariIni = hari;
        var tanggal = this.todayNow.getDay();
        this.months = bulan;

        var firstDay = new Date(year, month).getDay();

        var tbl = document.getElementById("calendar-body");

        tbl.innerHTML = "";
        var tgl = this.todayNow;
        this.currentMonthYear = this.months[month] + " " + year;
        this.infodate =
          this.hariIni[tanggal] +
          " " +
          this.months[month] +
          " " +
          this.todayNow.getDate() +
          " " +
          +year;
        this.sYear.value = year;
        this.sMonth.value = month;

        const hariLiburs = (await this.getLibur(month + 1, year)).filter(
          (libur) => libur.is_national_holiday == true
        );
        this.holiday = hariLiburs;
        const hariLibur = hariLiburs.map((libur) => libur.holiday_date);

        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {
          var row = document.createElement("tr");

          for (var j = 0; j < 7; j++) {
            var weton = getWeton(new Date(year, month, date));
            // console.log(weton);
            var first_date = new Date(year, month, date);
            var fmonth = first_date.getMonth() + 1;
            const isLibur = hariLibur.includes(
              `${first_date.getFullYear()}-${
                fmonth < 10 ? "0" + fmonth : fmonth
              }-${first_date.getDate()}`
            );
            // console.log(isLibur, first_date.getDate());
            this.libur = isLibur;
            const isMinggu = first_date.getDay() == 0;
            const x = hijri.initialize();
            const first_h = x.toHijri(
              first_date.getDate() +
                "/" +
                first_date.getMonth() +
                "/" +
                first_date.getFullYear(),
              "/"
            );
            if (i === 0 && j < firstDay) {
              var cell = document.createElement("td");
              var cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
            } else if (date > this.daysInMonth(month, year)) {
              break;
            } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", this.months[month]);
              cell.className =
                "date-picker cursor-pointer hover:bg-primary hover:text-black";

              if (
                date === this.todayNow.getDate() &&
                year === this.todayNow.getFullYear() &&
                month === this.todayNow.getMonth()
              ) {
                cell.innerHTML = `<span class='font-bluunext text-xl ${
                  isLibur || isMinggu ? "text-black" : null
                }'> ${date} <br/> <span class='text-xs font-nunito'>${
                  first_h.day
                }   ${weton.wetonName.pancawara}</span>
                </span>`;
              } else {
                cell.innerHTML = `<span class='font-bluunext text-xl ${
                  isLibur || isMinggu ? "text-primary" : null
                }'> ${date} <br/> <span class='text-xs font-nunito'>${
                  first_h.day
                }   ${weton.wetonName.pancawara}</span>
                </span>`;
              }

              if (
                date === this.todayNow.getDate() &&
                year === this.todayNow.getFullYear() &&
                month === this.todayNow.getMonth()
              ) {
                cell.className =
                  "date-picker bg-primary text-black black-text-calendar";
              }
              row.appendChild(cell);
              date++;
            }
          }

          tbl.appendChild(row);
        }
      },

      daysInMonth: function (iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
      },
    },
    async mounted() {
      function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
          years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
      }

      var today = new Date();
      var currentMonth = today.getMonth();
      var currentYear = today.getFullYear();
      var selectYear = document.getElementById("year");
      var selectMonth = document.getElementById("month");

      this.todayNow = today;
      this.sYear = selectYear;
      this.sMonth = selectMonth;
      this.cYear = currentYear;
      this.cMonth = currentMonth;

      var createYear = generate_year_range(1970, 2050);
      /** or
       * createYear = generate_year_range( 1970, currentYear );
       */

      document.getElementById("year").innerHTML = createYear;

      var calendar = document.getElementById("calendar");
      var lang = calendar.getAttribute("data-lang");

      var days = "";
      var hari = "";
      this.dayDate = days;

      days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

      var dhead;
      var $dataHead = "<tr>";
      for (dhead in days) {
        $dataHead +=
          "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
      }
      $dataHead += "</tr>";

      //alert($dataHead);
      document.getElementById("thead-month").innerHTML = $dataHead;

      this.showCalendar(this.cMonth, this.cYear);
    },
  };
</script>
