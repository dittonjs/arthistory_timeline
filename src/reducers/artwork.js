import art from '../libs/artwork';
import _ from 'lodash';

const initialState = {
  art: _.cloneDeep(art)
}

export default function (state = initialState, action) {
  switch(action.type) {
    case "TOGGLE_EXPANSION": {
      const newState = _.cloneDeep(state);
      const piece = _.find(newState.art, {id: action.id});
      piece.expanded = !piece.expanded;
      return newState;
    }
  }
  return state;
}