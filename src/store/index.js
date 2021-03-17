import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //全局变量！！！！！！！！！！！！！
    token: localStorage.getItem("token"),
    userInfo:JSON.parse(sessionStorage.getItem("userInfo",))
  },
  mutations: {
    //定义方法修改
    //set
    SET_TOKEN:(state,token)=>{
      state.token=token
      localStorage.setItem("token",token)
    },
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo=userInfo
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    REMOVE_INFO:(state)=>{
      state.userInfo= {}
      state.token=''
      sessionStorage.setItem("userInfo",JSON.stringify(''))
      localStorage.setItem("token",'')
    }
  },
  getters:{
    //get
    getUer:state=>{
      return state.userInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
