<template>
  <div>
    <Banner titleBanner="Kalender Jawa" subtitleBanner="Primbon / Kalender" />
    <div class="max-w-5xl mt-20 mx-auto p-5 gap-4 box-border">
      <div class="calendar w-full box-border h-auto">
        <div class="calendar-head p-5 bg-black text-primary">
          <div class="flex justify-between items-center">
            <div class="flex-auto w-full">
              <button class="text-left ml-4">Prev</button>
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
              <button class="float-right mr-4">Next</button>
            </div>
          </div>
        </div>
        <div class="calendar-body w-full box-border h-96">
          <table
            class="table-calendar p-2 border-collapse w-full text-white"
            id="calendar"
            data-lang="en"
          >
            <thead id="thead-month" class="font-bluunext"></thead>
            <tbody id="calendar-body"></tbody>
          </table>
          <div class="calendar-footer w-full p-5">
            <label for="month">Jump To: </label>
            <select id="month" @change="jumpTo">
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
            <select id="year" @change="jumpTo"></select>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimoni -->
    <div class="">
      <TestimoniView />
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { getWeton } from "javanese-weton";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  const hijri = require("hijri-js");
  export default {
    data() {
      return {
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
      jumpTo: function () {
        this.cYear = parseInt(this.sYear.value);
        this.cMonth = parseInt(this.sMonth.value);
        this.showCalendar(this.cMonth, this.cYear);
        console.log(this.cYear, this.cMonth);
      },
      showCalendar: function (month, year) {
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

        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {
          var row = document.createElement("tr");

          for (var j = 0; j < 7; j++) {
            const weton = getWeton(new Date(year, month, date));
            console.log(weton);

            const x = hijri.initialize();
            var first_date = new Date(year, month, date);
            var first_h = x.toHijri(
              first_date.getDate() +
                2 +
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
              cell.innerHTML = `<span class='font-bluunext'> ${date} <br/> <span class='text-xs font-nunito'>${first_h.day}   ${weton.wetonName.pancawara}</span>   
                </span>`;

              if (
                date === this.todayNow.getDate() &&
                year === this.todayNow.getFullYear() &&
                month === this.todayNow.getMonth()
              ) {
                cell.className = "date-picker bg-primary text-black";
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
      var axios = require("axios");

      var config = {
        method: "get",
        url: "https://api-harilibur.vercel.app/api?month=8&year=2021",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

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

      function next() {
        currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
      }

      function previous() {
        currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
      }
    },
  };
</script>
