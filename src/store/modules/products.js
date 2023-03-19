import productsApi from '@/api/products'

const state = {
    isLoading: false,
    products: null
};

const mutations = {
    getProductsStart(state) {
        state.isLoggedIn = true;
    },

    getProductsSuccess(state, responseData) {
        state.isLoggedIn = false;
        state.products = responseData.data;
    },

    getProductsFailure(state, responseData) {
        state.isLoggedIn = false;
    }
};

const actions = {
    getProducts(context) {
        productsApi.getProducts().then(response => {
           response.text().then(text => {
               if(response.ok) context.commit('getProductsSuccess', JSON.parse(text));
               else context.commit('getProductsFailure', JSON.parse(text));
           });
        });
    }
};

export default {
    state,
    mutations,
    actions,
}