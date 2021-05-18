<template>
  <v-app>
    <page-loader />
    <svg
      class="ellipse2"
      width="1000"
      height="900"
      viewBox="0 0 3557 2223"
      fill="none"
    >
      <defs>
        <linearGradient
          id="Gradient1"
          x1="0"
          x2="0"
          y1="0"
          y2="1"
          gradientTransform="rotate(180)"
        >
          <stop offset="-2.56%" stop-color="#e3d1ff" />
          <stop offset="94.98%" stop-color="#8292fb" />
        </linearGradient>
      </defs>
      <path
        d="M3556.38 1956.5C3556.38 2555.18 725.961 1956.5 83.3775 1956.5C-559.206 1956.5 2723.38 2124.68 2723.38 1526C2723.38 927.323 2146.29 0 2788.88 0C3431.46 0 3556.38 1357.82 3556.38 1956.5Z"
        fill="url(#Gradient1)"
        fill-opacity="0.3"
      />
    </svg>
    <svg
      class="round"
      width="2108"
      height="2108"
      viewBox="0 0 2108 2108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1054" cy="1054" r="1054" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1973.78"
          y1="268.076"
          x2="490.934"
          y2="2167.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DEE3FE" />
          <stop offset="1" stop-color="#DEE3FE" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <v-img
      class="ellipse1"
      src="./assets/Ellipse 25.png"
      max-width="400px"
    ></v-img>
    <v-main>
      <HelloWorld />
    </v-main>

    <v-footer padless app>
      <v-col class="text-center" cols="12">
        {{ currentDate() }} — Built with <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PageLoader from "./components/PageLoader.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    PageLoader
  },
  methods: {
    currentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      return today
    }
  }
};
</script>
<style>
/* html,
body,
.v-application,
.v-main {
  height: 100% !important;
} */
.v-application {
  background: linear-gradient(108.83deg, #dee3fe 0%, #566bf4 100%) !important;
}
.ellipse1 {
  position: absolute;
  top: 23%;
  left: 2%;
}
.ellipse2 {
  position: absolute;
  top: 6%;
  right: 6%;
  filter: blur(40px);
}
.round {
  position: absolute;
  width: 600px;
  right: -8%;
  top: -76%;
}
.v-footer {
  background: transparent !important;
}
</style>
