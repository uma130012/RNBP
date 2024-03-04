import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import createSagaMiddleware, {AnyAction} from 'redux-saga';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';
import {sagaActions} from '../sagaActions';
import rootSaga from '../saga';
import {userReducer} from '../slices';

const reducers = combineReducers({
  user: userReducer,
});

// reset the state of a redux store
const rootReducer = (
  state: ReturnType<typeof reducers> | undefined,
  action: AnyAction,
) => {
  if (action.type === sagaActions.RESET_STORE) {
    state = undefined;
  }
  return reducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'wallet', 'setting', 'currency'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
