import React from 'react';
import Fuse from 'fuse.js';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Timeline } from 'react-event-timeline';
import * as ArtworkActions from '../actions/artwork';
import TimelineRow from './timeline_row';
import Header from './header';
import Sidebar from './sidebar';

class MainTimeline extends React.Component {

  get styles() {
    return {
      container: {
        padding: '100px 350px',
        position: 'relative'
      }
    }
  }

  applyFilters() {
    let art = this.props.art;
    const {filters: {toDate, fromDate}} = this.props;
    art = _.filter(art, (piece) => piece.metadate >= fromDate && piece.metadate <= toDate );
    if(this.props.filters.searchVal.length) {
      var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 2,
        maxPatternLength: 32,
        minMatchCharLength: 3,
        keys: [
          "title",
          "author.firstName"
      ]
      };
      var fuse = new Fuse(art, options);
      art = fuse.search(this.props.filters.searchVal);
    }
    return art;
  }

  get timelineRows() {
    let filteredArt = this.applyFilters(this.props.art)
    const art = _.sortBy(filteredArt, ['metadate']);
    return _.map(art, (piece) => (
      <TimelineRow piece={piece} toggleExpansion={this.props.toggleExpansion}/>
    ));
  }

  render() {
    console.log(this.props)
    return (
      <div style={this.styles.container}>
        <Header />
        <Sidebar />
        <Timeline>
          {this.timelineRows}
        </Timeline>
      </div>
    )
  }
}

export default connect(({artwork, filters}) => ({art: artwork.art, filters}), ArtworkActions)(MainTimeline);