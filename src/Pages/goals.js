import React from 'react';

import RemainingGoals from '../Components/remaining-goals';
import GoalsReached from '../Components/goals-reached';

class Goals extends React.Component {
    render(){
        return(
            <section className="goals-page">
            <h1>Goals Page</h1>
            <RemainingGoals />
            <GoalsReached />
            </section>
        )
    }
}


export default Goals;
// functional components - just functions. aka: stateless
// stateful components

