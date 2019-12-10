import React, { Component } from 'react';

class SetBudget extends Component {

    render(){
        return(
        <section class="add-monthly-budget">
            <form action="">
                <h2>Add current month's budget</h2>
                <label for="monthly-budget">current month's budget': </label>
                <input type="number" />
                <label for="monthly-save-goal">How much I would like to save by the end of current month: $</label>
                <input type="number" />
            </form>
        </section>
        )
    }
}

export default SetBudget;