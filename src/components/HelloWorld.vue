<template>
  <v-container class="support">
    <v-card
      elevation="0"
      width="256"
      color="transparent"
      height="673px"
      class="nav-support"
    >
      <v-navigation-drawer permanent>
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
        <v-list dense rounded>
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
    <v-card color="transparent" class="content-support">
      <v-container class="pa-10">
        <v-card-text class="text-h4 mb-2 white--text">Éducation</v-card-text>
        <v-row dense>
          <v-col v-for="(item, i) in education" :key="i" cols="12" class="mb-3">
            <v-card class="box-content px-6 py-2" transition="scroll-y-transition">
              <v-list-item>
                <v-list-item-title class="text-h6 pt-0">
                  {{ item.school }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >({{ item.yearFrom }} - {{ item.yearTo }})</v-list-item-subtitle
                ></v-list-item>
                <v-chip-group column>
                  <v-chip
                    :ripple="false"
                    color="deep-purple accent-4"
                    text-color="white"
                    v-for="(skill, index) in item.skills"
                    :key="index"
                    v-text="skill"
                  ></v-chip>
                </v-chip-group>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      { title: "Éducation", icon: require("./../assets/education.png") },
      { title: "Expériences", icon: require("./../assets/experiences.png") },
      { title: "Jeux", icon: require("./../assets/games.png") }
    ],
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
  })
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
.content-support {
  border-radius: 0px 84px 84px 0px !important;
  box-shadow: unset !important;
}
.box-content {
  border-radius: 84px !important;
  background: linear-gradient(
    101.22deg,
    rgba(255, 255, 255, 0.808) 0%,
    rgba(255, 255, 255, 0.61) 100%
  ) !important;
  box-shadow: 5px 5px 10px -2px rgb(0 0 0 / 20%) !important;
}
.text-h6 {
  font-weight: unset !important;
}
</style>
