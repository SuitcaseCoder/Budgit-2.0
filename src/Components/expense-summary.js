import React, { Component } from 'react';

class ExpenseSummary extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="expense-summary">
            <h1>Current Summary</h1>
            <p>January's budget: $3000</p>
            <p>Total spent: $2800</p>
            <p>Remaining amount: $200</p>
        </section>
        )
    }
}

export default ExpenseSummary;