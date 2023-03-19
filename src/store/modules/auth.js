import authApi from "@/api/auth";

const state = {
    isSubmitting: false,
    validationErrors: null,
    currentUser: null,
    isLoggedIn: false,
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },

    registerSuccess(state, user) {
        state.isSubmitting = false;
        state.currentUser = user.data;
        state.isLoggedIn = true;
    },

    registerFailure(state, errors) {
        state.validationErrors = errors.error.errors;
        state.isSubmitting = false;
    },

    loginStart(state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },

    loginSuccess(state, user) {
        state.isSubmitting = false;
        state.currentUser = user.data;
        state.isLoggedIn = true;
    },

    loginFailure(state, errors) {
        state.isSubmitting = false;
        let errorsObj = {
            message: [errors.error.message]
        }
        state.validationErrors = errorsObj;
    },

    logoutStart(state) {
        state.isSubmitting = true;
        state.isLoggedIn = null;
    },

    logoutSuccess(state) {
        state.isSubmitting = false;
        state.currentUser = null;
        state.isLoggedIn = false;
    }
}

const actions = {
    register(context, formDate) {
        context.commit('registerStart');
        return new Promise(resolve => {
            authApi.register(formDate).then(response => {
                response.text().then(responseText => {
                    if(response.ok) {
                        context.commit('registerSuccess', JSON.parse(responseText))
                        resolve();
                    }
                    else context.commit('registerFailure', JSON.parse(responseText));
                });
            });
        });
    },

    login(context, formData) {
        context.commit('loginStart');
        return new Promise(resolve => {
            authApi.login(formData).then(response => {
                response.text().then(responseText => {
                    if(response.ok) {
                        context.commit('loginSuccess', JSON.parse(responseText));
                        resolve();
                    }
                    else context.commit('loginFailure', JSON.parse(responseText));
                });
            });
        })
    },

    logout(context, payload) {
        context.commit('logoutStart');
        return new Promise(resolve => {
            authApi.logout(payload.token).then(response => {
                response.text().then(responseText => {
                    if(response.ok) {
                        context.commit('logoutSuccess', JSON.parse(responseText));
                        resolve();
                    }
                });
            });
        })
    }
}

const getters = {
    isAnonymous(state) {
        return state.isLoggedIn == false;
    },

    userToken(state) {
        if(state.currentUser !== null) {
            return state.currentUser['user_token'];
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}