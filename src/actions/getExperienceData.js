export function fetchExperience() {
  return {
    type: 'EXPERIENCE_FETCH',
    fetchApi: {
      method: 'GET',
      url: '/positions',
    },
  };
}
