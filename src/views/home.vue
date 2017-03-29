<template>
  <div>
    <bar-top :show-refesh-icon="true" :show-return-icon="false" :show-write-icon="true" v-bind:navTitle="navTitle"></bar-top>
    <div class="content-style">This is Home Page</div>
    <input type="text" v-model="msg">
    <br>
    <child :inputValue="msg"></child>
    <!-- <card></card> -->
    <bar-bottom></bar-bottom>
    <alert :title="alertTitle" :message="alertMessage" :show-ok-button="true"></alert>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  var card = require('../components/card.vue');
  var barBottom  = require('../components/barBottom.vue');
  var alert  = require('../components/alert.vue');

  module.exports = {
    data(){
      return {
        navTitle: "Home",
        alertTitle: "Test",
        alertMessage: "Hello Vue ~",
        msg: '请输入'
      }
    },
    components:{
      'bar-top':barTop,
      'card':card,
      'alert':alert,
      'bar-bottom':barBottom,
      'child': require('../components/Child.vue')
    },
    methods:{

    }
  }
</script>

<style>
  .content-style{
    margin-top: 80%;
    text-align: center;
  }
</style>
