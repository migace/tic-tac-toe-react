import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height } = this.props;

    return (
      <div className="wrapper">
        <canvas
            className="canvas"
            width={width}
            height={height}                    
        />
      </div>
    )
  }
}

Board.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Board.defaultProps = {
  width: 640,
  height: 640,
};

export default Board
