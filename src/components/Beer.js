import React from 'react';
import { connect } from 'react-redux';
import { fetchBrewery } from '../actions';
import LoadingBrewery from '../gif/Loading';
import { Button, Container, Box } from '@material-ui/core';
import '../App.css';


const Beer = props => {
  return (
    <Container fixed>
    <Box 
     className='beerBox'>
        <h2>Need A Place To Grab a Beer ?</h2>
      <Button 
      variant="contained" 
      color="secondary" 
      onClick={props.fetchBrewery}
      >
      Get Beer!
      </Button>
      <h2>Grab A Beer!</h2>
      </Box>
      {props.isLoading && (
        <LoadingBrewery />
      )}
        <div className='breweryContainer'>
      {props.breweryInfo && !props.isLoading &&
        props.breweryInfo.map(brewery => {
          return (
            <Box
             key={brewery.id}
             className='brewery'
             >
              <h3>{brewery.name}</h3>
              <h4>Type: {brewery.brewery_type.toUpperCase()}</h4>
              <p className='address'>
               Address:{' '}{brewery.street} 
              <p>{brewery.city}{' , '}{brewery.state}</p> 
              <p>{brewery.country}</p>
              </p>
            </Box>

          )
        })
      }
      </div>
    </Container>
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