import fetch from 'isomorphic-fetch';
import { encode } from 'querystring';


export function request(options) {
  options = {url: '', method: 'GET', headers: {}, params: {}, body: {}, ...(options || {})};

  let querystring = encode(options.params);
  if (querystring) options.url = options.url + '?' + querystring;

  let opts = {
    method: options.headers.method,
    headers:options.headers,
  };
  if (options.method == 'POST') opts['body'] = JSON.stringify(options.body);

  return fetch(options.url, opts)
    .then(response => response.json())
    .catch(error => error)
}
