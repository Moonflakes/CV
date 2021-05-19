<template>
  <v-card color="transparent" class="content-support">
    <svg
      class="toc"
      width="360"
      height="360"
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M300 193.125V269.145C300 310.455 213.165 330 165 330C119.22 330 30 309.12 30 269.145V174.735L165 247.68L300 193.125ZM178.755 30L-15 116.25L165 213.75L330 147.495V255H360V131.25L178.755 30ZM375 330H315C323.67 315 330 292.5 330 270H360C360 292.74 365.865 312.885 375 330Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-15"
          y1="115.5"
          x2="375"
          y2="274.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8292FB" />
          <stop offset="0.369792" stop-color="#ACB7FD" />
          <stop offset="1" stop-color="#DEE3FE" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="360" height="360" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <v-container class="pa-10">
      <v-card-text class="text-h4 mb-2 white--text">Éducation</v-card-text>
      <sequential-entrance animation="animate__animated animate__fadeInUp">
        <v-col v-for="(item, i) in education" :key="i" class="mb-3">
          <v-card class="box-content px-6 py-2">
            <v-list-item>
              <v-list-item-title class="text-h6 pt-0">
                {{ item.school }}
              </v-list-item-title>
              <v-list-item-subtitle
                >({{ item.yearFrom }} - {{ item.yearTo }})</v-list-item-subtitle
              ></v-list-item
            >
            <v-chip-group column class="px-4">
              <v-chip
                :ripple="false"
                color="#8e9dfb"
                text-color="white"
                v-for="(skill, index) in item.skills"
                :key="index"
                v-text="skill"
              ></v-chip>
            </v-chip-group>
          </v-card>
        </v-col>
      </sequential-entrance>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {
      education: [
        {
          yearFrom: "2012",
          yearTo: "2015",
          school: "Hero Academy",
          skills: ["Web Development", "Database management", "..."]
        },
        {
          yearFrom: "2012",
          yearTo: "2015",
          school: "Hero Academy",
          skills: ["Web Development", "Database management", "..."]
        }
      ]
    };
  }
};
</script>

<style scoped>
.toc {
  position: absolute;
  top: 0%;
  right: 7%;
  transform: rotate(14deg);
}
.content-support {
  border-radius: 0px 84px 84px 0px !important;
  box-shadow: unset !important;
  width: 100%;
}
.box-content {
  border-radius: 84px !important;
  background: linear-gradient(
    101.22deg,
    rgba(255, 255, 255, 0.808) 0%,
    rgba(255, 255, 255, 0.61) 100%
  ) !important;
  box-shadow: 5px 5px 10px -2px rgb(0 0 0 / 20%) !important;
  backdrop-filter: blur(10px);
}
.text-h6 {
  font-weight: unset !important;
}
</style>
