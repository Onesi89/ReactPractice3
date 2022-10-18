import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    version: 1,
    //storage: storage(local), storageSession(session), electronstorage(추가 설치 필요)
    storage: storageSession,
};

// persistReducer : 리덕스를 대체하여 리듀스를 결합하는 방법을 제공합니다.
const persistedReducer = persistReducer(persistConfig, loginSlice.reducer);

const store = configureStore({
    reducer: persistedReducer,
    //알아봐야함
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
