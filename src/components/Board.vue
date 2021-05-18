<template>
  <v-card color="transparent" class="content-support">
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

<style lang="scss" scoped></style>
