import * as actionTypes from './actionTypes';

export const saveResult = (counter) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: counter
    }
}

export const storeResult = (counter) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const oldCounter = getState().ctr.counter
            console.log('oldCounter',oldCounter)
            dispatch(saveResult(counter));
        }, 2000);
    } 
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    }
}