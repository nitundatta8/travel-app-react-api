import * as c from '../actions/ActionsType';



export default (state = {}, action) => {
  switch (action.type) {
    case c.ADD_REVIEW:
      return Object.assign({}, state, {
        city: action.data
      });

    default:
      return state;
  }
};

