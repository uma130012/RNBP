import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {ToastMessage} from '../../components';
import {resetReduxPersistData} from '../../redux/reset';
import {getHeaders, TIMEOUT} from './config';
import {startGlobalLoading, stopGlobalLoading} from './loaderController';
import {RequestParams} from './types';
import {Urls} from './urls';

/**
 * ApiService is a wrapper around Axios for handling HTTP requests
 * with centralized error handling, status checking, and loader state.
 */
export class ApiService {
  /**
   * Makes an HTTP request with the given configuration.
   *
   * @param {RequestParams} params - The request configuration object.
   * @param {string} params.url - The endpoint URL (relative).
   * @param {string} [params.baseURL=Urls.baseUrl] - The base URL for the request.
   * @param {any} [params.data={}] - The data to be sent in the request body.
   * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [params.method='GET'] - HTTP method.
   * @param {boolean} [params.isLoader=true] - Whether to show/hide global loader.
   * @param {boolean} [params.isMultipart=false] - Whether the request is multipart/form-data.
   * @returns {Promise<any>} - The response data.
   * @throws Will throw an error if the request fails.
   */

  static async request({
    url,
    baseURL = Urls.baseUrl,
    data = {},
    method = 'GET',
    isLoader = true,
    isMultipart = false,
  }: RequestParams): Promise<any> {
    const headers = getHeaders(isMultipart);

    const config: AxiosRequestConfig = {
      url,
      method,
      baseURL,
      headers,
      data,
      timeout: TIMEOUT,
    };

    if (isLoader) startGlobalLoading();

    try {
      const response = await axios(config);
      this.handleStatusResponse(response);
      return response.data;
    } catch (error: unknown) {
      this.handleError(error as AxiosError);
      throw error;
    } finally {
      if (isLoader) stopGlobalLoading();
    }
  }

  /**
   * Shortcut for making GET requests.
   *
   * @param {string} url - The endpoint URL.
   * @returns {Promise<any>} - The response data.
   */
  static get({url, isLoader = true}: RequestParams): Promise<any> {
    return this.request({url, method: 'GET', isLoader});
  }

  /**
   * Shortcut for making POST requests.
   * @param {string} url - The endpoint URL.
   * @returns {Promise<any>} - The response data.
   */
  static post({
    url,
    data,
    isLoader = true,
    isMultipart = false,
  }: RequestParams): Promise<any> {
    return this.request({url, data, method: 'POST', isLoader, isMultipart});
  }

  /**
   * Shortcut for making PUT requests.
   * @param {string} url - The endpoint URL.
   * @returns {Promise<any>} - The response data.
   */
  static put({url, data, isLoader = true}: RequestParams): Promise<any> {
    return this.request({url, data, method: 'PUT', isLoader});
  }

  /**
   * Shortcut for making DELETE requests.
   * @param {string} url - The endpoint URL.
   * @returns {Promise<any>} - The response data.
   */
  static delete({url, isLoader = true}: RequestParams): Promise<any> {
    return this.request({url, method: 'DELETE', isLoader});
  }

  /**
   * Uploads a file using multipart/form-data.
   * @param {string} url - The endpoint URL.
   * @returns {Promise<any>} - The response data.
   */
  static upload({url, data, isLoader = true}: RequestParams): Promise<any> {
    return this.request({
      url,
      data,
      method: 'POST',
      isLoader,
      isMultipart: true,
    });
  }

  /**
   * Handles HTTP response statuses and shows toast or logs errors accordingly.
   *
   * @param {AxiosResponse} response - The Axios response object.
   */

  private static handleStatusResponse(response: AxiosResponse) {
    const {status, data, config} = response;

    if (__DEV__) {
      console.log('API:', config.url, 'Status:', status);
    }

    if (data?.error) {
      ToastMessage({type: 'error', title: 'Error', message: data.message});
    }
    switch (status) {
      case 200:
        break;
      case 400:
        console.error('Bad Request:', data);
        break;
      case 401:
      case 403:
        resetReduxPersistData();
        console.error('Unauthorized:', data);
        break;
      case 404:
        console.error('Not Found:', data);
        break;
      case 408:
      case 504:
        console.error('Timeout:', data);
        break;
      default:
        console.error(`HTTP ${status}:`, data);
        break;
    }
  }

