import { View, Text, FlatList, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import StyledButton from "./StyledButton";
import Lists from "../data/Lists";
import theme from "../common/theme";

const ModalContent = ({ closeModal }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modal}>
        <View style={styles.content}>
          <View style={styles.firstSection}>
            <Text style={styles.title}>{Lists[0].name}</Text>
            <Text>{`Creada el ${Lists[0].created}`}</Text>
            <View style={styles.borderOfList}>
              <FlatList
                overScrollMode="never"
                style={styles.list}
                data={Lists[0].products}
                renderItem={(product) => <ProductItem product={product} />}
                keyExtractor={(item) => item.name}
              />
            </View>
          </View>
          <StyledButton
            children={"Aceptar"}
            color={"primary"}
            type="Action"
            action={closeModal}
          />
        </View>
      </View>
    </View>
  );
};

const ProductItem = ({ product }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.titleProduct}>{product.item.name}</Text>
    </View>
  );
};

const ModalLista = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn={"slideInUp"}
      animationInTiming={800}
      animationOut={"slideOutDown"}
      animationOutTiming={800}
    >
      <ModalContent closeModal={() => setModalVisible(false)} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 320,
    height: 480,
    backgroundColor: "red",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: theme.colors.lightWhite,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    height: "99%",
  },
  firstSection: {
    flex: 2,
  },
  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: theme.fontWeights.bold as any,
    letterSpacing: 0.5,
  },
  borderOfList: {
    height: 300,
    flexGrow: 0,
    marginTop: 15,
    borderColor: theme.colors.mediumWhite,
    borderWidth: 2,
    padding: 3,
    borderRadius: 10,
  },
  list: {
    height: "100%",
    width: "100%",
  },
  item: {
    backgroundColor: theme.colors.lightWhite,
    padding: 20,
    borderBottomColor: theme.colors.mediumWhite,
    borderStyle: "solid",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleProduct: {
    fontSize: theme.fontSize.body,
  },
});

export default ModalLista;
