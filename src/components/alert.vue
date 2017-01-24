<template>
  <div class="easy-alert" v-show="getVisiableState">
    <div class="animated tada">
      <p>{{ title }}</p>
      <p>{{ message }}</p>
      <div class="alert-button" v-if="showCancelButton">
        <div class="cancel-button" v-if="showCancelButton" @click="hideAlert">取消</div>
        <div class="ok-button" v-if="showOkButton" @click="hideAlert">确定</div>
      </div>
      <div class="alert-button" v-if="!showCancelButton">
        <div class="ok-button-only" v-if="showOkButton" @click="hideAlert">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';

  	module.exports = {
  		data: function () {
  			return {

  			}
  		},
      props: {
        title: String,
        message: {
          type: String,
          required: true
        },
        showCancelButton: {
          default: false
        },
        showOkButton: {
          default: true
        }
      },
	    mounted: function () {
				this.$nextTick(function () {

				})
	    },
	    methods: {
          hideAlert: function () {
            this.$store.commit('isShowAlert', false)
          }
	    },
      computed: mapState({
        getVisiableState: function (state) {
          return state.isShow
        }
      })
  	}
</script>

<style>
  .alert-button{
    height: 36px;
    margin-top: 22px;
  }
  .cancel-button{
    float: left;
    text-align: center;
    width: 50%;
    line-height: 36px;
    color: red !important;
    border-bottom-left-radius: 10px;
  }
  .cancel-button:hover{
    color: #fff !important;
    background-color: red;
  }
  .ok-button{
    border-left: 1px solid #ddd;
    text-align: center;
    float: right;
    width: 50%;
    line-height: 36px;
    color: #1abc9c !important;
    border-bottom-right-radius: 10px;
  }
  .ok-button:hover{
    color: #fff !important;
    background-color: #1abc9c;
  }
  .ok-button-only{
    text-align: center;
    float: left;
    width: 100%;
    line-height: 36px;
    background-color: #1abc9c;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .easy-alert{

  }
  .easy-alert-hidden{
    display: none;
  }
  .easy-alert>div{
    width: 240px;
    height: 120px;
    background-color: #fff;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    box-shadow: 1px 1px 20px #bbb;
  }
  .easy-alert>div>p{
    text-align: center;
    margin-bottom: 0;
    border-radius:0 0 10px 10px;
  }
  .easy-alert>div>p:first-child{
    font-size: 20px;
    line-height: 40px;
    color: #1abc9c;
  }
  .easy-alert>div>div:last-child{
    border-top: 1px solid #ddd;
    line-height: 22px;
    /*padding: 2px 0px 0px 0px;*/
    color: #fff;
    /*background-color: #1abc9c;*/
  }
</style>
