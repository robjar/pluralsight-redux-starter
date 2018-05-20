export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [
        ...state,
        // create deep copy of passed course
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}