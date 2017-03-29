<template>
  <div>
    <bar-top :show-refesh-icon="true" :show-return-icon="false" :show-write-icon="false" v-bind:navTitle="navTitle" :sss="false"></bar-top>
    <list></list>
    <!-- <keep-alive>
      <component :is="list"></component>
    </keep-alive> -->

    <bar-bottom></bar-bottom>
    <!-- <alert></alert> -->
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue')
  var list = require('../components/list.vue')
  var barBottom  = require('../components/barBottom.vue')
  var alert  = require('../components/alert.vue')

  module.exports = {
    data: function() {
        return {
            navTitle: "豆瓣电影排行榜"
        }
    },
    components:{
      'bar-top':barTop,
      'list':list,
      'alert':alert,
      'bar-bottom':barBottom,
    },
    methods:{

    }//,
    // activated: function (to, from, next) {
    //   console.log(3)
    // },
    // deactivated: function (to, from, next) {
    //   console.log(4)
    // }
  }
</script>

<style>

</style>
