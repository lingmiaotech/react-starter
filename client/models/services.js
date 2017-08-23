
export default {
  namespace: 'services',
  state: {
    list: [],
  },
  reducers: {
    change: (state, { payload: { list: list } }) => {
      return { ...state, list: list };
    },
  },
  effects: {
    fetch: function* (action, { put }) {
      const services = [{name: 'abc'}];
      yield put({ type: 'services/change', services });
    },
    '@@router/LOCATION_CHANGE': function* (action, data) {
    },
  },
  subscriptions: {
  },
};
