import React from 'react';
import { connect } from 'react-redux';
import * as FilterActions from '../actions/filters';

class Sidebar extends React.Component {
  get styles() {
    return {
      sidebar: {
        position: 'fixed',
        top: '58px',
        bottom: '0px',
        left: this.props.open || true ? '0px' : '-300px',
        width: '300px',
        backgroundColor: 'white',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        padding: '10px 20px'
      },
      input: {
        width: '100%',
        display: 'block',
        fontSize: '18px',
        borderStyle: 'ridge',
        borderRadius: '5px'
      },
      topMargin: {
        marginTop: "20px"
      }
    }
  }
  render() {
    return (
      <div style={this.styles.sidebar}>
        <div><b>Search</b></div>
        <input
          type="text"
          style={this.styles.input}
          onChange={(e) => this.props.changeSearchValue(e.target.value)}
        />
        <hr />
        <div style={this.styles.topMargin}><b>Date Range</b></div>
        <input
          type="number"
          defaultValue="-33000"
          onChange={(e) => {this.props.changeFromDate(e.target.value)}}
        /> to <input
          type="number"
          defaultValue="2017"
          onChange={(e) => {this.props.changeToDate(e.target.value)}}
        />
      </div>
    )
  }
}

export default connect(() => {}, FilterActions)(Sidebar);