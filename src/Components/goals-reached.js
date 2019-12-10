import React, { Component } from 'react';

class RemainingGoals extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section class="goals-reached">
            <h2>Goals reached</h2>
            <ul>
                <li> goals reached will be added here</li>
                <li>
                    <p>Peru Trip</p>
                    <p>amount: $1800</p>
                    <p>date: March 2020</p>
                </li>
                <li>
                    <p>Nikon D3500 DSLR</p>
                    <p>amount: $400</p>
                    <p>date: February 2020}</p>
                </li>
            </ul>
        </section>
        )
    }
}

export default RemainingGoals;