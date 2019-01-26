import Immutable from "seamless-immutable";

export const Types = {
  // NAMESPACE - Nome do tipo de action
  GET_REQUEST: "albums/GET_REQUEST",
  GET_SUCCESS: "albums/GET_SUCCESS",
  GET_FAILURE: "albums/GET_FAILURE"
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

export default function albums(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST: // Roda junto com o Middleware
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

// Action Creator
export const Creators = {
  getAlbumsRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getAlbumsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data
    }
  }),

  getAlbumsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error
    }
  })
};
