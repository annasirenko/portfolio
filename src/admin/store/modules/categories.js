export default {
  namespaced:true,
  state: {
    categories: []
  },
  mutations: {},
  actions: {
    async addCategory(store, title){
      await this.$axios.post("/categories", title);
    }
  }
}