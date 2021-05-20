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
          d="M363.151 26.9103C357.554 26.516 352.094 26.334 346.725 26.334C230.382 26.334 164.149 115.029 140.049 186.403L203.992 250.33C277.429 224.031 364 160.256 364 45.1558C364 39.2105 363.636 33.1286 363.151 26.9103ZM210.604 218.693L171.611 179.699C188.127 141.024 235.083 58.6996 336.624 53.634C333.227 131.727 281.964 187.95 210.604 218.693ZM284.618 239.486C277.216 244.537 269.861 249.087 262.596 253.151C260.063 265.194 253.632 278.07 244.32 289.036C244.305 281.24 242.121 273.384 238.314 265.527C231.625 268.561 225.27 271.184 219.189 273.475C228.122 296.589 219.022 313.651 206.813 329.667C224.345 328.348 242.742 319.763 257.227 305.264C272.879 289.627 283.844 267.074 284.618 239.486ZM124.731 151.975C116.89 148.198 109.079 146.06 101.298 146.029C112.158 136.823 124.898 130.423 136.834 127.829C141.08 120.352 145.858 112.981 150.878 105.731C123.29 106.475 100.722 117.47 85.0547 133.107C70.5705 147.591 62.0013 166.004 60.6667 183.521C76.6827 171.297 93.7755 162.197 116.874 171.16C119.225 164.79 121.819 158.39 124.731 151.975ZM229.396 160.938C224.088 155.66 224.088 147.091 229.396 141.813C234.674 136.535 243.228 136.535 248.521 141.813C253.814 147.106 253.814 155.675 248.521 160.953C243.228 166.246 234.674 166.246 229.396 160.938ZM296.341 93.9924C285.785 83.4364 268.647 83.4364 258.091 93.9924C247.52 104.548 247.52 121.702 258.091 132.258C268.647 142.829 285.786 142.829 296.357 132.258C306.898 121.702 306.897 104.548 296.341 93.9924ZM270.513 119.821C266.827 116.121 266.827 110.115 270.513 106.429C274.183 102.728 280.219 102.728 283.935 106.429C287.606 110.115 287.59 116.121 283.935 119.821C280.219 123.507 274.198 123.507 270.513 119.821ZM172.051 256.685C145.752 284.652 116.601 298.955 85.2973 298.955C36.764 298.955 0 263.252 0 218.404C0 195.882 9.26683 171.054 30.9855 147.288C-17.563 225.199 48.0632 300.896 132.511 217.161L144.114 228.763C130.312 244.855 118.922 258.748 99.0535 268.773C119.438 269.637 142.582 257.474 159.978 244.612L172.051 256.685Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="182"
          y1="26.334"
          x2="182"
          y2="329.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8292FB" />
          <stop offset="0.567708" stop-color="#ACB7FD" />
          <stop offset="1" stop-color="#DEE3FE" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="360" height="360" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <v-container class="pa-10">
      <v-card-text class="text-h4 mb-2 white--text">Expériences</v-card-text>
      <sequential-entrance animation="animate__animated animate__fadeInUp">
        <v-col v-for="(item, i) in experience" :key="i" class="mb-3">
          <v-card class="box-content px-6 py-2">
            <v-card-title class="text-h5 pb-0">
              {{ item.company }}
            </v-card-title>
            <div class="d-flex flex-row">
              <v-card-title class="text-h6 pt-0">
                {{ item.role }}
              </v-card-title>
              <v-card-title class="text-body-2 pt-0 "
                >({{ item.dateFrom }} - {{ item.dateTo }})</v-card-title
              >
            </div>
            <v-chip-group column class="px-4">
              <v-chip
                :ripple="false"
                color="#8e9dfb"
                text-color="white"
                v-for="(job, index) in item.jobs"
                :key="index"
                v-text="job"
              ></v-chip>
            </v-chip-group>
            <v-card-text
              v-for="(description, index) in item.description"
              :key="index"
              >{{ description }}</v-card-text
            >
          </v-card>
        </v-col>
      </sequential-entrance>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Experience",
  props: {
    experience: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
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
  font-weight: 900 !important;
}
.text-h5 {
  font-weight: 300 !important;
}
</style>
