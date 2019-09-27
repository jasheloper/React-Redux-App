import axios from 'axios';

export const FETCH_MEAL_START = "FETCH_MEAL_START";
export const FETCH_MEAL_SUCCESS = "FETCH_MEAL_SUCCESS";

export const fetchRandomMeal = () => {

      return function(dispatch) {
        dispatch({ type: FETCH_MEAL_START });
        axios
          .get("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => {
            console.log(res);
            dispatch({ type: FETCH_MEAL_SUCCESS, 
              payload: res.data.strMeal });
          })
          .catch(err => console.error(err));
      };
    };
