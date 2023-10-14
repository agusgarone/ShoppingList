import { View, StyleSheet, SafeAreaView } from "react-native";
import StyledButton from "../components/StyledButton";
import Header from "../components/Header";
import { IHomeScreen } from "../common/types";
import { openDrawer } from "../common/utils";
import theme from "../common/theme";

const Home = ({ StackNavigation, DrawerNavigation }: IHomeScreen) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        openDrawer={() => openDrawer(DrawerNavigation)}
        screen="Home"
        buttonAction={() => null}
      />
      <View style={styles.firstSection}>
        <StyledButton
          navigation={StackNavigation}
          to="SelectList"
          children={"Seleccionar lista"}
          color={"primary"}
          type="Navigate"
        />
        <StyledButton
          navigation={StackNavigation}
          to="CreateList"
          children={"Crear lista"}
          color={"secondary"}
          type="Navigate"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: theme.colors.lightWhite,
  },
  firstSection: {
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default Home;
