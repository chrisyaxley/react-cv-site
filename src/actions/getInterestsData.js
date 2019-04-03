export function fetchInterests() {
  return {
    type: 'INTERESTS_FETCH',
    fetchApi: {
      method: 'GET',
      url: '/interests',
    },
  };
}
