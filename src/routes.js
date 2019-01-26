import { createStackNavigator, createAppContainer } from "react-navigation";
import { colors } from "./styles";
import Main from "./pages/main";
import Album from "./pages/album";
import Search from "./pages/search";

const Rotas = createStackNavigator(
  {
    Main: { screen: Main },
    Album: { screen: Album },
    Search: { screen: Search }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.secundary,
        borderBottomWidth: 0
      },
      headerTintColor: colors.white,
      headerBackTitle: null
    }
  }
);

const Routes = createAppContainer(Rotas);

export default Routes;
