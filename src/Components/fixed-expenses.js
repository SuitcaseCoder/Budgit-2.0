import React, { Component } from 'react';

class FixedExpenses extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section class="current-fixed">
            <h2>Fixed Expenses</h2>
            <ul>
                <li>fixed expenses will be added here</li>
                <li>
                    <p>Rent</p>
                    <p>$1200</p>
                    <p>due: 30</p>
                </li>
                <li>
                    <p>Gym</p>
                    <p>$50</p>
                    <p>due: 03</p>
                </li>
            </ul>
        </section>
        )
    }
}

export default FixedExpenses;