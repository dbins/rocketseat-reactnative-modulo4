import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import styles from "./styles";
const currentSong = {
  title: "Papercut",
  author: "Linkin Park"
};
const Player = ({
  player,
  play,
  pause,
  next,
  previous,
  getCurrentPosition
}) => {
  //var timeout = setInterval(() => {
  //  getCurrentPosition();
  // }, 1000);

  function converterSegundos(time) {
    var hr = ~~(time / 3600);
    var min = ~~((time % 3600) / 60);
    var sec = parseInt(time % 60);
    var sec_min = "";
    if (hr > 0) {
      sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + sec;
    return sec_min + " min";
  }

  if (player.currentSong.id === undefined) return null;
  const pressFunction = player.paused ? play : pause;
  const icon = player.paused ? "play-circle-filled" : "pause-circle-filled";
  return (
    <View style={styles.container}>
      <View style={styles.currentSong}>
        <Text style={styles.title}>{player.currentSong.title}</Text>
        <Text style={styles.author}>
          {player.currentSong.author} -{" "}
          {converterSegundos(player.currentSong.duration)}
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={previous}>
          <Icon name="skip-previous" size={24} style={styles.controlIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={pressFunction}>
          <Icon
            name={icon}
            style={styles.play}
            size={36}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={next}>
          <Icon name="skip-next" size={24} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      duration: PropTypes.number
    })
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  getCurrentPosition: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
