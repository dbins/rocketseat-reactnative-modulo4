import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import AlbumItem from "./components/AlbumItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
const albums_local = [
  {
    id: 0,
    title: "Hybrid Theory",
    author: "Linkin Park",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    songs: [
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
    ]
  },
  {
    id: 1,
    title: "Greatest Hits",
    author: "Foo Fighters",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg",
    songs: [
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
    ]
  },
  {
    id: 2,
    title: "Live from Villa Mix",
    author: "Alok",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg",
    songs: [
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
    ]
  },
  {
    id: 3,
    title: "Hybrid Theory",
    author: "Linkin Park",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    songs: [
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
        file: "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        id: 3,
        title: "Points of Authority",
        author: "Linkin Park",
        file: "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        id: 4,
        title: "Crawling",
        author: "Linkin Park",
        file: "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    id: 4,
    title: "Live from Villa Mix",
    author: "Alok",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg",
    songs: [
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
    ]
  },
  {
    id: 5,
    title: "Greatest Hits",
    author: "Foo Fighters",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg",
    songs: [
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
    ]
  },
  {
    id: 6,
    title: "Hybrid Theory",
    author: "Linkin Park",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    songs: [
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
    ]
  }
];

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      ).isRequired,
      loading: PropTypes.bool
    })
  };

  static navigationOptions = ({ navigation }) => ({
    title: "Sua Biblioteca",
    headerRight: (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigation.navigate("Search")}
      >
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    )
  });

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    console.tron.log(this.props.albums.data);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {this.props.albums.loading ? (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        ) : (
          <FlatList
            data={this.props.albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => (
              <AlbumItem
                onPress={() =>
                  this.props.navigation.navigate("Album", { album: item })
                }
                album={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlbumsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
