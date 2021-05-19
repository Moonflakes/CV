<template>
  <v-container class="support">
    <Menu />
    <Board />
  </v-container>
</template>

<script>
import Menu from "./Menu";
import Board from "./Board";

export default {
  name: "HelloWorld",

  components: {
    Menu,
    Board
  }
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
  margin-top: 50vh; /* poussé de la moitié de hauteur de viewport */
  transform: translateY(-50%);
  padding: unset !important;
  display: flex;
}

.support::after {
  content: "";
  z-index: -3;
  width: 100%;
  height: 673px;
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
.v-card__subtitle {
  color: #cac9e6 !important;
}
.nav-support
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #625df5 !important;
}
</style>
