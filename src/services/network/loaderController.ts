import {decrementLoading, incrementLoading} from '../../redux/slices/loader';
import {store} from '../../redux/store/store';

/**
 * Call this to increment the global loading count.
 */
export const startGlobalLoading = () => {
  store.dispatch(incrementLoading());
};

/**
 * Call this to decrement the global loading count.
 */
export const stopGlobalLoading = () => {
  store.dispatch(decrementLoading());
};
