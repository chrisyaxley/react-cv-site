export function fetchAboutMe() {
  return {
    type: 'ABOUTME_FETCH',
    fetchApi: {
      method: 'GET',
      url: '/aboutMe',
    },
  };
}
