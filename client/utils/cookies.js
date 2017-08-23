
import Cookies from 'js-cookie';

let CookiesTools = {

  set: function(key, value, opts) {
    Cookies.set(key, value, opts);
  },

  get: function(key) {
    return Cookies.get(key);
  },

  remove: function(key) {
    Cookies.remove(key);
  }
};

export default CookiesTools;
