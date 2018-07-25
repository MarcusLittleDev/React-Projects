import axios from '../../axios-orders';
import {put} from 'redux-saga/effects';

import * as actions from '../actions/index'

export function* initIgredientsSaga(action) {
    try {
        const response = yield axios.get( 'https://react-my-burger-35d4e.firebaseio.com/ingredients.json' )
        yield put(actions.setIngredients(response.data))
            
    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }
        
}
