import axios from "axios";
// import Vue from "vue";
// import Vuex from "vuex";
import { createStore } from 'vuex';
// Vue.use(Vuex);

const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
// Thiết lập token cho mọi yêu cầu Axios
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const storeData = {
    state: {
        products: [],
        productDetail: {},
        cart:[]
    },
    actions:{
        async getProduct({ commit }) {
            try {
                const response = await axios.get(
                    "/api/get-product"
                );
                commit("SET_PRODUCTS", response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async productDetail({ commit }, id) {
            try {
                const response = await axios.get(
                    `/api/product-detail/${id}`
                );
                // console.log(response)
                commit("SET_PRODUCT_DETAIL", response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async addToCart({ commit }, product) {
            try {
               await axios.post("/api/add-to-cart",product);
                // commit("SET_PRODUCT_DETAIL", response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getToCart({ commit }) {
            try {
                const response = await axios.get("/api/get-to-cart");
                console.log(response.data)
                commit("SET_CART", response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteToCart({ commit },id) {
            try {
                await axios.delete(`/api/delete-to-cart/${id}`);
                commit('DELETE_CART', id);
            } catch (error) {
                console.log(error);
            }
        }
    },
    mutations:{
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCT_DETAIL(state, productDetail) {
            state.productDetail = productDetail;
        },
        SET_CART(state, cartItem) {
            state.cart = cartItem;
        },
        DELETE_CART(state, cartId) {
            state.cart = state.cart.filter(item => item.id !== cartId);
        }
    }
}
// const store = new Vuex.Store(storeData);
const store = createStore(storeData);
export default store;
