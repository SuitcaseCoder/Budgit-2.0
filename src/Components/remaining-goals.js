import React from 'react';

class RemainingGoals extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section class="remaining-goals">
            <h2>Remaning goals</h2>
            <ul>
                <li>remaining goals will be added here</li>
                <li>
                    <p>Peru Trip</p>
                    <p>$1800</p>
                    <p>March 2020</p>
                </li>
                <li>
                    <p>Nikon D3500 DSLR</p>
                    <p>$400</p>
                    <p>February 2020</p>
                </li>
            </ul>
        </section>
        )
    }
}

export default RemainingGoals;