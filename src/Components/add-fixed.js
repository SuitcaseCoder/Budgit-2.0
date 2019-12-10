import React, { Component } from 'react';

class AddFixed extends Component {

    render(){
        return(
        <section class="add-expense">
            <form action="" class="add-expense-form">
                <h2>Add fixed expense</h2>
                <select name="fixed-expenses" id="">
                    <option value="Mortgage/Rent">Mortage/Rent</option>
                    <option value="Home/Rent insurance">Home/Renters Insurance</option>
                    <option value="Auto Insurance">Auto Insurance</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Groceries/toiletries/other essentials">Groceries</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Student loan payments">Student Loan Payment</option>
                    <option value="Auto">Car</option>
                    <option value="Streaming Services">Streaming Services</option>
                    <option value="TV/Internet">TV/Internet</option>
                    <option value="Memberships">Memberships</option>
                </select>
                <label for="amt">Amount</label>
                <input type="number" />
                <label for="due">Due Date</label>
                <input type="date" />
            </form>
        </section>
        )
    }
}

export default AddFixed;