import { View, StyleSheet } from "react-native";
import { ICreateScreen } from "../common/types";
import StyledButton from "../components/StyledButton";
import FormCreateCategorie from "../components/forms/FormCreateCategorie";
import Header from "../components/Header";
import { openDrawer, redirect } from "../common/utils";
import { styles as stylesCommon } from "../common/styles";

const CreateCategorie = ({
  StackNavigation,
  DrawerNavigation,
  db,
}: ICreateScreen) => {
  return (
    <View style={stylesCommon.screen}>
      <Header
        openDrawer={() => openDrawer(DrawerNavigation)}
        screen={"CreateCategorie"}
        buttonAction={() => DrawerNavigation.navigation.navigate("Categories")}
      />
      <View style={styles.firstSection}>
        <FormCreateCategorie
          to={() => redirect({ navProps: DrawerNavigation, to: "Categories" })}
          db={db}
        />
      </View>
      <View style={styles.secondSection}>
        <StyledButton
          navigation={StackNavigation}
          to="Products"
          children={"Cancelar"}
          color={"secondary"}
          type="Navigate"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  firstSection: {
    flex: 5,
  },
  secondSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default CreateCategorie;
