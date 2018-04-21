const state = {
    purseVersion: '1.0.0',
    addressListItems: [],
    accountTxList:[],
};

const getters = {
    getPurseVersiont: state => state.purseVersion,
    getAddressList: state => state.addressListItems,
};

const mutations = {
    setAddressList(state,data){
        state.addressListItems = data;
    },
};

const actions = {

};

export default{
  state,
  getters,
  mutations,
  actions
}