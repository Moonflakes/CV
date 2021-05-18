<template>
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
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items: [
        { title: "Éducation", icon: require("./../assets/education.png") },
        { title: "Expériences", icon: require("./../assets/experiences.png") },
        { title: "Jeux", icon: require("./../assets/games.png") }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
