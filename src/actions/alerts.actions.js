import alertConstants from '../constants';

function success(message) {
  return {
    'type': alertConstants.SUCCESS,
    message
  };
}

function failure(message) {
  return {
    'type': alertConstants.FAILURE,
    message
  };
}

function clear() {
  return {
    'type': alertConstants.CLEAR
  };
}

export const alertAction = {
  success, failure, clear
};
