var Vue  = require('vue')// get vue
var Vuex = require('vuex')// get vuex

Vue.use(Vuex)

var state = {
  cardData: [],
  isloadingComplete: false,
  busy: false,
  isShow: false
}

var getters = {

}

var mutations = {
  updateLoadingState(state, data){
    state.isloadingComplete = data
  },
  updateBusyState(state, data){
    state.busy = data
  },
  addData(state, data){
    state.cardData = state.cardData.concat(data)
  },
  refreshData(state, data){
    state.cardData = data
  },
  isShowAlert(state, data){
    state.isShow = data
  }
};

var actions = {
  listDataSource(context, object){
      var progress = object.progress
      var isRefresh = object.refresh
      var pageIndex = object.pageIndex
      progress.$Progress.start()
      context.commit('updateLoadingState', false)
      context.commit('updateBusyState', true)

      fetch('http://192.168.1.25:9990/api/BackDoor/OpenBackDoor',
      {
        headers: {
          // 'Access-Control-Allow-Origin': '*'
        },
        mode: 'no-cors'
      }).then(function(resp){
        return resp.json()
      }).then(function(data){
          context.commit('updateLoadingState', true)
          context.commit('updateBusyState', false)
          console.log(data)
          if (isRefresh === true) {
            context.commit('refreshData', data)
          }else {
            context.commit('addData', data)
          }
          progress.$Progress.finish()
      }).catch(function(err){
          console.log(err)
          context.commit('updateBusyState', false)
          progress.$Progress.fail()
      })
  }
  // getData(context, object){
  //   var progress = object.progress
  //   var isRefresh = object.refresh
  //   progress.$Progress.start()
  //   context.commit('updateLoadingState', false)
  //   context.commit('updateBusyState', true)
  //   fetch('/server.php')
  //   .then(function(response) {
  //     return response.json()
  //   }).then(function(json) {
  //     context.commit('updateLoadingState', true)
  //     context.commit('updateBusyState', false)
  //     if (isRefresh === true) {
  //       context.commit('refreshData', json)
  //     }else {
  //       context.commit('addData', json)
  //     }
  //     progress.$Progress.finish()
  //   }).catch(function(ex) {
  //     console.log(ex)
  //     context.commit('updateBusyState', false)
  //     progress.$Progress.fail()
  //   })
  // }
}

var store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})

module.exports = store
