import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { ICategoriesScreen } from "../common/types";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";
import theme from "../common/theme";
import ModalFilters from "../components/ModalFilters";
import { useEffect, useState } from "react";
import { getAllCategories } from "../data/Controller";
import ItemRender from "../components/ItemRender";
import { openDrawer } from "../common/utils";
import { styles } from "../common/styles";

const Categories = ({ navigation, db }: ICategoriesScreen) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (refresh) {
      getAllCategories(db, setCategorias);
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    navigation.navigation.addListener("focus", () => {
      getAllCategories(db, setCategorias);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ModalFilters
        show={modalVisible}
        onDismiss={() => setModalVisible(false)}
      />
      <Header
        openDrawer={() => openDrawer(navigation)}
        screen="Categories"
        buttonAction={() => null}
      />
      <View style={styles.screen}>
        <View style={[styles.firstSection, { marginTop: 20 }]}>
          <View style={styles.list}>
            <FlatList
              data={categorias}
              renderItem={({ item }) => {
                return (
                  <ItemRender
                    id={item.id}
                    value={item.name}
                    key={`${item.name}-${item.id}`}
                    db={db}
                    setRefresh={setRefresh}
                    screen={"categorias"}
                  />
                );
              }}
              overScrollMode="never"
              style={styles.scrollView}
            />
          </View>
        </View>
        <View style={styles.secondSection}>
          <StyledButton
            children={"Crear categoria"}
            color={"primary"}
            type="Navigate"
            navigation={navigation}
            to="CreateCategorie"
          />
          <StyledButton
            children={"Listo"}
            color={"secondary"}
            type="Navigate"
            navigation={navigation}
            to="Home"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
