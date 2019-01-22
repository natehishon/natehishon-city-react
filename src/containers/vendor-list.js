import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVendor } from '../actions/index';
import { bindActionCreators} from 'redux';
import { Pagination } from 'react-materialize';


class VendorList extends Component {

    componentDidMount() {
        this.props.selectVendor(1);
    }

    // renderList() {
    //     return this.props.vendors.map((vendor) => {
    //
    //         console.log("vendor");
    //         console.log(vendor);
    //
    //         return (
    //
    //
    //             <li key={vendor.title}
    //                 onClick={() => this.props.selectVendor(vendor)}
    //                 className="list-group-item">
    //                 {vendor.title}
    //             </li>
    //
    //
    //
    //         );
    //     });
    // }

    render()  {



            return  (
                //<ul className="list-group col-sm-4">
                //{this.renderList()}
                //</ul>

                <div className="pagination-container">
                    <Pagination className="" items={10} activePage={1} maxButtons={5} onSelect={(vendor) => this.props.selectVendor(vendor)} />
                </div>



            )



    }

}

function mapStateToProps(state) {
    //whatever is returned will show up as props
    // inside of vendorlist

    return {
        vendors: state.vendors
    };


}

//anything returned from this function will end up as props on vendor list container
function mapDispatchToProps(dispatch) {
    //whenever select vendor is called, the result should be passed to all of the reducers
    return bindActionCreators( { selectVendor: selectVendor }, dispatch )
}

// promote vendor list from component to container
export default connect(mapStateToProps, mapDispatchToProps)(VendorList);


