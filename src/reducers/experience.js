const initialState = {
  data: [{
    fields: {}
  }],
  error: null,
  loading: true,
};

const experienceData = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPERIENCE_FETCH_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'EXPERIENCE_FETCH_FAILURE':
      return {
        ...state,
        data: null,
        error: action.payload.body,
        loading: false,
      };
    case 'EXPERIENCE_FETCH_SUCCESS':
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

export default experienceData;
