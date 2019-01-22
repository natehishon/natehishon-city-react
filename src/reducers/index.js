import { combineReducers } from 'redux';
import VendorReducer from './reducer_vendors';
import ActiveVendor from './reducer_active_vendor';



const rootReducer = combineReducers({
    vendors: VendorReducer,
    activeVendor: ActiveVendor

});

export default rootReducer;