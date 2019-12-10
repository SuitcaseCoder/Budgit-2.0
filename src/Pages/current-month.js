import React from 'react';

import FixedExpenses from '../Components/fixed-expenses';
import UnexpectedExpenses from '../Components/unexpected-expenses';
import ExpenseSummary from '../Components/expense-summary';
import SetBudget from '../Components/set-budget';


class CurrentMonth extends React.Component {
    render(){
        return(
            <section className="current-month-page">
            <h1>Current Month Page</h1>
            <h1>March</h1>
            <SetBudget />
            <FixedExpenses />
            <UnexpectedExpenses />
            <ExpenseSummary />
            </section>
        )
    }
}


export default CurrentMonth;
// functional components - just functions. aka: stateless
// stateful components

