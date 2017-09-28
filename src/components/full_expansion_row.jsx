import React from 'react';
import {TimelineEvent} from 'react-event-timeline';
import TimelineIcon from './timeline_icon';
export default class FullExpansionRow extends React.Component {
  render() {
    const { piece, toggleExpansion } = this.props;
    return (
      <TimelineEvent
        createdAt={piece.date}
        title={piece.title}
        icon={
          <TimelineIcon onClick={() => toggleExpansion(piece.id)} src={piece.src} />
        }
      >
        <img src={piece.src} />
        <h2>{piece.title}</h2>
        <h3>{piece.date}</h3>
        <div>Medium: {piece.medium}</div>
        <div>Artist: {piece.artist}</div>
        <div>Dimensions: {piece.dimensions}</div>
        <hr />
        <div>
          {piece.description}
        </div>
      </TimelineEvent>
    )
  }
}