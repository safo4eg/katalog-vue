import productsApi from '@/api/products'

const state = {
    isLoading: false,
    products: null,
    cart: null,
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

    getCartStart(state) {
        state.isLoading = true;
    },

    getCartSuccess(state, responseData) {
        state.isLoading = false;
        state.cart = responseData.data;
    },

    getCartFailure(state) {
        state.isLoading = false;
    },

    deleteProductFromCartStart(state) {
        state.isLoading = true;
    },

    deleteProductFromCartSuccess(state) {
        state.isLoading = false;
    },

    toOrderStart(state) {
        state.isLoading = true;
    },

    toOrderSuccess(state) {
        state.isLoading = false;
    },

    toOrderFailure(state) {
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
               context.dispatch("getCart", {token: payload.userToken});
           });
        });
    },

    getCart(context, payload) {
        context.commit('getCartStart');
        productsApi.getCart(payload.token).then(response => {
           response.text().then(text => {
               if(response.ok) context.commit('getCartSuccess', JSON.parse(text));
               else context.commit('getCartFailure', JSON.parse(text));
           });
        });
    },

    deleteProductFromCart(context, payload) {
        context.commit('deleteProductFromCartStart');
        productsApi.deleteProductFromCart(payload.token, payload.productsId).then(response => {
            context.dispatch("getCart", {token: payload.token});
            context.commit('deleteProductFromCartSuccess');
        });
    },

    toOrder(context, payload) {
        context.commit('toOrderStart');
        return new Promise(resolve => {
            productsApi.toOrder(payload.token).then(response => {
                response.text().then(text => {
                    if(response.ok) {
                        context.commit('toOrderSuccess');
                        resolve();
                    }
                    else context.commit('toOrderFailure');
                })
            });
        });
    }
};


const getters = {
    cartGroups(state) {
        let cartGroups = null;
        if(state.cart !== null) {
            cartGroups = {};
            state.cart.forEach(card => {
                if (cartGroups[card.product_id] === undefined) cartGroups[card.product_id] = [card];
                else cartGroups[card.product_id].push(card);
            });
        }
        return cartGroups;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}