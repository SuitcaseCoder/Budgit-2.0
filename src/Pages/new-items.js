import React from 'react';

import AddFixed from '../Components/add-fixed';
import AddGoal from '../Components/add-goal';
import AddUnexpected from '../Components/add-unexpected';

class NewItem extends React.Component {
    render(){
        return(
            <section className="goals-page">
            <h1>Goals Page</h1>
            <AddFixed />
            <AddUnexpected />
            <AddGoal />
            </section>
        )
    }
}


export default NewItem;
// functional components - just functions. aka: stateless
// stateful components

