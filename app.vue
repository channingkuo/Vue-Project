<template>
  <div>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <!-- <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false"> -->
    <transition name="bounce" transition-mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// module.exports = {
//   methods: {
//     beforeEnter: function (el) {
//       el.style.opacity = 0
//       el.style.transformOrigin = 'left'
//     },
//     enter: function (el, done) {
//       Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
//       Velocity(el, { fontSize: '1em' }, { complete: done })
//     },
//     leave: function (el, done) {
//       Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
//       Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
//       Velocity(el, {
//         rotateZ: '45deg',
//         translateY: '30px',
//         translateX: '30px',
//         opacity: 0
//       }, { complete: done })
//     }
//   }
// }
</script>

<style>
  [v-cloak] {
    display: none;
  }
  ::-webkit-scrollbar {
   width: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
