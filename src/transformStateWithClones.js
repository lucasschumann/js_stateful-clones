'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const clone = { ...state };
  const finalArray = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(clone, action.extraData);
      finalArray.push({ ...clone });
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        clone[keyToRemove] = undefined;
      }
      finalArray.push({ ...clone });
    }

    if (action.type === 'clear') {
      for (const key in clone) {
        clone[key] = undefined;
      }
      finalArray.push({ ...clone });
    }
  }

  return finalArray;
}

module.exports = transformStateWithClones;
