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
    },

    addProductToCartStart(state) {
        state.isLoading = true;
    },

    addProductToCartSuccess() {
        state.isLoading = false;
    },

    addProductToCartFailure() {
        state.isLoading = false;
    }
};

const actions = {
    getProducts(context) {
        context.commit('getProductsStart');
        productsApi.getProducts().then(response => {
           response.text().then(text => {
               if(response.ok) context.commit('getProductsSuccess', JSON.parse(text));
               else context.commit('getProductsFailure', JSON.parse(text));
           });
        });
    },

    addProductToCart(context, payload) {
        context.commit('addProductToCartStart');
        productsApi.addProductToCart(payload.userToken, payload.id).then(response => {
           response.text().then(text => {
               console.log(text);
           });
        });
    },
};

export default {
    state,
    mutations,
    actions,
}