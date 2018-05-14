import React, { Component } from 'react';

class BoardItem extends Component {
    render() {
        let classNames = "board-item";
        classNames += this.props.isActive ? " active" : "";
        classNames += !this.props.isEnabled ? " disabled" : "";
        return (
            <div
                className={classNames}
                id={this.props.itemId}
                onMouseDown={this.props.onMouseDown} />
        )
    }
}

class Board extends Component {
    render() {
        const items = [0, 1, 2, 3].map(function (item) {
            const itemId = "board-item-" + item;
            return (
                <BoardItem
                    key={item}
                    itemId={itemId}
                    isActive={this.props.activeItems[item]}
                    isEnabled={this.props.isEnabled}
                    onMouseDown={this.props.onMouseDown.bind(null, item)} />
            )
        });
        var classNames = "flex-item board text-center";
        classNames += this.props.isBlinking ? " blink" : "";
        return (
            <div className="flex-container">
                <div className={classNames}>
                    {items}
                </div>
            </div>
        );
    }
}

export default Board;
