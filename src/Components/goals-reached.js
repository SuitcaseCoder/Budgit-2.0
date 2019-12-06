import React from 'react';

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
                <li>remaining goals will be added here</li>
                <li>
                    <p>Peru Trip</p>
                    <p>{ex: 1800}</p>
                    <p>{ex: March 2020}</p>
                </li>
                <li>
                    <p>{ex: Nikon D3500 DSLR}</p>
                    <p>{ex: 400}</p>
                    <p>{ex: February 2020}</p>
                </li>
            </ul>
        </section>
        )
    }
}

export default RemainingGoals;