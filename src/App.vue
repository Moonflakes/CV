<template>
  <v-app>
    <svg
      class="ellipse2"
      width="1000"
      height="900"
      viewBox="0 0 3557 2223"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
      <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1" gradientTransform="rotate(180)">
        <stop offset="-2.56%" stop-color="#e3d1ff"/>
        <stop offset="94.98%" stop-color="#8292fb"/>
      </linearGradient>
  </defs>
      <path
        d="M3556.38 1956.5C3556.38 2555.18 725.961 1956.5 83.3775 1956.5C-559.206 1956.5 2723.38 2124.68 2723.38 1526C2723.38 927.323 2146.29 0 2788.88 0C3431.46 0 3556.38 1357.82 3556.38 1956.5Z"
        fill="url(#Gradient1)"
        fill-opacity="0.3"
      />
    </svg>
    <v-img
      class="ellipse1"
      src="./assets/Ellipse 25.png"
      max-width="400px"
    ></v-img>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style>
.v-application {
  background: linear-gradient(108.83deg, #dee3fe 0%, #566bf4 100%) !important;
}
.ellipse1 {
  position: absolute;
  top: 23%;
  left: 6%;
}
.ellipse2 {
  position: absolute;
  top: 6%;
  right: 6%;
  filter: blur(40px);
}
</style>
