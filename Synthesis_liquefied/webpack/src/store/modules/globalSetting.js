
const state = {
  drawerState: false,
  asideColor: '#263238',
  aTextColor: '#FFFFFF',
  aActiveColor: '#0E8BE6',
  headerBColor: '#324148',
  headerColor: '#A1A5AF',
  // doubleOpen: false
}

const getters = {
  openDrawer: state => {
    return state.drawerState
  },
  AsideColor: state => {
    return state.asideColor
  },
  ATextColor: state => {
    return state.aTextColor
  },
  ActiveColor: state => {
    return state.aActiveColor
  },
  HeaderBColor: state => {
    return state.headerBColor
  },
  HeaderColor: state => {
    return state.headerColor
  },
  DoubleOpen: state => {
    return state.doubleOpen
  }
}

const mutations = {
  asideChange(state, changeColor) {
    state.asideColor = changeColor
  },
  textChange(state, changeColor) {
    state.aTextColor = changeColor
  },
  activeChange(state, changeColor) {
    state.aActiveColor = changeColor
  },
  headerBChange(state, changeColor) {
    state.headerBColor = changeColor
  },
  headerChange(state, changeColor) {
    state.headerColor = changeColor
  },
  valueChange(state, changeValue) {
    state.doubleOpen = changeValue
  },
  setDrawerState(state, value) {
    state.drawerState = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}