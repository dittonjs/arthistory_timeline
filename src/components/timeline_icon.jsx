import React from 'react';

export default class TimelineIcon extends React.Component {

  get styles() {
    return {
      imgContainer: {
        position: 'relative'
      },
      img: {
        position: 'absolute',
        top: '-9px',
        left: '-9px',
        borderRadius: '17px',
        cursor: 'pointer',
      }
    }
  }

  render() {
    return (
      <div 
        style={this.styles.imgContainer}
      >
        <img
          onClick={this.props.onClick}
          width="34"
          height="34"
          style={this.styles.img}
          src={this.props.src}
        />
      </div>
    );
  }
}