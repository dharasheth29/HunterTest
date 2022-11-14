import testData from "../../data/test_data";

export const GET_DATA = 'GET_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export const getData = ()  => {
    return testData;
}

export const updateData = (data) => dispatch => {
    dispatch({
        type: UPDATE_DATA,
        payload: data
    });
}