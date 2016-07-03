import React, { Component, PropTypes } from 'react'

class Board extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        className: React.PropTypes.string,
    }

    static defaultProps: {
        width: 640,
        height: 640,
    }

    componentDidMount() {

    }

    render() {
        const {width, height, className} = this.props;

        let canvasStyle = {
            border: '1px solid #000',
        };

        return (
            <div>
                <canvas
                    style = {canvasStyle}
                    width = {width}
                    height = {height}
                    className = {className}
                />
            </div>
        )
    }
}

export default Board
