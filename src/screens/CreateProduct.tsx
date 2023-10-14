import { View, StyleSheet } from "react-native";
import { ICreateScreen } from "../common/types";
import StyledButton from "../components/StyledButton";
import FormCreateProduct from "../components/forms/FormCreateProduct";
import { useEffect, useState } from "react";
import { getAllCategories } from "../data/Controller";
import { openDrawer, redirect } from "../common/utils";
import { styles as stylesCommon } from "../common/styles";
import Header from "../components/Header";
import { NavigationContext } from "@react-navigation/native";

const CreateProduct = ({
  StackNavigation,
  DrawerNavigation,
  db,
}: ICreateScreen) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    StackNavigation.navigation.addListener("focus", () => {
      getAllCategories(db, setCategorias);
    });
  }, []);

  return (
    <View style={stylesCommon.screen}>
      <Header
        openDrawer={() => openDrawer(DrawerNavigation)}
        screen="CreateProduct"
        buttonAction={() => DrawerNavigation.navigation.navigate("Products")}
      />
      <View style={styles.firstSection}>
        <FormCreateProduct
          to={() => redirect({ navProps: DrawerNavigation, to: "Products" })}
          db={db}
          dataRender={categorias}
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
  firstSection: {
    flex: 5,
  },
  secondSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default CreateProduct;
