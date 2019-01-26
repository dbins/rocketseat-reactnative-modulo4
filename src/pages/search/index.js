import React, { Component } from "react";
import { debounce } from "lodash";
import SongList from "../../components/SongList";
import { View, TextInput, FlatList, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SearchActions } from "../../store/ducks/search";

const songs = [
  {
    id: 0,
    title: "Papercut",
    author: "Linkin Park",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
  },
  {
    id: 1,
    title: "One Step Closer",
    author: "Linkin Park",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
  },
  {
    id: 2,
    title: "With You",
    author: "Linkin Park",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
  },
  {
    id: 3,
    title: "Points of Authority",
    author: "Linkin Park",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
  },
  {
    id: 4,
    title: "Crawling",
    author: "Linkin Park",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
  }
];
import styles from "./styles";

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchRequest = debounce(this.props.searchRequest, 500);
  }
  static navigationOptions = {
    title: "Buscar"
  };

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      ).isRequired,
      loading: PropTypes.bool
    })
  };

  state = {
    searchInput: ""
  };

  search = searchInput => {
    this.setState({ searchInput });
    this.searchRequest(searchInput);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar por músicas..."
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={this.state.searchInput}
            onChangeText={this.search}
          />
        </View>
        {this.props.search.loading && (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        )}

        <SongList data={this.props.search.data} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
