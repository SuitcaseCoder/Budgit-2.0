import React from 'react';

import React from 'react';

class AddGoal extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="add-goal">
            <form action="" class="add-goal-form">
                <h2>Add goal</h2>
                <label for="goal-name">Your financial goal:</label>
                <input type="text" />
                <label for="goal-amt">Goal Amount</label>
                <input type="number" />
                <label for="goal-date">Goal Date</label>
                <input type="date" />
            </form>
        </section>
        )
    }
}

export default AddGoal;