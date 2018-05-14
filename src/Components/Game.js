import React, { Component } from 'react';

import GameContainer from './GameContainer';

class Game extends Component {
    redner() {
        return (
            <div className="container">
                <div className="text-center header">
                    <h1 className="font-primary">Simon Game</h1>
                </div>
                <GameContainer />
            </div>
        )
    }
}

export default Game;
