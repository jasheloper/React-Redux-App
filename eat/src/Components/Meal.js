import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRandomMeal} from '../actions';
import logo from '../images/logo.png'


const Meal = (props) => {
    useEffect(() => {
        props.fetchRandomMeal();
    }, []);

    const fetchMeal = e => {
        e.preventDefault();
        props.fetchRandomMeal();
    };

    if (props.isFetching) {
        return <h3>
            Please Wait ...
        </h3>
    }

    return (


        <div class="container">

            <div className="header">
                  <img src={logo} />
                <h1>What Should I Eat?</h1>
                <h4>An app that helps you decide what to eat</h4>
            </div>


            <div>

                <div className="find">
                    <h2>Check out the meal below! Or..</h2>
                    <button onClick={fetchMeal}>Go to the next one...</button>
                </div>


                {
                props.meals.map(x => (


                    <div className="mealBox"
                        key={
                            x.idMeal
                    }>


                        <div className="box">
                            <h1>{
                                x.strMeal
                            }</h1>
                            <img src={
                                    x.strMealThumb
                                }
                                alt={
                                    x.strMeal
                                }/>
                        </div>


                        <div className="box text">

                              <h1>Information: </h1>
                            <span className="boxinfo">Category:   </span>
                            {
                            x.strCategory
                        }

                            <br/>


                            <span className="boxinfo">Area: </span>
                            {
                            x.strArea
                        }
<hr />
<br/>

                            <span className="boxinfo">Instructions:     </span>  <br />
                            <span className="instructions">{x.strInstructions}</span>

          


                            <br/>
                            <br/>

                                          
                              <div className="information">

                              <span className="game"><a href={x.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a> </span>
                                                
                                                <span className="game"> <a href={x.strSource} target="_blank" rel="noopener noreferrer">Get the Recipe!</a> </span> 
                              </div>

                     

                           



                            


                        </div>


                    </div>
                ))
            } </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {isFetching: state.isFetching, mealInfo: state.mealInfo, img: state.img, meals: state.meal};
};

export default connect(mapStateToProps, {fetchRandomMeal: fetchRandomMeal})(Meal);
