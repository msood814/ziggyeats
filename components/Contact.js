import React, { Component } from 'react';
import NavBar from './navbar'
import BottomNavBar from './BottomNavbar'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: this.props.match.params.customerId,
            name: this.props.match.params.name,
        }
        this.url = '';
    }
    render() {
        return (
            <div style={{}}>
                <NavBar customerId={this.state.customerId} name={this.state.name} home={false} />
                <div className="container" >
                    <div className="row" style={{ marginTop: "35px", paddingBottom: "25px" }}>
                        <div className="col-md-12" style={{ textAlign: "center" }}>
                            <span className="display-3 text text-dark">
                                GET IN TOUCH
</span>
                        </div>
                    </div>
                    <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-md-4" >
                            <h4 className="text text-dark">ADDRESS</h4>
                            <h5>Mysore Office</h5>
                            <address>Infosys Ltd.<br />350 Hebbal Electronic City<br />Hootagalli Mysore<br />Karnataka 570027</address>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text text-dark">PHONE</h4>
                            <h5>Mysore Office</h5>
                            <p>Landline: 821-2227511</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text text-dark">EMAIL</h4>
                            <h5>Request for Proposal</h5>
                            <p>info@ziggyeats.com</p>
                            <h5>Employment Opportunities</h5>
                            <p>careers@ziggyeats.com</p>
                        </div>
                    </div>
                    <div className="row" style={{ textAlign: "center", marginBottom:35 }}>
                        <div className="col-md-12" >
                            <h2 className="text text-dark">We would love to hear from you!</h2>
                        </div>
                    </div>
                </div>
                <BottomNavBar customerId={this.state.customerId} name={this.state.name} />
            </div>
        )

    }


}

export default Contact;

