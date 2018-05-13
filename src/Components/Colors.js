import React, { Component } from 'react';

class Colors extends Component {
    render() {
        return (
            <div >
                <button onClick={() => { this.props.sequenceAdder(this.props.color) }}>
                    {this.props.color}
                </button>
            </div>
        );
    }
}

export default Colors;
