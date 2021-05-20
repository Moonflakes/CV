<template>
  <v-container class="support mt-10">
    <Menu @update-board="updateBoard" />
    <education v-if="boardStatus === 'Éducation'" :education="education" />
    <experience v-if="boardStatus === 'Expérience'" :experience="experience" />
  </v-container>
</template>

<script>
import Menu from "./Menu";
import axios from "axios";
import Education from './Education.vue';
import Experience from './Experience.vue';

export default {
  name: "HelloWorld",

  components: {
    Menu,
    Education,
    Experience
  },
  data() {
    return {
      education: null,
      experience: null,
      boardStatus: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:3600/education")
      .then(response => this.education = response.data)
      .catch(error => console.log(error));
    axios
      .get("http://localhost:3600/experience")
      .then(response => (this.experience = response.data))
      .catch(error => console.log(error));
  },
  // computed: {
  //   boardStatus() {
  //     return this.data 
  //   }
  // },
  methods: {
    updateBoard(e) {
      this.boardStatus = e
    }
  },
};
</script>
<style>
.support {
  background: linear-gradient(
    101.22deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 84px;
  /* margin-top: 50vh;  */
  /* transform: translateY(-50%); */
  padding: unset !important;
  display: flex;
}

.support::after { 
  content: "";
  z-index: -3;
  width: 100%;
  height: auto;
  padding: 1px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 84px;
  background: linear-gradient(
    101.22deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.v-sheet.nav-support {
  border-radius: 84px 0px 0px 84px !important;
}
.v-navigation-drawer {
  background: linear-gradient(
    101.22deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.2) 100%
  ) !important;
}
aside {
  width: 230px !important;
}
.v-list-item {
  justify-content: center;
}
.titleCV {
  text-align: center;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-top: 20px;
}
.textTitle,
.v-list-item__title,
.v-card__title {
  color: #36329f6b !important;
}
.v-list-item__subtitle,
.v-card__subtitle, 
.text-body-2 {
  color: #bdbce5 !important;
}
.nav-support
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #625df5 !important;
}
</style>
