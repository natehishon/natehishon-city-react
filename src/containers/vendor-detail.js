import React, { Component } from 'react';
import { connect } from 'react-redux';
import  numeral  from 'numeral';

class VendorDetail extends Component {
    render() {

        var formattedAmount;
        var formattedVendorName;

        if (!this.props.vendor) {
            return (
                <div>Loading...</div>
            )
        } else {
            formattedAmount = numeral(this.props.vendor.amount).format('$0,0.00');
            formattedVendorName = (this.props.vendor.vendor_name).toLowerCase();
        }



        return (
            <table className="vendor-detail-table">
                <thead>
                    <th>Vendor Name</th>
                    <th>Payment Amount</th>
                    <th>Contract Number</th>
                    <th>Check Date</th>
                </thead>

                <tr>
                    <td className="vendor-name">{formattedVendorName}</td>
                    <td>{formattedAmount}</td>
                    <td>{this.props.vendor.contract_number}</td>
                    <td>{this.props.vendor.check_date}</td>
                </tr>

            </table>
        )
    }

}

function mapStateToProps(state){
    return {
        vendor: state.activeVendor
    };
}

export default connect(mapStateToProps)(VendorDetail);