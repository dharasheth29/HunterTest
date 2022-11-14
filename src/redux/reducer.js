import { GET_DATA, UPDATE_DATA } from "./actions";
import { testData } from "../../data/test_data";

const initialState = {
    testData
}

function getDataReducer(state = initialState, action){
    switch(action.type){        
        case GET_DATA: 
            return { ...state}
        // case UPDATE_DATA:
    default:
        return state;
    }
}
 
export default getDataReducer;