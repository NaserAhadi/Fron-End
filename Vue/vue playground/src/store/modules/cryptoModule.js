import axios from 'axios'

const state = {
    cryptoState: []
};

const getters = {
    cryptoGetters: (state) => state.cryptoState
};

const actions = {
    async fetchCrypto({commit}) {
        const response = await axios.get(
            'https://api.coinranking.com/v1/public/coins'
        );
        commit('setCrypto', response.data)
    }
};

const mutations = {
    setCrypto: (state, cryptoData) => state.cryptoState = cryptoData
};


export default {
    state,
    getters,
    actions,
    mutations
}
/*
api:
***
this is a good repository for api
https://github.com/public-apis/public-apis
***
https://crunchbase-crunchbase-v1.p.rapidapi.com/odm-organizations
 https://api.coindesk.com/v1/bpi/currentprice.json

https://api.coinranking.com/v1/public/coins

below api is that one but there is no image for bitcoin ...
https://api.coinlore.net/api/tickers/
 */