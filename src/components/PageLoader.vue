<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false
    };
  },
  mounted() {
    document.onreadystatechange = async() => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(3000);
        if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$colors: #625df5, #8e9dfb, #b4bdf8, #e5e9fa;
// -----------------------------------------------------
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // background-color: #8e8af1;
  z-index: 999;
  animation: fade 5s;
}
// -----------------------------------------------------
.circle {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 100%;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}
// -----------------------------------------------------
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes fade {
  0% {
    background-color: #8e8af1;
  }
  100% {
    background-color: #8e8af100;
  }
}
</style>
