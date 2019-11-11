import Immutable from "seamless-immutable";

export const Types = {
  // NAMESPACE - Nome do tipo de action
  SET_SONG_REQUEST: "player/SET_SONG_REQUEST",
  SET_SONG_SUCCESS: "search/SET_SONG_SUCCESS",
  SET_SONG_FAILURE: "search/SET_SONG_FAILURE",
  PLAY: "player/PLAY",
  PAUSE: "player/PAUSE",
  NEXT: "player/NEXT",
  PREVIOUS: "player/PREVIOUS",
  SET_DURATION: "player/DURATION",
  GET_CURRENT_POSITION: "player/GET_CURRENT_POSITION"
};

const initialState = Immutable({
  currentSong: {},
  list: [],
  loadingId: null,
  error: null,
  paused: false,
  duration: 0
});

export default function player(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST: // Roda junto com o Middleware
      return { ...state, loadingId: action.payload.song.id };
    case Types.SET_SONG_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        currentSong: action.payload.song,
        loadingId: null,
        error: null,
        paused: null
      };
    case Types.SET_SONG_FAILURE:
      return { ...state, loadingId: null, error: action.payload.error };
    case Types.PLAY:
      return { ...state, paused: false };
    case Types.PAUSE:
      return { ...state, paused: true };
    case Types.SET_DURATION:
      return { ...state, duration: action.payload.duration };
    default:
      return state;
  }
}

// Action Creator
export const Creators = {
  setSongRequest: (song, list) => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song, list }
  }),

  setSongSuccess: (song, list) => ({
    type: Types.SET_SONG_SUCCESS,
    payload: {
      song,
      list
    }
  }),

  setSongFailure: error => ({
    type: Types.SET_SONG_FAILURE,
    payload: {
      error
    }
  }),
  play: () => ({
    type: Types.PLAY
  }),
  pause: () => ({
    type: Types.PAUSE
  }),
  next: () => ({
    type: Types.NEXT
  }),
  previous: () => ({
    type: Types.PREVIOUS
  }),
  setDuration: duration => ({
    type: Types.SET_DURATION,
    payload: {
      duration
    }
  }),
  getCurrentPosition: () => ({
    type: Types.GET_CURRENT_POSITION
  })
};
