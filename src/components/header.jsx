import React from 'react';

export default class Header extends React.Component {
  styles = {
    header: {
      padding: '20px',
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      backgroundColor: '#3F51B5',
      color: 'white',
      zIndex: 999,
    }
  }
  render() {
    return (
      <div style={this.styles.header}>Timeline</div>
    )
  }
}