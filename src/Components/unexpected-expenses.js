import React from 'react';

class UnexpectedExpenses extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="current-unexpected">
            <h2>Unexpected Expenses</h2>
            <ul>
                <li>unexpected expenses will be added here</li>
                <li>
                    <p>BFF's bday</p>
                    <p>$55</p>
                    <p>date: 18</p>
                </li>
                <li>
                    <p>fix  laptop screen</p>
                    <p>$155</p>
                    <p>date: 21</p>
                </li>
            </ul>
        </section>
        )
    }
}

export default UnexpectedExpenses;