import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  RawAxiosRequestHeaders,
} from 'axios';
import {ToastMessage} from '../../components';
import {resetReduxPersistData} from '../../redux/reset';
import {setLoading} from '../../redux/slices';
import {store} from '../../redux/store/store';
import {Urls} from './urls';

/**
 * Enum representing different content types for HTTP requests.
 * @enum {string}
 */
enum ContentType {
  multipart = 'multipart/form-data',
  regular = 'application/json',
}

/**
 * Generates headers for Axios HTTP requests based on specified options.
 *
 * @param {boolean} [isMultipart=false] - Indicates whether the request is multipart/form-data.
 * @returns {RawAxiosRequestHeaders | AxiosHeaders} The headers to be used in the Axios request.
 */
const configHeader = (
  isMultipart: boolean = false,
): RawAxiosRequestHeaders | AxiosHeaders => {
  // Retrieve the access token from the Redux store
  const accessToken = ''; //store.getState().user.auth.token;

  // Construct the Authorization header with the access token (if available)
  const token = accessToken ? `Bearer ${accessToken}` : '';

  // Determine the content type based on the isMultipart flag
  const contentType = isMultipart ? ContentType.multipart : ContentType.regular;

  // Return the headers object
  return {
    Accept: contentType, // Specify the Accept header based on content type
    Authorization: token, // Include the Authorization header with the access token
    'Content-Type': contentType, // Specify the Content-Type header based on content type
    'Cache-Control': 'no-store', // Add Cache-Control header to prevent caching
  };
};

/**
 * Handles the response from an Axios HTTP request, including error handling and displaying messages.
 * @param {AxiosResponse} response - The Axios response object.
 */

const handleStatusResponse = (response: AxiosResponse) => {
  // Extract status and data from the Axios response
  const {status, data, config} = response;
  console.log('API NAME:~', config.url, status);

  // Show error message to the user if requested
  // Show error message to the user if requested
  if (data?.error === true) {
    ToastMessage({type: 'error', title: 'Error', message: data.message}); // You may need to adjust this based on your application's UI framework
  }

  // Switch based on HTTP status code
  switch (status) {
    case 200: // Success ~ OK
      break;
    case 400: // Bad Request
      console.error('Bad Request: ', data);
      break;
    case 401: // Unauthorized
    case 403: // Forbidden
      // Logout the user and clear persisted data
      resetReduxPersistData();
      console.error('Unauthorized: ', data);
      break;
    case 404: // Not Found
      console.error('Not Found: ', data);
      break;
    case 408: // Request Timeout
    case 504: // Gateway Timeout
      console.error('Timeout: ', data);
      break;
    default: // Other HTTP error
      console.error(`HTTP Error (${status}): `, data);
      break;
  }
};

/**
 * Handles API response errors based on HTTP status codes.
 *
 * @param {AxiosError} error - The Axios error object.
 */
const handleApiError = (error: AxiosError) => {
  // Check if the error has a response (HTTP error)
  if (error.response) {
    const response = error.response;
    // Handle specific HTTP error codes here
    handleStatusResponse(response);
  } else {
    // Network error or other non-HTTP error
    console.error('Network Error: ', error.message);
  }
};

/**
 * Generic method for making API requests.
 * @param {string} baseURL - The base URL for the API.
 * @param {Method} method - The HTTP request method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} url - The relative API endpoint URL.
 * @param {object} data - The request payload (optional).
 * @param {boolean} [isLoader=true] - Whether to show a loading indicator during the request (optional).
 * @param {boolean} [isMultipart=false] - Whether the request is a multipart/form-data request (optional).
 * @param {RawAxiosRequestHeaders | AxiosHeaders} headers - The request headers (optional).
 * @returns {Promise} A Promise that resolves with the response data or rejects with an error.
 * @throws {Error} Throws an error if the request fails.
 */

interface RequestParams {
  baseURL?: string;
  method?: Method;
  url: string;
  data?: any;
  isLoader?: boolean;
  isMultipart?: boolean;
}

const timeout = 120000;

export const makeApiRequest = async ({
  url,
  data,
  baseURL = Urls.baseUrl,
  method = 'GET',
  isLoader = true,
  isMultipart = false,
}: RequestParams) => {
  const headers = configHeader(isMultipart);
  isLoader && store.dispatch(setLoading(true));
  const requestConfig: AxiosRequestConfig = {
    url,
    method,
    baseURL,
    data,
    headers,
    timeout,
  };
  return await axios(requestConfig)
    .then(response => {
      isLoader && store.dispatch(setLoading(false));
      handleStatusResponse(response);
      return response.data;
    })
    .catch(error => {
      isLoader && store.dispatch(setLoading(false));
      handleApiError(error);
      return error;
    });
};
