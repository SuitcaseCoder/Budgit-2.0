import React from 'react';

class AddFixed extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="add-expense">
            <form action="" class="add-expense-form">
                <h2>Add fixed expense</h2>
                <select name="fixed-expenses" id="">
                    <option value="Mortgage/Rent"></option>
                    <option value="Home/Rent insurance"></option>
                    <option value="Auto Insurance"></option>
                    <option value="Health Insurance"></option>
                    <option value="Electricity"></option>
                    <option value="Groceries/toiletries/other essentials"></option>
                    <option value="Fuel"></option>
                    <option value="Student loan payments"></option>
                    <option value="Cable/Internet"></option>
                    <option value="Auto"></option>
                    <option value="Streaming Services"></option>
                    <option value="TV/Internet"></option>
                    <option value="Memberships"></option>
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