import React from 'react';
import {TimelineBlip} from 'react-event-timeline';
import TimelineIcon from './timeline_icon';
import FullExpansionRow from './full_expansion_row';

export default class TimelineRow extends React.Component {
  render() {
    const {piece, toggleExpansion} = this.props;
    if (!this.props.piece.expanded) {
      return (
        <TimelineBlip
          title={<span>{piece.date} | <b>{piece.title}</b></span>}
          icon={
            <TimelineIcon onClick={() => toggleExpansion(piece.id)} src={piece.src} />
          }
        />
      )
    } else {
      return <FullExpansionRow {...this.props} />
    }
    
  }
}
