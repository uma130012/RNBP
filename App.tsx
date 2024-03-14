/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-04 12:46:10
 * @ Modified by: Uma
 * @ Modified time: 2024-03-14 14:50:54
 * @ Description:
 */

import React, {useCallback} from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import i18next from './src/i18/i18next.config';
import {Router} from './src/navigation';
import {persistor, store} from './src/redux/store/store';
function App(): JSX.Element {
  const onLoad = useCallback(() => {
    i18next.changeLanguage(store.getState().setting.selectedLanguage);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={onLoad}>
        <Router />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

export default App;
