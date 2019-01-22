
import axios from 'axios';

export const FETCH_VENDOR = 'FETCH_VENDOR';
export const ROOT_URL = 'https://data.cityofchicago.org/resource/rjgc-4h37.json?$order=amount DESC&$limit=10';

export function selectVendor(vendor) {

    const request = axios.get(ROOT_URL).then(

    );

    return {
        type: vendor - 1,
        payload: request
    }
}


// export function selectVendor(vendor) {
//     //select vendor is a action creator, it needs to return an action: an object with a type property
//     return {
//         type: 'VENDOR_SELECTED'
//         payload: vendor
//     };
//
// }