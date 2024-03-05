import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {English} from './english';
import {Burmese} from './burmese';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: English},
    bu: {translation: Burmese},
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
