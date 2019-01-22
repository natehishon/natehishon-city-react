import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import VendorList from "../containers/vendor-list";
import VendorDetail from "../containers/vendor-detail"

export default class App extends Component{



    render() {
        return (
            <div>
                <VendorDetail />
                <VendorList />
            </div>
        )
    }
}
