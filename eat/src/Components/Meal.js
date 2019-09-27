import React, {  useEffect  } from 'react';
import {   connect } from 'react-redux';
import {fetchRandomMeal} from '../actions';


const Meal = (props) => {
            useEffect(()      => {
                  props.fetchRandomMeal();
            }, []);

            const fetchMeal = e => {
                  e.preventDefault();
                  props.fetchRandomMeal();
            };

            if(props.isFetching) {
                  return <h3> Please Wait ...  </h3>
            }

            return (  

                 
                  <div>



                              <div>
                                    {props.meals.map(x => (
                                        
                                          <div key={x.idMeal}>
                                                <h1>{x.strMeal}</h1>
                                                <h3>{x.strCategory}</h3>

                                                </div>
                                       
                                         
                                             
                                    ))}
                              </div>

                            
                              <button onClick={fetchMeal}>fetch meal</button>
                  </div>
                  )
            };


            const mapStateToProps = state => {
                  return {
                        isFetching: state.isFetching,
                        mealInfo: state.mealInfo,
                        img: state.img,
                        meals: state.meal 
                  };
            };

            export default connect(
                  mapStateToProps,
                  {fetchRandomMeal: fetchRandomMeal}
            )(Meal);

