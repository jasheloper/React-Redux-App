import React, {  useEffect  } from 'react';
import {   connect } from 'react-redux';
import {fetchRandomMeal} from '../actions';

const Meal = ({  fetchRandomMeal, isFetching,  mealInfo  }) => {
            useEffect(()      => {
                  fetchRandomMeal();
            }, [fetchRandomMeal]);

            const fetchMeal = e => {
                  e.preventDefault();
                  fetchRandomMeal();
            };

            if(isFetching) {
                  return <h3> Please Wait ...  </h3>
            }

            return (
                  <>

             
                              <h2>{mealInfo}</h2>
                              <button onClick={fetchMeal}>fetch meal</button>
                  </>
                  )
            };


            const mapStateToProps = state => {
                  return {
                        isFetching: state.isFetching,
                        mealName: state.mealName
                  };
            };

            export default connect(
                  mapStateToProps,
                  {fetchRandomMeal: fetchRandomMeal}
            )(Meal);

