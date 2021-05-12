<template>
  <v-container>
    <v-card
      elevation="0"
      width="256"
      color="transparent"
      height="673px"
      class="contai"
    >
      <v-navigation-drawer
        permanent
      >
      <template v-slot:prepend>
          <v-list-item>
            <v-list-item-avatar size="100">
              <img src="./../assets/Avatar mt.png" />
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item two-line class="titleCV">
            <v-list-item-content>
              <v-list-item-title>Margot THIERY</v-list-item-title>
              <v-list-item-subtitle>Développeuse Frontend</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>
        <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            class="testlit"
            link
          >
            <v-list-item-icon>
              <v-img :src="item.icon" width="24"></v-img>
            </v-list-item-icon>

            <v-list-item-content class="textTitle">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      { title: "Éducation", icon: require('./../assets/education.png')},
      { title: "Expériences", icon: require("./../assets/experiences.png") },
      { title: "Jeux", icon: require("./../assets/games.png") }
    ]
  })
};
</script>
<style>
.container {
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
}

.container::after {
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
.v-sheet.v-card {
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
.textTitle, .v-list-item__title {
  color: hsl(242deg 52% 41% / 42%) !important;
}
.v-list-item__subtitle{
  color: #cac9e6 !important;
}
.contai .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #625df5 !important;
}
</style>
