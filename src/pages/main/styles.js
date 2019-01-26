import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  headerRight: {
    marginRight: metrics.basePadding
  },
  loading: {
    marginTop: metrics.basePadding
  }
});

export default styles;
