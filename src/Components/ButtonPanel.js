import React, { Component } from 'react';
import { Button, Label, Tooltip, OverlayTrigger } from 'react-bootstrap';


class ButtonPanel extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">{this.props.isStrict ? "Strict mode is turned on" : "Strict mode is turned off"}</Tooltip>
        );
        return (
            <div className="text-center button-panel">
                <Button
                    bsStyle="primary"
                    className="button-panel-item"
                    onClick={this.props.onStart}>
                    {this.props.isStarted ? 'STOP' : 'START'}
                </Button>
                <Label className="button-panel-item">Count: {this.props.count}</Label>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <Button
                        bsStyle={this.props.isStrict ? "success" : "danger"}
                        className="button-panel-item"
                        onClick={this.props.onStrictToggle}
                        disabled={false}>
                        STRICT
                </Button>
                </OverlayTrigger>
            </div>
        );
    }
}

export default ButtonPanel;
