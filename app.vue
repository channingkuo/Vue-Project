<template>
  <div>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <!-- <transition name="slide-fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<style>
  [v-cloak] {
    display: none;
  }
  ::-webkit-scrollbar {
   width: 0;
  }
</style>
