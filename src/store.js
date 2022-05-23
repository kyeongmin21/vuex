import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters: { // computed (computed 와 다른점은 사용하는 값을 쓰기 위해서는 state를 사용할 거라고 function 한테 알려줘야함 ! )
    allUsersCount (state) {
      return state.allUsers.length
    }
  },
  mutations: {

  },
  actions: {

  }
})
