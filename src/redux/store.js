import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactReduser from "./contactsSlice"
import filterReduser from "./filtersSlice"

const persistConfig = {
    key: "contacts",
    storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactReduser)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filterReduser,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

