'use strict';

import createHistory from 'history/createBrowserHistory';
import { parse as parseQueryString } from 'querystring';

const browserHistory = createHistory();

function addLocationQuery(historyObject) {

  historyObject.location = Object.assign(
    historyObject.location,
    { query: parseQueryString(historyObject.location.search.slice(1)) }
  );

}

addLocationQuery(browserHistory);

browserHistory.listen(() => addLocationQuery(browserHistory));

export default browserHistory;
