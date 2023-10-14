import { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import StyledButton from "../components/StyledButton";
import ProductItem from "../components/ProductItem";
import ModalSeleccionarProducto from "../components/ModalSelectProduct";
import { ICreateListScreen, IProducts } from "../common/types";
import { getAllProducts } from "../data/Controller";
import Header from "../components/Header";
import { openDrawer } from "../common/utils";
import { styles as commonStyles } from "../common/styles";
import ItemRender from "../components/ItemRender";

const CrearLista = ({ navigation, db }: ICreateListScreen) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  // useEffect(() => {
  //   navigation.navigation.addListener("focus", () => {
  //     getAllProducts(db, setProducts);
  //   });
  // }, []);

  return (
    <SafeAreaView
      style={[commonStyles.screen, { justifyContent: "space-between" }]}
    >
      <ModalSeleccionarProducto
        show={modalVisible}
        onDismiss={() => setModalVisible(false)}
        db={db}
        setSelectedProducts={setProducts}
        selectedProducts={products}
      />
      <Header
        openDrawer={() => openDrawer(navigation)}
        screen="CreateList"
        buttonAction={() => navigation.navigation.goBack()}
      />
      <View style={commonStyles.firstSection}>
        <View style={[commonStyles.list, { marginTop: 20 }]}>
          <FlatList
            overScrollMode="never"
            style={commonStyles.scrollView}
            data={products}
            renderItem={(product) => (
              <ItemRender
                id={product.item.id.toString()}
                value={product.item.name}
                key={`${product.item.name}-${product.item.id}`}
                db={db}
                setRefresh={setRefresh}
                screen={"CreateList"}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      <View style={commonStyles.secondSection}>
        <StyledButton
          children={"Agregar"}
          color={"primary"}
          type="Action"
          action={() => setModalVisible(true)}
        />
        <StyledButton
          children={"Aceptar"}
          color={"secondary"}
          type="Navigate"
          navigation={navigation}
          to="CheckList"
        />
      </View>
    </SafeAreaView>
  );
};

export default CrearLista;