  /**
   * Handles errors from Axios requests.
   *
   * @param {AxiosError} error - The error object caught in try/catch.
   */

  private static handleError(error: AxiosError) {
    if (error.response) {
      ApiService.handleStatusResponse(error.response);
    } else {
      console.error('Network Error:', error.message);
      ToastMessage({
        type: 'error',
        title: 'Network Error',
        message: error.message,
      });
    }
  }
}

/**
 * ===============================================================
 * 📘 USAGE EXAMPLES FOR ApiService
 * ===============================================================
 *
 * ✅ 1. Async/Await Usage (in React Components or Services)
 * ---------------------------------------------------------------
 *
 * // GET Request
 * const fetchProfile = async () => {
 *   try {
 *     const response = await ApiService.get({ url: '/user/profile' });
 *     console.log('User Profile:', response);
 *   } catch (error) {
 *     console.error('Fetch Error:', error);
 *   }
 * };
 *
 * // POST Request
 * const loginUser = async () => {
 *   try {
 *     const response = await ApiService.post({
 *       url: '/auth/login',
 *       data: { email: 'user@example.com', password: 'password123' },
 *     });
 *     console.log('Login Success:', response);
 *   } catch (error) {
 *     console.error('Login Error:', error);
 *   }
 * };
 *
 * // PUT Request
 * const updateUser = async () => {
 *   try {
 *     const response = await ApiService.put({
 *       url: '/user/update',
 *       data: { name: 'Uma Shankar' },
 *     });
 *     console.log('Update Success:', response);
 *   } catch (error) {
 *     console.error('Update Failed:', error);
 *   }
 * };
 *
 * // DELETE Request
 * const deleteUser = async () => {
 *   try {
 *     const response = await ApiService.delete({ url: '/user/123' });
 *     console.log('User Deleted:', response);
 *   } catch (error) {
 *     console.error('Delete Error:', error);
 *   }
 * };
 *
 * // File Upload (multipart/form-data)
 * const uploadProfileImage = async (file: File) => {
 *   const formData = new FormData();
 *   formData.append('image', file);
 *
 *   try {
 *     const response = await ApiService.upload({
 *       url: '/user/upload',
 *       data: formData,
 *     });
 *     console.log('Upload Success:', response);
 *   } catch (error) {
 *     console.error('Upload Failed:', error);
 *   }
 * };
 *
 * ✅ 2. Redux-Saga Usage
 * ---------------------------------------------------------------
 *
 * import { call, put, takeLatest } from 'redux-saga/effects';
 * import ApiService from '../../services/api/ApiService';
 * import { fetchUserSuccess, fetchUserFailure } from '../slices/userSlice';
 *
 * // Example Saga for GET
 * function* fetchUserSaga() {
 *   try {
 *     const response = yield call(ApiService.get, { url: '/user/profile' });
 *     yield put(fetchUserSuccess(response));
 *   } catch (error) {
 *     yield put(fetchUserFailure(error));
 *   }
 * }
 *
 * // Example Saga for POST
 * function* loginSaga(action) {
 *   try {
 *     const response = yield call(ApiService.post, {
 *       url: '/auth/login',
 *       data: action.payload,
 *     });
 *     yield put(loginSuccess(response));
 *   } catch (error) {
 *     yield put(loginFailure(error));
 *   }
 * }
 *
 * export function* userWatcherSaga() {
 *   yield takeLatest('FETCH_USER_REQUEST', fetchUserSaga);
 *   yield takeLatest('LOGIN_REQUEST', loginSaga);
 * }
 *
 * ===============================================================
 */
