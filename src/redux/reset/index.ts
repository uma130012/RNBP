import {sagaActions} from '../sagaActions';
import {persistor, store} from '../store/store';

export const resetReduxPersistData = () => {
  store.dispatch({type: sagaActions.RESET_STORE, payload: {}});
  persistor.flush().then(() => {
    return persistor.purge();
  });
};
