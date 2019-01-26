import { all, takeLatest } from "redux-saga/effects"; // takelatest pega a ultima requisicao
import { Types as AlbumTypes } from "../ducks/albums";
import { Types as SearchTypes } from "../ducks/search";
import { Types as PlayerTypes } from "../ducks/player";
import { getAlbums } from "./albums";
import { search } from "./search";
import { play, pause, setSong, next, previous } from "./player";
export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchTypes.REQUEST, search),
    takeLatest(PlayerTypes.SET_SONG_REQUEST, setSong),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREVIOUS, previous)
  ]);
}
