<template>
  <div>
    <bar-top :show-refesh-icon="false" :show-return-icon="true" :show-write-icon="false"></bar-top>
    <!-- <text-content></text-content> -->
    <div class="movie">
      <div class="movie-title">{{content.title}}</div>
      <div class="movie-other-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--{{content.alt_title}}</div>
      <div class="movie-brief">
        <div class="movie-left">
          <img class="movie-img" v-bind:src="content.image">
        </div>
        <div class="movie-right">
          <div>导演:<a v-for="director in attrs.director">{{director}}</a></div>
          <div>编剧:<a v-for="writer in attrs.writer">{{writer}}</a></div>
          <div>主演:<a v-for="(cast, index) in attrs.cast" v-if="index < 3">{{cast}}</a></div>
          <div>评分:{{rating.average}} / {{rating.max}}</div>
        </div>
      </div>
      <p class="movie-summary">{{content.summary}}</p>
    </div>
  </div>
</template>

<script>
  var barTop  = require('../components/barTop.vue');
  // var text = require('../components/text.vue');

  module.exports = {
    data: function() {
        return {
            movieId: "",
            content: {},
            rating: {},
            attrs: {}
        }
    },
    components:{
      'bar-top':barTop
      // 'text-content':text,
    },
    mounted: function() {
        this.movieId = this.$route.params.id
        console.log(this.$route.params.id)
        this.$nextTick(function() {
            this.fetchData()
        })
    },
    methods:{
      fetchData: function(movieId) {
          this.$Progress.start()
          this.$http.jsonp('https://api.douban.com/v2/movie/' + this.movieId, {}, {
            headers: {
            },
            emulateJSON: true
          }).then(function(response) {
            this.content = response.data
            this.rating = response.data.rating
            this.attrs = response.data.attrs
            this.$Progress.finish()
          }, function(err) {
            console.log(err)
            this.$Progress.fail()
          })
      }
    }
  }
</script>

<style>
  .movie{
    height: 100%;
    position: absolute;
    overflow: auto;
  }
  .movie-title{
    margin-top: 70px;
    margin-bottom: 6px;
    font-size: 24px;
  }
  .movie-other-title{
    margin-bottom: 15px;
    font-size: 20px;
  }
  .movie-brief{
    width: 100%;
    display: flex;
  }
  .movie-left{
    width: 50%;
    float: left;
  }
  .movie-right{
    width: 50%;
    float: right;
  }
  .movie-img{
    width: 150px;
    height: 200px;
  }
  .movie-summary{
    padding-top: 10px;
    font-size: 15px;
    color: black;
    line-height: 1.5;
  }
</style>
