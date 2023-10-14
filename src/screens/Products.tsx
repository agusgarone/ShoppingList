import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { IProductsScreen } from "../common/types";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";
import ModalFilters from "../components/ModalFilters";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/Controller";
import ItemRender from "../components/ItemRender";
import { openDrawer } from "../common/utils";
import { styles } from "../common/styles";

const Products = ({ navigation, db }: IProductsScreen) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (refresh) {
      getAllProducts(db, setProducts);
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    navigation.navigation.addListener("focus", () => {
      getAllProducts(db, setProducts);
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
        screen="Products"
        buttonAction={() => null}
      />
      <View style={styles.screen}>
        <View style={styles.firstSection}>
          <View style={styles.sectionFilters}>
            <TouchableOpacity
              style={styles.buttonFilter}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.buttonFilterText}>Filtro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <FlatList
              data={products}
              renderItem={({ item }) => {
                return (
                  <ItemRender
                    id={item.id}
                    value={item.name}
                    key={`${item.name}-${item.id}`}
                    db={db}
                    setRefresh={setRefresh}
                    screen={"productos"}
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
            children={"Crear producto"}
            color={"primary"}
            type="Navigate"
            navigation={navigation}
            to="CreateProduct"
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

export default Products;
