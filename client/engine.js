import * as sagaEffects from 'redux-saga/effects';
import { fork, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import services from './models/services';


const models = [
  services
];

export function GetReducersFromModel(model) {

  return (state = model.state, action) => {

    let type = action.type;
    if (type.startsWith(model.namespace)) {
      type = type.substring(model.namespace.length);
    }

    let handler = model.reducers[type];

    if (!handler) {
      return state;
    }

    return handler(state, action);

  };

}

export function GenerateReducers() {

  let reducers = {};

  for (var i = 0; i < models.length; i++) {

    reducers[models[i].namespace] = GetReducersFromModel(models[i]);

  }

  return reducers;
}

export function GetEffectsFromModel(model) {

  return function* () {

    for (let key in model.effects) {

      if (!model.effects.hasOwnProperty(key)) continue;

      let type = key;
      if (type.indexOf('/') < 0) {
        type = model.namespace + '/' + type;
      }

      yield takeEvery(type, function* (action) {
        yield model.effects[key](action, sagaEffects);
      });

    }

  };

}

export function GenerateEffects() {

  return function* effects() {

    let list = [];

    for (var i = 0; i < models.length; i++) {

      list.push(fork(GetEffectsFromModel(models[i])));

    }

    yield list;

  }

}

export function GetSubscriptionsFromModel(model) {

  let results = {};

  for (let key in model.subscriptions) {

    if (!model.subscriptions.hasOwnProperty(key)) continue;

    results[model.namespace + '/' + key] = model.subscriptions[key];

  }

  return results;
}

export function GenerateSubscriptions() {

  let result = {};

  for (var i = 0; i < models.length; i++) {

    result = { ...result, ...GetSubscriptionsFromModel(models[i])};

  }

  return result;

}

export function RunSubscriptions(data) {

  const subscriptions = GenerateSubscriptions();

  let results = {};

  for (let key in subscriptions) {

    if (!subscriptions.hasOwnProperty(key)) continue;

    results[key] = subscriptions[key](data);

  }

  return results;

}
