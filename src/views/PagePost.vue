<template>
  <div class="page-post">
    <div class="pages" v-if="this.page_type == 'cek-weton'">
      <Banner :titleBanner="this.title" :subtitleBanner="this.page_type" />
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
                v-model="days"
                type=""
                id="days"
                placeholder="Tanggal"
                class="w-full p-2 bg-black border border-secondary text-white text-sm"
              />
            </div>
            <div class="input-box mt-5">
              <select
                v-model="month"
                id="month"
                class="w-full p-2 bg-black border border-secondary text-white text-sm"
              >
                <option value="0">Januari</option>
                <option value="1">Februari</option>
                <option value="2">Maret</option>
                <option value="3">April</option>
                <option value="4">Mei</option>
                <option value="5">Juni</option>
                <option value="6">Juli</option>
                <option value="7">Agustus</option>
                <option value="8">September</option>
                <option value="9">Oktober</option>
                <option value="10">November</option>
                <option value="11">Desember</option>
              </select>
            </div>
            <div class="input-box mt-5">
              <input
                type=""
                v-model="years"
                id="years"
                placeholder="Tahun"
                class="w-full p-2 bg-black border border-secondary text-white text-sm"
              />
            </div>
            <button
              @click="wetongan"
              class="lg:px-6 lg:py-3 w-full uppercase px-4 py-3 text-xs mt-5 font-bold bg-primary text-black text-center font-nunito"
            >
              Check
            </button>
          </div>
        </div>
        <div class="bg-black col-span-1 w-full border p-10 border-secondary">
          <p class="text-white mt-5 font-nunito" v-html="this.descriptions"></p>
        </div>
      </div>
      <div
        v-show="showWeton"
        class="output mt-5 text-white bg-black lg:max-w-5xl w-full max-w-full mx-auto border p-10 border-secondary"
      >
        <h1 class="text-center font-bluunext text-2xl text-primary">
          Hasil cek Weton
        </h1>
        <div class="wraper-weton mt-5">
          <h2>Tanggal Masehi : {{ this.masehi }}</h2>
          <h2>Tanggal Hijriah : {{ this.hijriah }}</h2>
          <h2>Tanggal Jawa : {{ this.jawa }}</h2>
          <h2>Pasaran : {{ this.pasaran }}</h2>
          <h2>Neptu : {{ this.neptu }}</h2>
          <h2>Warsa : {{ this.warsa }}</h2>
        </div>
        <p class="mt-5">{{ this.description }}</p>
      </div>
    </div>
    <div class="page-show" v-else>
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
                v-html="this.descriptions"
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
  </div>
</template>

