import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { API } from '../api/pokemon'

export const store = configureStore({
  reducer: {
    pokemon: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
})

setupListeners(store.dispatch)
