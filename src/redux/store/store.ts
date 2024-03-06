/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:20:38
 * @ Modified by: Uma
 * @ Modified time: 2024-03-06 17:32:56
 * @ Description:
 */

/**
 * @fileOverview Redux Store Configuration
 * @module Store
 */

import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import createSagaMiddleware, {AnyAction} from 'redux-saga';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';
import {sagaActions} from '../sagaActions';
import rootSaga from '../saga';
import {loaderReducer, settingsReducer, userReducer} from '../slices';

/**
 * Root reducers combining different slices of the Redux store.
 */
const reducers = combineReducers({
  user: userReducer,
  setting: settingsReducer,
  loader: loaderReducer,
});

/**
 * Root reducer function that handles resetting the state of the Redux store.
 * @param {ReturnType<typeof reducers>} state - The current state of the Redux store.
 * @param {AnyAction} action - The Redux action being dispatched.
 * @returns {ReturnType<typeof reducers>} The updated state of the Redux store.
 */

const rootReducer = (
  state: ReturnType<typeof reducers> | undefined,
  action: AnyAction,
): ReturnType<typeof reducers> => {
  if (action.type === sagaActions.RESET_STORE) {
    state = undefined;
  }
  return reducers(state, action);
};

/**
 * Configuration for persisting the Redux store using AsyncStorage.
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'setting'],
};

/**
 * Persisted root reducer with the specified configuration.
 */

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Middleware for handling Redux Sagas.
 */

const sagaMiddleware = createSagaMiddleware();

/**
 * Redux store configuration using persistedReducer and sagaMiddleware.
 */

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(
      sagaMiddleware,
    ),
});

/**
 * Running the root saga with the configured saga middleware.
 */

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
