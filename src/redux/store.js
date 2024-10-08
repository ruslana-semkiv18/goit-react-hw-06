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
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const persistedContactsReducer = persistReducer(
  {
    key: "user-contacts",
    storage,
    whitelist: ["items"],
  },
  contactsReducer
);

const persistedFilterReducer = persistReducer(
  {
    key: "filter",
    storage,
    whitelist: ["name"],
  },
  filtersReducer
);


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFilterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);