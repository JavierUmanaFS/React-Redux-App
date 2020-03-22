import axios from "axios";

export const fetchBrewery = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_BREWERY_START' });
    axios.get('https://api.openbrewerydb.org/breweries')
      .then(res => {
        dispatch({ type: 'FETCHING_BREWERY_SUCCESS', payload: res.data });
      })
      .catch(err => console.log(err))
  };
};