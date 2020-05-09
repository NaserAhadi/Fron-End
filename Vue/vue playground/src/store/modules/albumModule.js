import axios from 'axios';

const state = {
    imagesState: []
};

const getters = {
    allImages: state => state.imagesState
};

const actions = {
    async fetchImages({commit}) {
        const response = await axios.get('https://picsum.photos/v2/list');

        commit('setImages', response.data)
    }
};

const mutations = {
    setImages: (state, imagesData) => state.imagesState = imagesData
};


export default {
    state,
    getters,
    actions,
    mutations
}