<script>
  import { getWeton } from "javanese-weton";
  import ErrorPage from "@/components/neterror";
  import axios from "axios";
  import TestimoniView from "@/components/Testimoni";
  import Banner from "@/components/Banner";
  const hijri = require("hijri-js");
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
          .get(`${this.$baseURL}page/${this.$route.params.slug}`)
          .then((response) => {
            var query = response.data.data;
            this.icon =
              ` https://backend.primbonjawa.net/favicon/` + query.icon;
            this.page_type =
              "Home / Halaman /" + query.page_type + "/" + query.slug;
            this.page_type = query.page_type;
            this.title = query.title;
            this.subtitle = query.subtitle;
            this.slug = query.slug;
            this.descriptions = query.description;
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
            this.error = false;
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
      wetongan: function () {
        var d = this.days;
        var m = this.month;
        var y = this.years;
        var max_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var no_date = this.days;
        if (y % 4 == 0) {
          max_date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        if (no_date == "") {
          alert("tanggal masih kosong isi dulu!");
          this.showWeton = false;
        } else if (y == "") {
          alert("tahun masih kosong isi dulu!");
          this.showWeton = false;
        } else if (no_date != parseInt(no_date) || y != parseInt(y)) {
          if (no_date != parseInt(no_date)) {
            alert("Masukan tanggal dengan angka ya!");
          } else if (y != parseInt(y)) {
            alert("Masukan tahun dengan angka ya!");
          } else {
          }
        } else if (no_date <= max_date[this.month]) {
          this.showWeton = true;
          let gregorianDate = new Date(y, m, d);
          // console.log(getWeton(gregorianDate));
          var wetonJson = getWeton(gregorianDate);
          let weton = JSON.parse(JSON.stringify(wetonJson));
          let saptawaraName = weton.wetonName.saptawara;
          let pancawaraName = weton.wetonName.pancawara;
          let saptawaraNumber = weton.wetonNumber.saptawara;
          let pancawaraNumber = weton.wetonNumber.pancawara;
          var dayName;
          if (saptawaraName == "Monday") dayName = "Senin";
          else if (saptawaraName == "Tuesday") dayName = "Selasa";
          else if (saptawaraName == "Wednesday") dayName = "Rabu";
          else if (saptawaraName == "Thursday") dayName = "Kamis";
          else if (saptawaraName == "Friday") dayName = "Jum'at";
          else if (saptawaraName == "Saturday") dayName = "Sabtu";
          else if (saptawaraName == "Sunday") dayName = "Minggu";
          this.pasaran = dayName + " " + pancawaraName;
          var dataweton = [
            [
              "Minggu Legi",
              "Menurut primbon Jawa, seseorang yang lahir di hari Minggu Legi dapat dipengaruhi oleh Bintang Kala Sungsang, lakunya pendita sakti, memiliki watak yang pendiam, cerdas dan senang dalam bidang ilmu mistik. Orang yang lahir pada minggu Legi ini sangat jarang sekali orang yang diperkenankan untuk mengetahui isi hatinya yang paling dalam. Orang yang lahir dalam golongan ini termasuk orang yang tegas dan pendiam. Anda tampak sangat tenang dan terkontrol, bahkan ketika anda tampak sangat marah, senyuman yang tampak misterius itu tidak akan pernah lepas dari bibir anda. oleh karena itu, ketika anda merasa patah hati ataupun benci, hal ini akan menjadi pengalaman yang luar biasa bagi orang-orang di sekeliling anda. untuk anda yang lahir di minggu legi ini memiliki sifat yang cerdik, bahkan terkadang licik, dan sangat pandai mengorek/mencari informasi yang sifatnya rahasiah. untuk jodoh yang baik dan ideal adalah dengan orang yang lahir pada minggu wage, selasa pon, dan jum&#8217;at legi. Dalam hal urusan mencari rezeki untuk weton Minggu Legi/manis adalah dari arah Timur dan utara. Rejeki juga akan bertambah jika sudah memiliki anak. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Senin Pahing",
              "Berdasarkan primbon Jawa kelahiran untuk senin pahing, akan mendapat pengaruh dari Bintang Kukus, lakunya Bintang, Kencang dalam berbicara tetapi lembut hatinya. Orang yang lahir di senin pahing ini suka dalam hal menyampaikan pendapat dengan tegas, dan tidak mudah terpengaruh oleh perkataan orang lain bila tidak menemukan alasan untuk mempercayainya. Bagi orang yang lahir di senin pahing ini adalah seorang yang jujur, perasa, beriba, dan memiliki cita-cita yang tinggi. Anda juga seorang yang pekerja keras, dan tidak suka berfoya-foya. Cobalah untuk bisa mengendalikan perasaan yang sensitif agar tidak mudah tersinggung dari setiap perkataan atau tindakan orang lain. Sedangkan untuk urusan asmara/jodoh menurut weton sening pahing adalah jodoh yang baik dengan pasangan yang Timur dan Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Selasa Pon",
              "Berdasarkan primbon jawa, weton selasa pon mendapat pengaruh dari Bintang Asu, lakunya Pandita Sakti, Satria Wibawa, memiliki sifat yang keras dan pendiam. Dikalangan ini sangat menyukai materi dan kemewahan. Tingkat pemborosan mereka biasanya tergantung pada kemampuan finansial yang ada, akan tetapi keinginan mereka yang kuat untuk memiliki kehidupan yang serba mewah akan selalu mereka rasakan. Meski perasaan mereka cenderung untuk melindungi diri sendiri, mereka juga bisa menjadi sangat setia dan murah hati kepada siapa saja yang sesuai dengan standar pribadi mereka. Akan tetapi, sekali saja anda dekat berarti anda telah menjadi milik mereka seutuhnya, karena dikalangan ini sering merasa khawatir akan ancaman (baik nyata maupun hanya khayalan), sehingga tidak heran jika rasa cemburu yang berlebihan selalu menyertai mereka dalam setiap hubungan. Orang yang lahir di hari selasa pon memiliki sifat tertutup dan percaya dengan sesuatu hal yang irasional, mereka dapat bersikap ramah dalam bersosialisasi, mereka juga memiliki pendirian yang sangat kuat. Sedangkan untuk urusan jodoh yang ideal untuk kelahiran selasa pon adalah dengan orang yang lahir pada minggu wage, selasa pon, dan jum&#8217;at legi. Sedangkan untuk rezeki adalah dari arah Timur dan Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Rabu Wage",
              "Berdasarkan primbon Jawa, kelahiran orang ini mendapat pengaruh dari bintang Kartika, Satria Wibawa, mereka yang lahir pada rabu wage memiliki watak yang baik hati dan ramah dalam bergaul. Namun terkadang kata-kata mereka agak keras, biasanya mereka mudah dalam bergaul dengan orang lain dan menjunjung tinggi kejujuran dan niat baik. orang yang lahir di rabu wage ini suka menimbang pilihan mereka terlebih dulu dengan cermat sebelum melaksanakannya dan mereka juga memiliki sikap yang bijaksana. Walaupun mereka suka dengan barang-barang dan pelayanan yang mewah, tetapi mereka bukan tipe orang yang boros. Mereka sangat menghargai uang yang mereka miliki, dan terkadang sebagian dari mereka juga ada yang bersikap sangat hemat sehingga mereka terkadang dianggap orang yang pelit. Untuk urusan asmara/jodoh yang cocok dengan orang yang kelahiran selasa legi dan jum&#8217;at legi, apabila sesuai dengan jodohnya maka akan memiliki banyak anak dan akan bertambah banyak rezekinya dan arah rezekinya adalah ke arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Kamis Kliwon",
              "Menurut primbon jawa untuk kelahiran kamis kliwon ini dipengaruhi oleh Bintang Naga, lakunya air, sesuai dengan sifat yang dimiliki air, orang yang lahir pada kamis kliwon ini adalah tipe orang yang pantang menyerah, memiliki rencana besar dalam hidupnya. Namun, terkadang cita-cita yang ingin diraih terlalu besar sehingga anda menjadi korban dari imajinasi anda yang jauh berada diluar jangkauan anda. Meski demikian, bagi orang yang memiliki weton kelahiran kamis Kliwon ini tdak mudah menyerah, sikap yang optimis dan terhormat akan membuat anda diterima dengan baik oleh banyak orang. Anda suka menjadi seorang pemimpin, tetapi anda harus bisa menerima pendapat dari orang lain yang mungkin memiliki pendapat/ mempunyai sudut pandang yang berbeda dari pendapat anda. Namun anda memiliki sifat yang mudah tersinggung dan pemalas. Jodoh yang baik untuk weton kamis kliwon ini adalah dengan orang yang kelahiran jumlah neptunya dibawah jumlah enam belas. Akan tetapi harus diimbangi dengan kasih sayang yang tulus akan dapat membawa kebahagiaan dikemudian hari. Untuk urusan mencari rezeki adalah ke arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Jumat Legi",
              "Kelahiran pada hari Jum&#8217;at Legi/manis ini mendapat pengaruh dari bintang banyak Angrem, sifat yang lebih ditonjolkannya adalah kejujuran. Bagi orang yang lahir pada Jum&#8217;t Legi ini cenderung memiliki sifat yang jujur. Bahkan, kemungkinan mereka terkadang terlalu jujur sekali, karena mereka adalah orang yang suka mengumbar pembicaraan tanpa pandang bulu. Pendirian mereka cukup teguh, namun sikap yang seperti ini terkadang akan menghambat kemampuan yang mereka miliki untuk menerima orang lain secara apa adanya. Sebaiknya jangan memancing amarah mereka, karena ketika sedang naik darah, mereka bisa bertindak ekstrim. Meskipun begitu, mereka orang yang setia dan murah hati kepada orang-orang yang dicintainya. Sifat Simpati mereka mudah sekali timbul sehingga mereka tidak keberatan untuk membantu teman ataupun orang asing. Ramalan Asmara yang ideal untuk weton ini adalah dengan kelahira legi dan jum&#8217;at legi. Sedangkan arah untuk mencari rezeki adalah ke arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Sabtu Pahing",
              "Primbon weton Sabtu Pahing ini bintangnya Ru, Lakunya Api, Satria Wibawa, karena memiliki sikap api akibatnya cepat marah. Sehingga bagi anda yang lahir pada hari sabtu pahing, kemungkinan anda mudah naik darah. Namun, untungnya ketika anda cepat marah dan secara cepat pula anda melupakan penyebabnya. Semoga saja orang lain dapat memaafkan anda dengan mudah juga, karena bukan sesuatu hal yang mudah untuk mengakui kesalahan yang kita lakukan. Bahkan meski anda memiliki semangat hidup yang tinggi dan terkadang akan berakibat pada kecerobohan, anda akan bersikap lebih waspada lagi bila menyangkut masalah materi. orang yang lahir pada sabtu pahing ini merupakan salah satu tipe orang yang selalu siap membantu teman yang sedang mengalami kesusahan. Sedangkan Ramalan Asmara yang cocok adalah Rebo wage, kamis wage, selasa wage, dan minggu wage. Sedangkan Untuk mencari rezeki yang sesuai adalah ke arah timur dan ke Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Minggu Pon",
              "Menurut primbon jawa hari weton dan pasarannya Minggu Pon dipengaruhi oleh bintang paterem, lakunya bumi, sifatnya tidak banyak bicara, tapi bagi orang yang lahir pada minggu pon ini termasuk tipe orang yang sensitif karena terkadang bisa terbawa emosi. Kemungkinan ia merasa takut disakiti, orang yang wetonnya minggu pon ini selalu menjaga perasaannya, untuk masalah hati dan pikirannya juga begitu dalam, tapi terkadang orang lain bisa menganggap anda orang yang tertutup. kemungkinan anda sudah bisa mengembangkan penilaian baik buruknya sifat pada manusia. Dengan memiliki bakat ini, anda bisa menjadi seorang diplomat yang handal tapi mampu berbelit-belit dalam berbicara atau bisa menjadi seorang manipulator yang licik. Namun, anda selalu berusaha untuk bisa menampilkan yang terbaik di hadapan teman-teman anda. Walaupun mungkin saja anda mampu mengambil cara yang tidak langsung atau mungkin saja anda menunggu waktu yang tepat, akan tetapi lama kelamaan anda pasti akan merebut kesempatan untuk memperlihatkan kelebihan anda, baik dari segi material atau intelektual. Sedangkan untuk urusan jodoh/asmara yang cocok adalah dengan orang yang lahir pada selasa kliwon, jum&#8217;at kliwon, selasa legi dan jum&#8217;at legi. Ramalan untuk mencari rezeki adalah ke arah Barat dan ke Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Senin Wage",
              "Menurut primbon jawa, sifat, watak, dan rezeki dari weton senin wage dipengaruhi oleh bintang lembu, lakunya api, hal ini dapat mengakibatkan cepat marah tapi tidak mudah keburu napsu. Bagi anda yang lahir pada hari senin wage anda akan jarang terjebak dalam keadaan yang memalukan. Hal ini dikarenakan anda suka sekali merencanakan dan menimbang-nimbang pilihan anda dengan berhati-hati sebelum mengambil tindakan yang lebih jauh. Cukup dengan kejujuran saja dan tidak keberatan menjadi seorang pendengar yang baik untuk permasalahan orang lain. Karena berkat pendekatan anda yang tenang, sehingga anda bisa tampil meyakinkan di hadapan masyarakat. Agar anda bisa memiliki kemampuan untuk menjadi seorang diplomat yang handal. Meskipun begitu, sekali saja anda marah, anda tidak mau menerima alasan dalam hal apapun. Untuk ramalan perjodohan yang paling serasi adalah dengan orang yang lahirannya selasa dan jum&#8217;at apapun pasarannya. Sedangkan arah yang sesuai untuk mencari rezeki yaitu dari arah Timur dan dari arah utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Selasa Kliwon",
              "Menurut primpon jawa kelahiran pada hari selasa kliwon ini diayomi oleh bintang pedati, lakunya suatu kecocokan sehingga mudah mendapatkan kasih sayang/empati dari orang lain. Karena bagi orang yang lahir pada hari selasa kliwon ini dikenal memiliki sifat yang ramah. Ia begitu pandai dalam mengungkapkan kata-kata dalam berbagai situasi dan kondisi sehingga membuat orang lain mudah menyukainya. tapi, mereka juga dikenal memiliki pendirian yang keras, walaupun mungkin pada kesan pertama tidak menunjukkan hal yang demikian. Bagi orang yang lahir pada selasa kliwon ini memiliki sikap yang sangat kritis terhadap orang lain pada saat-saat tertentu. Walaupun demikian, anda jangan tersinggung bila menjadi sasaran kritikan yang tajam karena mereka hanya menunjukkan kesalahan anda dengan cara inilah mereka bisa membantu anda menjadi seseorang yang lebih baik lagi. Bagi yang lahir pada hari selasa kliwon urusan asmara yang cocok adalah dengan orang yang lahir pada hari selasa legi dan jum&#8217;at legi. Sedangkan arah yang baik untuk mencari rezeki adalah arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Rabu Legi",
              "Berdasarkan hari weton dan pasarannya mendapatkan pengaruh dari bintang Tangis, berkelakuan sopan, mudah mendapatkan teman, memiliki sikap adil dan bijaksana. Orang yang lahir pada hari Rabu Legi ini sangat menghormati tata krama dan berpegang teguh pada falsafah hidup anda. Kejujuran merupakan salah satu prioritas utama, sehingga anda tidak menyukai adanya ketidakadilan. Anda juga merupakan orang yang sangat setia terhadap teman sehingga anda banyak sekali memiliki teman. Bagi orang yang memiliki Weton ini sangat dikagumi sekali oleh semua orang karena kata-katanya bijaksana. Namun orang berweton ini selalu ingin mencampuri urusan orang lain. Ramalan asmara yang cocok adalah dengan pasangan yang lahir pada hari selasa kliwon, jum&#8217;at kliwon, selasa legi dan jum&#8217;at legi. Sedang arah yang baik untuk mencari rezeki adalah dari arah Barat dan Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Kamis Pahing",
              "Menurut primbon jawa, weton kamis pahing ini dipengaruhi oleh bintangnya salah ukur. Weton ini memiliki cita-cita yang tinggi dan disertai dengan semangat yang kuat untuk mewujudkannya. Anda selalu mencari kesempatan yang baik untuk mewujudkannya. akan tetapi hal ini bukanlah untuk diri sendiri melainkan untuk keluarga dan akan selalu siap untuk membantu saudara yang sedang membutuhkan perlindungan ataupun pengasuhan. Dalam hal pergaulan, ada suatu dorongan untuk membantah tanpa dipikirkan lebih dahulu resikonya, sehingga kemungkinan dapat membuat orang lain merasa tidak dihargai. Cara anda dalam penyampaian secara ketus dan salah terka sangat berpengaruh dan dapat menyinggung perasaan orang lain. Untuk urusan asmara yang ideal adalah dengan orang yang lahir pada rabu pon, kamis legi, dan jum&#8217;at legi. Sedangkan arah yang cocok untuk mencari rezeki adalah dari arah Barat dan Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Jumat Pon",
              "Berdasarkan weton ini banyak dipengaruhi oleh bintang perahu putus, perilakunya bintang, pendiam dan berhati lembut serta tenggang rasa. Berdasarkan kepercayaan jawa, Orang yang lahir pada hari Jum&#8217;at Pon itu perlu banyak bersosialisasi dengan berbagai macam orang. Konon, mereka berpembawaan tenang, bijaksana dalam bertutur kata dan serius. Orang yang dilahirkan pada Jum&#8217;at Pon ini adalah tipe orang yang memiliki jiwa sosial, murni, jujur, dan mudah bersimpati terhadap orang-orang yang kesusahan. Weton ini mudah beradaptasi dengan orang-orang yang ada disekitarnya dan dapat menyesuaikan diri dengan berbagai situasi dan kondisi. Namun, sifat seperti ini juga dapat menjadi kelemahan bagi mereka, karena jika tidak disertai dengan rasa percaya diri yang kuat mereka bisa dengan mudah dapat dipengaruhi oleh kebiasaan buruk dari orang lain. Sedangkan untuk ramalan jodohnya yang cocok adalah dengan kelahiran Rabu Kliwon, Kamis Pahing, dan Sabtu Pahing. Arah yang sesuai untuk mencari rezeki adalah arah Selatan dan Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Sabtu Wage",
              "Berdasarkan Primbon Jawa Weton Sabtu Wage bintangnya burung Puyuh Atarung (berkelahi), Satria Wibawa, suka mengatur hal-hal yang baik. Bagi anda yang lahir pada sabtu wage maka anda bersifat teguh pada pendirian dan mudah sekali naik darah jika apa yang sudah direncanakan tidak sesuai dengan harapan. Weton sabtu wage ini memiliki sifat cemburuan, karena anda sedikit memiliki masalah kepercayaan dan rasa memiliki yang berlebihan. Meskipun begitu, anda adalah orang yang setia dan murah hati kepada siapa saja orang yang disukai. Selain itu juga anda mempunyai bakat yang besar dalam mengatur rumah tangga supaya tetap berjalan dengan baik. Orang yang kelahirannya pada hari sabtu wage ini menyukai hal kemewahan dan sangat menghargai barang-barang yang berkualitas tinggi. primbon jodohnya ialah dengan kelahiran sabtu pahing, rabu kliwon, dan kamis pahing. Jika tidak ada, maka jodoh selanjutnya adalah kelahiran neptu senin wage, jum&#8217;at wage, selasa pon, senin kliwon, kamis wage, minggu pon, rabu pon, jum&#8217;at kliwon, sabtu legi, minggu pahing , kamis kliwon, dan sabtu pon, serta rabu pahing. Sedangkan untuk mencari rezeki adalah dari arah Timur dan Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Minggu Kliwon",
              "Berdasarkan weton minggu kliwon dipengaruhi oleh binatang lawehan, perilakunya bintang, pendiam dan lembut hatinya. Tipe pendiam ini memiliki pendirian yang tegas dan memiliki kemauan yang keras. Kelahiran Minggu Kliwon ini sangat pandai dalam membuat orang selalu menduga-duga perasaan anda yang sebenarnya. Anda memiliki sifat yang sensitif, akan tetapi jangan berharap orang lain akan mempercayainya saat mendengar anda beradu pendapat. Weton minggu kliwon ini pintar bersosialisasi, pandai berbicara dan diplomatis, oleh karena itu mereka sangat berbakat dalam dunia politik. Karena kemampuannya ini sehingga mereka dapat mencapai kedudukan yang tinggi. Primbon asmaranya yang sesuai adalah dengan kelahiran rabu kliwon, kamis pahing, sabtu pahing, dan minggu wage, serta senin legi. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Senin Legi",
              "Primbon weton senin legi mendapat pengaruh dari bintang kelapa, perilakunya angin, sopan, murah hati dan dermawan. Bagi orang yang kelahirannya hari senin legi mereka suka merantau berkeliling dunia, baik itu secara fisik ataupun secara intelektual. Mereka ini suka berdebat. Tetapi, mereka tidak jahat, bahkan mereka ini sangat sopan, dan murah hati. Mereka memiliki kepribadian yang baik jika mereka mau berhenti mencampuri urusan orang lain dan berhenti berdebat. Sedangkan untuk urusan asmara yang sesuai dengan weton senin legi ini adalah dengan kelahiran minggu, senin terutama minggu kliwon. Kemudian arah untuk mencari rezeki adalah dari arah Timur dan Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Selasa Pahing",
              "Berdasarkan primbon weton selasa pahing mendapat pengaruh oleh bintang kepiting/yuyu, lakunya suatu kecocokan. Untuk orang yang lahir pada hari selasa pahing bersifat santai dan bisa menerima orang lain apa adanya. Mereka sangat terampil dan suka menolong, serta mau berkorban demi orang yang mereka sayangi. Berhati-hatilah dengan orang yang kelahirannya pada selasa pahing, karena ketika mereka dibuat marah, maka mereka bisa membalas dendam secara membabibuta. Meskipun demikian, mereka cukup beruntung karena mereka mudah mendapatkan banyak rezeki, merek a juga harus belajar untuk bisa mengendalikan hasrat pribadi mereka yang kemungkinan dapat membuat mereka menjadi serakah. Dikemudian hari mereka dapat hidup dengan tenang dan berbahagia, dengan dikelilingi banyak teman yang baik. primbon asmara yang cocok adalah kelahiran selasa kliwon, jum&#8217;at kliwon, selasa legi, dan jum&#8217;at legi. Arah rezekinya ialah ke Barat dan ke Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Rabu Pon",
              "Dalam Primbon Jawa Weton Rabu Pon dipengaruhi oleh bintang lumbung, perilakunya bumi ialah dalam berperilaku sopan santun. Bagi anda yang lahir pada hari Rabu Pon merupakan orang yang penuh dengan keberuntungan, karena anda selalu merencanakan semua tindakan dengan berhati-hati, tidak mudah berputus asa, dan terbuka dalam peluang yang baru. Mereka juga memiliki keterampilan sosial, sehingga biarpun anda memiliki wajah yang jelek kemungkinan besar anda masih bisa bergaul dengan orang lain, dari sifat buruknya adalah anda suka selali pamer. Kemungkinan sejak kecil anda kurang perhatan, sehingga sekarang anda harus membuat kagum semua orang dengan kepintaran atau kekayaan yang anda miliki. Jadilah diri anda sendiri sehingga orang lain akan menyukai anda apa adanya. Dan akan lebih baik lagi jika anda berusaha sendiri dan tidak terlalu menyalahkan orang lain yang tidak sengaja telah menyakiti perasaan anda. Primbon Jodoh yang sesuai dengan kelahiran rabu pon adalah dengan orang yang lahir dihari apa saja, tapi yang paling utama adalah dengan sabtu kliwon. Kemudian untuk arah mencari rezeki adalah ke arah Timur dan ke Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Kamis Wage",
              "Orang yang kelahirannya pada hari kamis wage ini dipengaruhi oleh bintang kumba (tempat air), lakunya suatu perjodohan atau kecocokan. Bagi orang yang lahir di hari Kamis Wage ini memiliki cita-cita yang sangat tinggi.Oleh karena keinginan mereka yang tinggi itulah mereka mentaati aturan yang ada dan sangat berhati-hati dalam mewujudkan keinginan mereka sehingga sering tercapai tujuan mereka. Orang yang lahir di Kamis wage ini mungkin saja pandai, namun mereka sering terpaku pada jalan mereka dan mereka juga tidak menerima saran yang tidak mereka inginkan. Walaupun begitu, mereka dapat menebarkan pesona kepada orang lain dengan kesopanannya dan dapat bergaul dengan baik. Weton Kamis Wage ini tidak suka menunjukkan perasaan mereka yang sebenarnya, namun mereka dapat dibujuk dengan rayuan. Sedangkan untuk asamara weton kamis wage ini yang cocok adalah dengan kelahiran selasa kliwon, jum&#8217;at kliwon, selasa legi, dan jum&#8217;at legi. Untuk mencari rezeki yang baik adalah ke arah Barat dan ke Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Jumat Kliwon",
              "Bagi anda yang lahirnya pada jum&#8217;at kliwon akan mendapat pengaruh dari bintang udang, lakunya bulan, cara berpikir merekapun luas. Mereka adalah orang yang sabar dan murah hati, pandai juga dalam berkata-kata, sehingga orang mudah menyukai anda. Ketika anda muda kurang berhasil, namun setelah dewasa anda mampu menjadi seorang pemimpin yang baik, karena anda memiliki kemampuan, anda mampu berpikir seara luas, serta anda pandai dalam mempengaruhi banyak orang. Mungkin anda memliki sifat sedikit malas, namun orang-orang tetap menyukai anda. Sedangkan untuk ramalan asmara adalah dengan orang yang lahir pada hari senin legi, selasa wage, selasa pahing, rabu pon, kamis wage, kamis pahing, jum&#8217;at kliwon, sabtu legi, sabtu kliwon, minggu pahing, dan minggu pon, serta minggu wage. Arah yang cocok untuk mencari rezeki adalah harus dari arah Timur dan ke Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Sabtu Legi",
              "Menurut Primbon Jawa Weton Sabtu Legi mendapat pengaruh dari bintang Bgoong, lakunya bulan, Ia pandai dalam berbagai pekerjaan. Orang yang lahir di Sabtu Legi ini adalah salah satu orang yang gemar dengan gaya hidup yang santai dan mewah. Bagi mereka, kualitas adalah yang paling pentng daripada harga yang murah. Hal ini berlaku untuk kehidupan sosial anda, anda ingin berada disekitar orang-orang yang memiliki kepintaran/IQ nya tinggi. Sehingga anda tidak kalah juga dari segi otak. Anda juga dapat menghargai pendapat orang lain. Perkataan untuk kelahiran Sabtu Legi ini terkadang sedikit tajam dan suka mencampuri urusan orang, karena hal inilah anda terkadang mendapatkan fitnah. Primbon jodohnya yang sesuai dengan kelahiran sabtu legi ini adalah dengan kelahiran apasaja, terutama sabtu kliwon. Sedangkan urusan mencari rezeki yang cocok adalah dari arah Timur dan Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Minggu Pahing",
              "Primbon Jawa menurut weton Minggu Pahing mendapat pengaru dari bintang Gajah, Lakunya Bulan, Orang ini mempunyai kemampuan yang luar biasa dibidang apa saja yang digelutinya. Orang yang lahir di Minggu Pahing ini mampu mempertahankan pendapatnya dengan kuat dalam keadaan sesulit apapun. Namun mereka juga berpikiran yang luas, mereka juga menyukai ilmu mistik dan mereka juga diterima dengan baik dalam lingkungan sosial. Bagi orang yang kelahiran Minggu Pahing ini mampu menyembunyikan perasaan mereka yang tidak nyaman seperti kemarahan, penyesalan, bahkan kesedihan. Meraka dapat mengontrol diri mereka dan dengan sifat seperti inilah yang sangat menguntungkan bagi mereka yang berkerja sebagai seorang politikus, dokter UGD, atau agen rahasia. Akan tetapi sifat seperti ini semoga tidak berakibat pada perasaan mereka yang terpendam, yang seharusnya mereka tunjukkan secara terbuka kepada orang-orang yang mereka cintai. Untuk masalah jodoh minggu pahing ini yang baik adalah dengan minggu wage, selasa pon dan jum&#8217;at legi. Sedangkan untuk arah mencari rezeki yang cocok adalah ke arah Timur dan ke Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Senin Pon",
              "Menurut Primbon Jawa bagi orang yang lahir pada hari Senin Pon dipengaruhi oleh Bintang Kiriman, Perilakunya Sumur Sinaba yaitu suka dipuji-puji. Anda merupakan seorang yang penuh kontradiksi. Mungkin anda tampak seperti orang yang kuat, tangguh, bahkan dengan bangganya memperlihatkan kekayaan yang anda miliki. Akan tetapi, anda yang sebenarnya ialah seorang yang sangat perasa. Orang lain akan mereasa terkejut bila melihat betapa sopan dan ramahnya anda, serta bertanggung jawab. Jika anda mengetahui dan mampu melihat sifat-sifat pemberani anda dapat terapkan pada hal-ha yang berguna, sehingga kesuksesan bisa anda raih. Ramalan asmara yang lahir pada hari senin pon ini cocok dengan kelahiran selasa legi, dan jum&#8217;at legi. Rezeki akan mudah didapat dengan diawali dari arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Selasa Wage",
              "Berdasarkan primbon jawa Weton Selasa Wage dipengaruhi oleh bintang jong sarat (perahu sarat) atau perahu yang bermuatan yang sangat berat, Prilakunya bumi, tidak banyak berbicara dan tidak suka menyombongkan diri. Meskipun begitu, anda lebih sering mengalah kepada orang yang lebih cerewet daripada mempermasalahkan hal-hal yang remeh. Bagi orang-orang yang tidak kenal dengan anda mungkin menganggap anda orang yang kaku. Di samping itu juga anda cenderung bersikap cemburu. Walaupun demikian, terkadang kawan-kawan anda pun mengagumi anda yang memiliki keinginan yang besar terhadap ilmu pengetahuan dan bertekad kuat untuk mencari tahu hal-hal yang menarik perhatian anda secara lebih dalam. Jika keadaan mulai memburuk, anda akan tetap bertahan. Primbon Jodoh yang baik untuk kelahiran pada hari selasa wage adalah dengan siapa saja, asalkan jangan berpasaran dengan wage. Arah untuk mencari rezeki yang sesuai adalah ke arah Timur dan ke utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Rabu Kliwon",
              "Weton Rabu Kliwon dipengaruhi oleh Bintang Tiwa-Tiwa, lakunya Matahari (Surya), sengan dipuji. Orang yang lahir pada Rabu Kliwon merupakan seorang pemikir sejati dengan sikap lembut yang disertai dengan gaya yang mempesona, sehingga membuat orang lain menjadi mudah tertarik dengan anda. Karena bakat alami yang ada pada diri anda akan bahasa dan kepekaan terhadap perasaan orang lain, maka anda memiliki potensi yang besar untuk menjadi seorang pembicara sukses. Bagi orang yang wetonnya Rabu Kliwon ini diantaranya sudah banyak yang menjadi seorang orator atau penulis yang handal. Anda senang sekali bila mendapatkan pujian, tetapi anda harus belajar lagi untuk tidak mudah tersinggung dan jangan terlalu memasukkan kritikan yang membuat telinga pedas ke dalam hati. Berhati-hatilah dan tetaplah waspada supaya kelemahan anda terhadap rayuan manis tidak membuat anda mudah untuk diperdaya. Sedangkan jodohnya yang baik dengan siapa saja yang sesuai dengan kasih sayang dan firasat anda sendiri mampu mendapatkan jodoh yang baik untuk anda. Untuk arah mencari rezeki yang baik adalah sebaiknya dari arah Barat, karena dari arah itulah yang sangat sesuai untuk mencari rezeki, selain dari arah tersebut tidak banyak untuk mendapatkan rezeki. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Kamis Legi",
              "Berdasarkan Primbon Jawa Weton Kamis Legi mendapat pengaruh dari Bintang Sangka Tikel, perilakunya Bintang, Satria Wibawa, tidak banyak bicara dan mempunyai kemauan yang kuat. Weton kamis legi ini memiliki cita-cita yang tinggi dan mulia, walaupun disetiap ide atau dalam pekerjaan jarang berhasil. Mereka memiliki sifat yang sangat bijaksana karena kemampuannya dalam melihat prospek dalam suatu hal untuk waktu jangka panjang. Meskipun demikian, mereka harus tetap bersikap sabar dan lebih berhati-hati dalam melihat prospek yang besar. Akan tetapi, walaupun wetonnya kamis legi ini cenderung memiliki pandangan yang luas, mereka selalu saja terjerumus dalam pernik-pernik kehidupan sehari-hari. Kelahiran Kamis Legi ini merupakan tipe orang yang yang selalu ingin dipuji. Tetapi, kemungkinan dukungan tidak terlalu sulit untuk didapatkannya, karena mereka biasa dikelilingi oleh banyak teman, sebab mereka dikenal memiliki kemampuan bergaul yang asyik, akan tetapi mereka juga suka mencampuri urusan orang lain. Primbon jodoh yang baik adalah dengan kelahiran rabu kliwon, kamis pahing, dan sabtu pahing. Orang yang lahir pada kamis legi ini sangat cocok bila mencari rezeki di mulai dari arah Timur dan Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Jumat Pahing",
              "Weton Jum&#8217;at Pahing mendapat pengaruh oleh bintang Bubu Bolong, perilakunya Surya (matahari). Dalam pergaulannya seorang yang ramah, lemah lembut dalam berbicara. Anda merupakan pembicara yang menyenangkan, memiliki cita-cita yang tinggi, dan jujur, namun anda seorang yang mudah tersinggung. Anda akan memperoleh banyak poin untuk mendapatkan keberhasilan. Orang yang weton Jum&#8217;at Pahing ini sangat mudah dimanfaatkan, sehingga orang tidak akan percaya bahwa anda mampu bekerja keras. Selain itu juga anda bisa bersikap marah ketika mengalami hal-hal yang menjengkelkan. Bagi orang yang lahir jum&#8217;at pahing ini mendapat pengaruh dari bintang bubu bolong, karena anda banyak mendapatkan uang. Akan tetapi cepat pula untuk menghabiskannya. untuk Asmaranya cocok dengan siapa saja, sesuai dengan cinta dan kasih anda yang tulus dan tergantung dari firasat bathin anda sendiri yang nantinya bisa membawa dalam kebaikan. Sedangkan arah untuk mencari rezeki adalah harus dari arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Sabtu Pon",
              "Menurut isi dari Primbon Jawa mengenai Weton Sabtu Pon dipengaruhi dari Bintang Srengenge (bunga matahari), lakunya air, bercita-cita agung. Weton Sabtu Pon ini memiliki ego yang tinggi dan selalu saja ingin menjadi seorang penguasa di dalam lingkungannnya. Walaupun begitu, anda bukan tipe orang yang sulit jika seseorang yang yang memngecewakan anda, anda cepat memaafkan dan melupakan dengan mudah, namun asalkan mereka mau mengakui kesalahnya dan meminta maaf di kaki anda. Anda suka menghayalkan diri anda menjadi orang kaya dan sangat terkenal. Hal ini bukan berarti anda seorang yang meterialistis. Primbon Jodoh yang paling sesuai adalah dengan kelahiran yang jumlah neptunya kurang dari 16, dibarengi dengan rasa kasih dan sayang yang firasat bathin yang dapat membawakan anda dalam kehidupan anda yang lebih bahagia. Arah rezeki yang baik adalah ke arah Barat, sedangkan kearah yang lain tidak begitu banyak menghasilkan rezeki. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Minggu Wage",
              "Menurut Primbon Jawa, Weton Minggu Wage ini mendapat pengaruh dari bintang uluku/tenggala, lakunya angin, Satria Wibawa, dermawan. Bagi orang yang lahir di hari Minggu Wage memiliki sifat pemurah dan mudah tersentuh hatinya. mereka ini tahu bagaimana cara menghibur orang yang sedang menderita. Weton minggu Wage ini merupakan seorang yang pekerja keras. Tetapi mereka ini memiliki pendirian yang teguh dan juga keras kepala kepada orang yang menentang pendapatnya. Berdasarkan Primbon jodohnya yang cocok dengan seseorang yang neptunya selasa pon, jum&#8217;at wage, minggu pon, rabu legi, senin kliwon, rabu pon, jum&#8217;at kliwon, sabtu legi, minggu pahing, dan sabtu pon. Sedang arah utnuk mencari rezeki yang baik adalah arah Timur dan Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Senin Kliwon",
              "Menurut Weton Senin kliwon ini diayomi oleh bintang pedati, lakunya suatu perjodohan/kecocokan. Prinsip untuk kelahiran Senin Kliwon ini adalah Kehormatan keluarga. Mereka ini dikenal karena pengabdiannya terhadap orang tua, anak, kakak-adik, bahkan keluarga dari jauh. Mereka bersedia mengorbankan apa saja untuk membela keluarganya. Mereka memiliki perasaan yang sangat kuat terhadap asal usulnya, bahkan mungkin terhadap negara tempat lahir mereka. Namun, mereka ini orang yang mudah tersinggung. Terkadang membutuhkan waktu untuk membuat mereka kembali tenang. Walaupun begitu, pada dasarnya mereka yang lahir pada senin kliwon ini mudah memaafkan dan tidak mendendam. Sedangkan menurut Primbon Asmaranya yang baik adalah dengan seseorang yang lahir pada selasa kliwon, jum&#8217;at kliwon, selasa legi, dan jum&#8217;at legi. Arah untuk mencari rezeki yang sesuai adalah ke arah Barat dan ke Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Selasa Legi",
              "Menurut isi Primbon Jawa Weton Selasa Legi dipengaruhi oleh bintang Kuda, lakunya Api, wataknya cepat marah. Pada dasarnya, weton selasa legi ini memiliki kepribadian yang kuat, namun pencemburu. Mereka ini tidak menyukai ada orang yang menghalanginya, dan tidak mau mengalah walaupun dalam hal yang sepele supaya orang lain tidak merasa sakit hati. Sebenarnya Ketenaran orang yang lahir selasa legi ini tidak akan menurun/berkurang, jika saja mereka ini mau belajar sedikit berbagi. Sehingga dorongan untuk berkuasa dapat membuat anda membuang banyak tenaga untuk beradu kekuatan dengan pasangan, teman, atapun yang lainnya. Akan tetapi, meskipun dalam kekurangan, anda merupakan seorang yang jujur dan suka bekerja keras, serta memiliki cita-cita yang tinggi, keinginan yang besar terhadap ilmu pengetahuan. Sedangkan menurut asmaranya yang ideal adalah dengan seseorang yang lahir pada hari selasa dan jum&#8217;at. Arah yang baik untuk mencari rezeki adalah ke arah Timur dan ke Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Rabu Pahing",
              "Berdasarkan Primbon Jawa mengenai weton rabu pahing ini mendapat pengaruh dari bintang Gajah Mina, perilakunya seperti air muka yang jernih yang artinya suka mempertimbangkan segala sesuatunya sebelum melakukan suatu tindakan. Mereka merenungkan segala kemungkinan sampai mereka merasa puas dengan hasil yang dapat dicapai. Mungkin mereka ini terlihat cukup santai, tapi jangan terkecoh. Mungkin saja karena mereka kurang percaya diri sehingga mereka bersikap angkuh. Namun, tidak dapat dipungkiri banyak yang mengatakan bahwa mereka ini tidak suka berbagi dengan orang lain. Mungkin kewaspadaan mereka ini terlihat sangat berlebihan ketika rasa curiga mereka timbul. Mereka ini perlu belajar lagi untuk bisa bersikap lebih santai dan menurunkan kewaspadaan mereka yang berlebihan. Untung saja mereka yang lahir pada rabu pahing ini memiliki prinsip yang baik untuk tidak mencampuri urusan orang lain. Primbon jodohnya yang ideal adalah dengan kelahiran yang neptunya dibawah jumlah 16, dapat tertuang dengan cinta sejati dan akan membawa kebaikan dikemudian hari. Arah unuk mencari rezeki yang sesuai adalah ke arah Barat. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Kamis Pon",
              "Berdasarkan weton kamis pon ini dipengaruhi oleh bintang Bade (sejenis pengusung jenazah) yang dihias rapi, ramah dan lemah lembut. Orang yang lahir pada hari Kamis Pon ini memiliki tujuan yang tinggi dan memiliki cita-cita tinggi dengan berusaha untuk mewujudkannya. mereka yang lahir pada kamis pon ini memiliki pikiran yang cerdas dan rasa ingin tahunya begitu kuat. Meraka ini juga suka mempelajarai sesuatu yang baru untuk mendapatkan wawasan yang luas. Meskipun begitu, kecenderungan mereka untuk berpikir dan bertindak dalam sesuatu yang besar, dengan kebanggaan dan rasa percaya terhadap kekayaan materi dan kepandaian yang dimiliki dapat dengan mudah menjadi kelemahan anda suatu saat nanti. Weton Kamis Pon ini bukanlah tipe orang yang suka mencampuri urusan orang lain dan tidak suka banyak bergaul. Mereka ini merasa sudah cukup puas dengan mengandalkan kemampuan pribadi mereka untuk memahami situasi dan menghindari diri dari pengaruh orang lain. Menurut Primbon jodohnya yang sesuai adalah dengan siapa saja akan memperoleh kebaikan dan kebahagiaan dengan cinta yang tulus serta firasat anda sendiri. Untuk urusan mencari rezeki yang sesuai ke arah barat.",
            ],
            [
              "Jumat Wage",
              "Primbon Jawa Weton Jum&#8217;at Wage berdasarkan jodoh, sifat, watak dan rezekinya adalah orang yang weton Jum&#8217;at Wage dipengaruhi oleh bintangnya Magelut atau berangkul-rangkulan, perilakunya pendeta sakti, memiliki sifat cerdas, tapi pendiam. Mereka ini dikenal sangat mengasihi dan mudah merasa iba kepada sesama manusia, selalu bersedia membantu kepada mereka yang membutuhkan. Orang yang lahir pada hari jum&#8217;at wage memliki karakter yang sangat jujur, memiliki kemurnian hati, dan juga kesetiaan. mereka tidak pernah memamerkan kemampuannya, namun didalam hati anda sesungguhnya merupakan orang yang tegar.  Mereka ini sangat sulit untuk mengubah suatu keputusan yang sudah mereka tetapkan. Keyakinan mereka ini sangat kuat, oleh karena itu mereka perlu belajar untuk menerima saran dari orang lain untuk tujuan yang baik. untuk urusan asmara yang ideal adalah dengan seseorang yang lahir pada Minggu wage, selasa pon, dan jum&#8217;t legi. Kemudian arah yang sesuai untuk mencari rezeki adalah ke arah Timur dan ke Selatan. Weton Kelahiran Dan Perwatakannya.",
            ],
            [
              "Sabtu Kliwon",
              "Dalam primbon jawa orang yang lahir pada sabtu kliwon dipengaruhi oleh bintang pegelangan, lakunya bumi, mereka ini sangat hati-hati dalam tindakannya, sifatya ramah, sopan, dan mudah terkesan, sehingga mereka dengan mudah membuat orang lain merasa nyaman dan betah berada di rumah anda. mereka juga pandai dalam mengucapkan kata yang membuat senang. Mereka ini adalah salah satu orang yang memiliki bakat alamiah dalam hal berbicara dan menulis, sehingga bakat seperti ini dapat dijadikan sebagai pekerjaan. orang yang lahir pada sabtu kliwon ini memperlakukan semua orang dengan baik, bahkan dengan musuh mereka sendiri. Mereka ini bukanlah sebagai seorang yang tegar yang berpegang pada pendirian mereka. Akan lebih baik jika mereka mau mengembangkan sedikit ketegasan dan keberanian, karena mereka cenderung mudah menyerah dan mudah putus asa pada rintangan pertama dan mereka cenderung tidak mau mengambil resiko. Menurut urusan asmaranya yang baik ialah dengan seorang yang lahir rabu pon, kamis legi, dan jum&#8217;at legi. Arah yang baik untuk menambah rezeki adalah ke arah Barat dan Utara. Weton Kelahiran Dan Perwatakannya.",
            ],
          ];
          // array neptu
          var neptu = {
            Senin: { Pon: 11, Wage: 8, Kliwon: 12, Legi: 9, Pahing: 13 },
            Selasa: { Pon: 10, Wage: 7, Kliwon: 11, Legi: 8, Pahing: 12 },
            Rabu: { Pon: 14, Wage: 11, Kliwon: 15, Legi: 12, Pahing: 16 },
            Kamis: { Pon: 15, Wage: 12, Kliwon: 16, Legi: 13, Pahing: 17 },
            Jumat: { Pon: 13, Wage: 10, Kliwon: 14, Legi: 11, Pahing: 15 },
            Sabtu: { Pon: 16, Wage: 13, Kliwon: 17, Legi: 14, Pahing: 18 },
            Minggu: { Pon: 12, Wage: 9, Kliwon: 13, Legi: 10, Pahing: 14 },
          };
          // java month
          var java_months = [
            "Sura",
            "Sapar",
            "Mulud",
            "Bakda Mulud",
            "Jumadil awal",
            "Jumadil akir",
            "Rejeb",
            "Ruwah",
            "Pasa",
            "Sawal",
            "Sela",
            "Besar",
          ];
          // array hijriah
          var hijri_month = [
            "Muharam",
            "Safar",
            "Rabiul awal",
            "Rabiul akhir",
            "Jumadil awal",
            "Jumadil akhir",
            "Rajab",
            "Syakban",
            "Ramadan",
            "Syawal",
            "Zulkaidah",
            "Zulhijah",
          ];
          // array masehi
          var masehi_month = [
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
          var tahunjawa = [
            "Alip",
            "Ehe",
            "Jimawal",
            "Je",
            "Dal",
            "Be",
            "Wawu",
            "Jimakir",
          ];
          //
          var bulan;
          if (this.month == 0) bulan = 1;
          else if (this.month == 0) bulan = 1;
          else if (this.month == 1) bulan = 2;
          else if (this.month == 2) bulan = 3;
          else if (this.month == 3) bulan = 4;
          else if (this.month == 4) bulan = 5;
          else if (this.month == 5) bulan = 6;
          else if (this.month == 6) bulan = 7;
          else if (this.month == 7) bulan = 8;
          else if (this.month == 8) bulan = 9;
          else if (this.month == 9) bulan = 10;
          else if (this.month == 10) bulan = 11;
          else if (this.month == 11) bulan = 12;
          // return bulan;
          const x = hijri.initialize();
          var first_date = new Date(y, bulan, d);
          var first_h = x.toHijri(
            first_date.getDate() +
              "/" +
              first_date.getMonth() +
              "/" +
              first_date.getFullYear(),
            "/"
          );

          var first_tj =
            tahunjawa[
              first_h.year - 1435 - Math.floor((first_h.year - 1435) / 8) * 8
            ];
          // mencari array dataweton
          for (var i = 0; i < dataweton.length; i++) {
            if (dayName + " " + pancawaraName === dataweton[i][0]) {
              // console.log(
              //   dayName + " " + pancawaraName + ": " + dataweton[i][1]
              // );
              this.description = dataweton[i][1];
              // proses hitung tanggal masehi
              // console.log(d + " " + masehi_month[m] + " " + y + " Masehi");
              this.masehi = d + " " + masehi_month[m] + " " + y + " M";
              // proses hitung tanggal hijriah
              // console.log(d + " " + hijri_month[m - 1] + " " + y + " Hijriah");
              this.hijriah =
                first_h.day +
                " " +
                hijri_month[first_h.month - 1] +
                " " +
                y +
                " H";
              // proses hitung tanggal jawa
              this.jawa =
                first_h.day +
                " " +
                java_months[first_h.month - 1] +
                " " +
                (Number(y) + 512) +
                " Ja";
              // proses hitung neptu
              this.neptu = Number(neptu[dayName][pancawaraName]);
              // proses hitung warsa
              this.warsa = first_tj;
            }
          }
          if (dayName + " " + pancawaraName === "Tidak Ada") {
            // console.log(dayName + " " + pancawaraName + ": Tidak ada hasil");
            alert(dayName + " " + pancawaraName + ": Tidak ada hasil");
          }
          return dataweton[i];
        } else {
          this.showWeton = false;
          // console.log(
          //   "Maaf bulan " +
          //     this.month +
          //     " " +
          //     "tidak memiliki tanggal " +
          //     this.days
          // );
          alert(
            "Maaf bulan " +
              this.month +
              " " +
              "tidak memiliki tanggal " +
              this.days
          );
        }
      },
    },
  };
</script>

<style></style>
