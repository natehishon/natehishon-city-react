//state argument is not application state, only the state
// this reducer is responsible for

import {FETCH_VENDOR} from "../actions";

export default function (state = null, action) {

    switch(action.type){
    case 0:
        return action.payload.data[0];
    case 1:
        return action.payload.data[1];
    case 2:
        return action.payload.data[2];
    case 3:
        return action.payload.data[3];
    case 4:
        return action.payload.data[4];
    case 5:
        return action.payload.data[5];
    case 6:
        return action.payload.data[6];
    case 7:
        return action.payload.data[7];
    case 8:
        return action.payload.data[8];
    case 9:
        return action.payload.data[9];

    }




    
    return state;

}