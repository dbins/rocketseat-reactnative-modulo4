import React from "react";
import SongItem from "../../components/SongItem";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import styles from "./styles";

const SongList = ({ data, setSongRequest, ...props }) => (
  <FlatList
    {...props}
    data={data}
    keyExtractor={song => String(song.id)}
    renderItem={({ item }) => (
      <SongItem
        onPress={() => {
          setSongRequest(item, data);
        }}
        song={item}
      />
    )}
  />
);

SongList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ).isRequired,
  setSongRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SongList);
