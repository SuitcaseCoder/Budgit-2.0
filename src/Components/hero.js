import React, { Component } from 'react';

class Hero extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section id="hero">
            <div class="hero-inner">
                <h1>Budgit 2.0</h1>
                <h2>An easy way to set financial goals and stay on budget</h2>
                <button>Sign Up Now</button>
                <p>Already have an account?</p>
            </div>
        </section>
        )
    }
}

export default Hero;