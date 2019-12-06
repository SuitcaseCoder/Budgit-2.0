import React from 'react';

class AddUnexpected extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="add-unexpected-expense">
            <form action="">
                <h2>Add unexpected expense</h2>
                <label for="unexpected-expense-name">Unexpected expense: </label>
                <input type="text" />
                <label for="unexpected-amount">Unexpected expense amount: $</label>
                <input type="number" />
            </form>
        </section>
        )
    }
}

export default AddUnexpected;