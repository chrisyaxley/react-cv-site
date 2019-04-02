const promiseMiddleware = ({ dispatch }) => next => (action) => {
  if (!action.payload || typeof action.payload.then !== 'function') {
    return next(action);
  }

  const { type, payload: promise, ...originalAction } = action;

  dispatch({
    ...originalAction,
    type: `${type}_PENDING`
  });

  return promise.then(
    payload =>
      dispatch({
        ...originalAction,
        ...payload,
        type: `${type}_SUCCESS`
      }),
    payload =>
      dispatch({
        ...originalAction,
        ...payload,
        type: `${type}_FAILURE`
      })
  );
};

export default promiseMiddleware;
