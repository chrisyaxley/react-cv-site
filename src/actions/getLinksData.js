export function fetchLinks() {
  return {
    type: 'LINKS_FETCH',
    fetchApi: {
      method: 'GET',
      url: '/links',
    },
  };
}
