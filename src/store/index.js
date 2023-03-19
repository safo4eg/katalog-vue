import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import products from '@/store/modules/products'

export default createStore({
  modules: {
    auth,
    products
  }
})
