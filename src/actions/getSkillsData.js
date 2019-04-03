export function fetchSkills() {
  return {
    type: 'SKILLS_FETCH',
    fetchApi: {
      method: 'GET',
      url: '/skills',
    },
  };
}
