import React, { Component } from 'react';

import Colors from './Colors.js';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sequence: [],
            steps: 0,
            colors: ['RED', 'GREEN', 'BLUE', 'YELLOW', 'BLACK']
        }
    }

    sequenceAdder = (color) => {
        this.setState(() => ({ sequence: [...this.state.sequence, color] }));
    }
    render() {
        console.log(this.state.sequence);
        return (
            <div>
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
