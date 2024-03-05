/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:19:51
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 18:16:25
 * @ Description:
 */

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
