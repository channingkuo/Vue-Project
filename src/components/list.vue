<template>
    <ul class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <li class="table-view-cell media" v-for="article in articles">
            <router-link class="navigate-right" v-bind:to="{ name: 'detail', params: { id: article.id }}">
                <img class="media-object pull-left" v-bind:src="article.images.medium">
                <div class="media-body">
                    {{article.original_title}}
                    <p>{{article.title}}&nbsp;&nbsp;&nbsp;&nbsp;--年份：{{article.year}}</p>
                </div>
            </router-link>
        </li>
        <div class="nsr-card-loading">
            <nsr-loading :hide-loading="isloadingComplete" :is-end-text="endText"></nsr-loading>
        </div>
    </ul>
</template>

<script>
import {mapState} from 'vuex'

module.exports = {
    data: function() {
        return {
            busy: true,
            isloadingComplete: false,
            articles: [],
            startIndex: 0
        }
    },
    components: {
        'nsr-loading': require('../components/loading.vue'),
    },
    mounted: function() {
        this.$nextTick(function() {
            this.fetchData()
        })
    },
    methods: {
        fetchData: function() {
            this.$Progress.start()
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10&start=' + this.startIndex, {}, {
              headers: {
              },
              emulateJSON: true
            }).then(function(response) {
              if(this.startIndex === 0){
                this.articles = response.data.subjects
              }
              else{
                this.articles = this.articles.concat(response.data.subjects)
              }
              this.busy = false

              this.$Progress.finish()
            }, function(err) {
              console.log(err)

              this.$Progress.fail()
            })
        },
        loadMore: function() {
            this.startIndex += 10
            this.fetchData(this)
        }
    },
    computed: mapState({
        // results: function(state) {
        //     return state.cardData
        // },
        // isloadingComplete: function(state) {
        //     return state.isloadingComplete
        // },
        // busy: function(state) {
        //     return state.busy
        // }
    })
}
</script>

<style>
  .easy-list img{
    width: 42px;
    height: 42px;
  }
</style>
