

const initialState = {
  isLoading: false,
  breweryInfo: null,
  error: ''
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_BREWERY_START':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCHING_BREWERY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        breweryInfo: action.payload
      };
    default:
      return state;
  }
};
