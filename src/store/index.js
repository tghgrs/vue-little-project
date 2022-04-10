import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前题目索引
    currentIndex: 0,
    score: 0,
    questionList: [
      {
        option: [
          '正确',
          '错误',
          '错误',
          '错误'
        ],
        rightOption: 0,
      },
      {
        option: [
          '正确',
          '错误',
          '错误',
          '错误'
        ],
        rightOption: 0,
      },
      {
        option: [
          '正确',
          '错误',
          '错误',
          '错误'
        ],
        rightOption: 0,
      },
      {
        option: [
          '正确',
          '错误',
          '错误',
          '错误'
        ],
        rightOption: 0,
      },
      {
        option: [
          '正确',
          '错误',
          '错误',
          '错误'
        ],
        rightOption: 0,
      },
    ]
  },
  mutations: {
    //选对了,加分
    plus(state) {
      state.score+=20
    },
    //题目+1
    currentIndexPlus(state) {
      state.currentIndex++
    }
  },
  actions: {
  },
  modules: {
  }
})
