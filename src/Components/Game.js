import React, { Component } from 'react';

import Colors from './Colors.js';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sequence: ['RED'],
            steps: 0,
            message: null,
            colors: ['RED', 'GREEN', 'BLUE', 'YELLOW', 'BLACK']
        }
    }

    nextSqeuence = () => {
        this.setState(() => ({
            sequence: [...this.state.sequence,
            this.state.colors[Math.floor(Math.random() * this.state.colors.length - 1)]]
        }));
        console.log('New sequence', this.state.sequence);
    }

    sequenceAdder = (color) => {
        if (color === this.state.sequence[this.state.steps]) {
            if (this.state.sequence.length - 1 === this.state.steps) {
                this.setState(() => ({ steps: 0 }));
                this.nextSqeuence();
                console.log('one', this.state.sequence);
            } else {
                this.setState(() => ({
                    steps: +this.state.steps + 1
                }));
                console.log('two', this.state.sequence);
            }
        } else {
            this.setState(() => ({
                message: "You know you just lost right??",
                steps: 0, sequence: []
            }))
            console.log('three', this.state.sequence);
        }
    }

    render() {
        return (
            <div>
                {this.state.message}
                {
                    this.state.colors.map((color) => (
                        <Colors color={color} key={color} sequenceAdder={this.sequenceAdder} />
                    ))
                }
                <br /><br /><br />
            </div>
        );
    }
}

export default Game;
