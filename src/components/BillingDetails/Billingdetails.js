import React, { useState } from "react";
import '../../styles/BillingDetails.css'
function Billingdetails() {

    return (
        <div className="main-page">
            <div className="billing-container">
                <div className="billing-top">
                    <h2>Check the compatibility of your Ad Sets with First AI </h2>
                    <span>When they are ready, click on ‘Submit Smart Campaign’ to schedule your launch</span>
                </div>
                <div className="billing-middle">
                    <table class="table" id="customers">
                        <thead class="thead">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Second</th>
                                <th scope="col">Third</th>
                                <th scope="col">Second</th>
                                <th scope="col">Third</th>                    
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                               
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                
                            </tr>
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Billingdetails
