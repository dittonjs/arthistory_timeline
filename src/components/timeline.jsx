import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Timeline } from 'react-event-timeline';
import TimelineRow from './timeline_row';
import * as ArtworkActions from '../actions/artwork';

class MainTimeline extends React.Component {

  get styles() {
    return {
      container: {
        padding: '20px'
      }
    }
  }

  get timelineRows() {
    return _.map(this.props.art, (piece) => (
      <TimelineRow piece={piece} toggleExpansion={this.props.toggleExpansion}/>
    ));
  }

  render() {
    console.log(this.props)
    return (
      <div style={this.styles.container}>
        <Timeline>
          {this.timelineRows}
        </Timeline>
      </div>
    )
  }
}

export default connect(({artwork}) => ({art: artwork.art}), ArtworkActions)(MainTimeline);