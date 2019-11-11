import { call, put, select } from "redux-saga/effects";
import RNSound from "react-native-sound/sound";
import { Creators as PlayerActions } from "../ducks/player";
const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {}
}
export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (err) {}
}
export function* next() {
  try {
    const player = yield select(state => state.player);
    const currentIndex = player.list.findIndex(
      song => song.id === player.currentSong.id
    );
    const nextSong = player.list[currentIndex + 1];
    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {}
}

export function* previous() {
  try {
    const player = yield select(state => state.player);
    const currentIndex = player.list.findIndex(
      song => song.id === player.currentSong.id
    );
    const nextSong = player.list[currentIndex - 1];
    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {}
}

export function* setSong(action) {
  try {
    //Se tiver musica tocando, descartar e executar a nova
    if (Sound.isLoaded()) yield call(Sound.release);
    yield call(Sound.init, action.payload.song.file);
    yield call(play); //Saga
    const duration = Sound.getDuration();
    action.payload.song.duration = duration;
    yield put(
      PlayerActions.setSongSuccess(action.payload.song, action.payload.list)
    );

    yield put(PlayerActions.setDuration(0));
  } catch (err) {
    yield put(PlayerActions.setSongFailure("Erro ao iniciar música"));
  }
}

export function* getCurrentPosition() {
  if (Sound.isLoaded()) {
    var segundos = 0;
    Sound.getCurrentTime(seconds => {
      segundos = seconds;
    });
    yield put(PlayerActions.setDuration(segundos));
  }
}
