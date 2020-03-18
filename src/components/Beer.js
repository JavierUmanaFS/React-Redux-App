import React from 'react';
import { connect } from 'react-redux';
import { fetchBrewery } from '../actions';
import LoadingBrewery from '../gif/Loading';


const Beer = props => {
  return (
    <div>
      <h2>Grab A Beer!</h2>
      <button onClick={props.fetchBrewery}>Get Beer!</button>
      {!props.breweryInfo && !props.isLoading && (
        <h2>Go ahead and fetch a new beer !</h2>
      )}
      {props.isLoading && (
        <LoadingBrewery />
      )}
      {props.breweryInfo && !props.isLoading &&
        props.breweryInfo.map(brewery => {
          return (
            <div key={brewery.id}>
              <h3>{brewery.name}</h3>
            </div>

          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    breweryInfo: state.breweryInfo,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchBrewery })(Beer);