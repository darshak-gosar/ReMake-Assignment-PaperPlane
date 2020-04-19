import * as constantVal from './Constants';

/**
 * API Call Mounted with Promise and when Promise is returned render the DOM
 */
export const apiCall = async () => {
  //  Mapping API calls to Promise

  const promise = await Promise.all(
    [
      fetch(constantVal.apiURLs[0]),
      fetch(constantVal.apiURLs[1]),
    ])
  return Promise.all(promise.map(p => p.json()))

}