import {ContentType} from './types';
import {store} from '../../redux/store/store';

/**
 * Dynamically generate headers for requests.
 */
export const getHeaders = (isMultipart = false) => {
  const token = ''; //store.getState().user?.auth?.token;
  const authHeader = token ? `Bearer ${token}` : '';
  const contentType = isMultipart ? ContentType.multipart : ContentType.regular;

  const headers: Record<string, string> = {
    Accept: contentType,
    Authorization: authHeader,
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
  };
  return headers;
};

export const TIMEOUT = 120000;
