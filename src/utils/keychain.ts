/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-02-27 12:05:11
 * @ Modified by: Uma
 * @ Modified time: 2024-03-11 11:34:12
 * @ Description:
 */

import * as Keychain from 'react-native-keychain';

/**
 * Sets data to the Keychain using the provided key, value, and service.
 *
 * @param {string} key - The key under which to store the data in the Keychain.
 * @param {string | object} value - The value to be stored in the Keychain.
 * @param {string} service - The service or application identifier associated with the stored data.
 * @returns {Promise<false | Keychain.Result | undefined>} A promise that resolves when the operation is successful.
 * @throws {Error} Throws an error if there is an issue setting the data to the Keychain.
 *
 * @example
 * // Example usage:
 * try {
 *   await setDataToKeychain('username', 'john_doe', 'myApp');
 *   console.log('Data successfully set to Keychain');
 * } catch (error) {
 *   console.error('Error setting data to Keychain:', error);
 * }
 */

const setDataToKeychain = async (
  key: string,
  value: string | object,
  service: string,
): Promise<false | Keychain.Result | undefined> => {
  try {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    const result = await Keychain.setGenericPassword(key, value, {
      service: service,
    });
    return result;
  } catch (error) {
    console.log('Error', error);
  }
};

/**
 * Retrieves data from the Keychain associated with the specified service.
 *
 * @param {string} service - The service or application identifier associated with the stored data.
 * @returns {Promise<unknown>} A promise that resolves with the retrieved data when successful.
 * @throws {Error} Throws an error if there is an issue retrieving data from the Keychain.
 *
 * @example
 * // Example usage:
 * try {
 *   const data = await getDataFromKeychain('myApp');
 *   if (data) {
 *     console.log(`Retrieved value from Keychain: ${data}`);
 *   } else {
 *     console.log('Key not found in Keychain');
 *   }
 * } catch (error) {
 *   console.error('Error retrieving data from Keychain:', error);
 * }
 */

const getDataFromKeychain = async (service: string): Promise<unknown> => {
  try {
    const result = await Keychain.getGenericPassword({service: service});
    if (result) {
      const data = isJsonString(result.password);
      return data;
    } else {
      console.log('Error', 'Key not found');
    }
    return result;
  } catch (error) {
    console.log('Error', 'Failed to retrieve value for service');
  }
};

/**
 * Resets generic passwords stored in the device's keychain for all services.
 * @async
 * @function
 * @returns {Promise<void>} A Promise that resolves when the keychain reset is complete.
 * @throws {Error} Throws an error if there is any issue during the keychain reset process.
 * @example
 * // Example usage:
 * try {
 *   await resetKeychain();
 *   console.log('Keychain reset successful');
 * } catch (error) {
 *   console.error('Error resetting keychain:', error);
 * }
 */

const resetKeychain = async (): Promise<void> => {
  try {
    const allServiceResult = await Keychain.getAllGenericPasswordServices();
    if (allServiceResult.length > 0) {
      for (let service of allServiceResult) {
        const resetResult = await Keychain.resetGenericPassword({
          service: service,
        });
        console.log('Reset Keychain Service:', service, resetResult);
      }
    }
  } catch (error) {
    console.log('Reset Keychain Error:', error);
  }
};

/**
 * Checks if a given string is a valid JSON string and returns the result.
 *
 * @param {string} value - The string to be checked for JSON validity.
 * @returns {{ isJson: boolean; data: unknown }} An object indicating whether the string is a valid JSON.
 *
 * @example
 * // Example usage:
 * const jsonString = '{"key": "value"}';
 * const result = isJsonString(jsonString);
 * if (result.isJson) {
 *   console.log('Valid JSON. Parsed data:', result.data);
 * } else {
 *   console.error('Not a valid JSON string.');
 * }
 */

const isJsonString = (value: string): {data: unknown} => {
  try {
    const json = JSON.parse(value);
    if (typeof json === 'object') {
      return {data: json};
    } else {
      return {data: value};
    }
  } catch (e) {
    return {data: null};
  }
};

export {setDataToKeychain, getDataFromKeychain, resetKeychain};
