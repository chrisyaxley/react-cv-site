const initialState = {
  data: [{
    fields: {}
  }],
  error: null,
  loading: true,
};

const aboutMeData = (state = initialState, action) => {
  switch (action.type) {
    case 'ABOUTME_FETCH_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'ABOUTME_FETCH_FAILURE':
      return {
        ...state,
        data: null,
        error: action.payload.body,
        loading: false,
      };
    case 'ABOUTME_FETCH_SUCCESS':
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

export default aboutMeData;
