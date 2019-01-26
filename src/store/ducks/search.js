import Immutable from "seamless-immutable";

export const Types = {
  // NAMESPACE - Nome do tipo de action
  REQUEST: "search/REQUEST",
  SUCCESS: "search/SUCCESS",
  FAILURE: "search/FAILURE"
};

//const initialState = {
//  data: [],
//  loading: false,
// error: null
//};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null
});

export default function search(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST: // Roda junto com o Middleware
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { data: action.payload.data, loading: false, error: null };
    case Types.FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

// Action Creator
export const Creators = {
  searchRequest: term => ({
    type: Types.REQUEST,
    payload: { term }
  }),

  searchSuccess: data => ({
    type: Types.SUCCESS,
    payload: {
      data
    }
  }),

  searchFailure: error => ({
    type: Types.FAILURE,
    payload: {
      error
    }
  })
};
