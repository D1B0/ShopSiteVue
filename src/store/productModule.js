import axios from "axios";

export default {
    state: {
        products: [],
        carts: [],
        search: '',

    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },
        setCarts(state, payload) {
            state.carts = payload
        },
        setSearch(state, payload) {
            state.search = payload
        },


    },
    getters: {
        getAllProducts(state) {
            return state.products
        },
        getProductPages: state => limit =>
            Math.ceil(state.products.length / limit),

        getOneProduct: state => id => state.products.find(item => item.id_product === id),

        getCart(state) {
            return state.carts
        },
        getLengthCart(state) {
            return state.carts.length
        },
        getCartCost(state) {
            return state.carts.reduce((totalCost, cartItem) => totalCost + cartItem.price * cartItem.quantity, 0)
        },
        getFilterProduct(state) {
            let regexp = new RegExp(state.search.toLowerCase(), 'i');
            return state.products.filter(el => regexp.test(el.product_name))
        },

    },
    actions: {
        async fetchProducts(context) {
            await axios.get('/api/products')
                .then(response => context.commit("setProducts", response.data))

        },
        async fetchCarts(context) {
            await axios.get('/api/cart')
                .then(response => context.commit("setCarts", response.data))

        },
        postJson(url, data) {
            return fetch('/api/cart', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => {
                result.json()
                this.dispatch('fetchCarts')
            })

                .catch(error => {
                    console.log(error.message)
                });
        },
        putJson(url, data) {
            return fetch(`/api/cart/${data.id_product}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => {
                result.json()
                this.dispatch('fetchCarts')
            })
                .catch(error => {
                    console.log(error.message)
                });
        },
        deleteJson(url, data) {
            return fetch(`/api/cart/${data.id_product}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => {
                result.json()
                this.dispatch('fetchCarts')
            })
                .catch(error => {
                    console.log(error.message)
                });
        },
        takeSearch({commit}, search) {
            commit('setSearch', search)
        },



    }

}