const initialState = {
  data: [{
    fields: {}
  }],
  error: null,
  loading: true,
};

const linksData = (state = initialState, action) => {
  switch (action.type) {
    case 'LINKS_FETCH_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'LINKS_FETCH_FAILURE':
      return {
        ...state,
        data: null,
        error: action.payload.body,
        loading: false,
      };
    case 'LINKS_FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload.body,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default linksData;
