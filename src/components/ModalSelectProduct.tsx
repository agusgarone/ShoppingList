import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import theme from "../common/theme";
import FormSelectProduct from "./forms/FormSelectProduct";
import { IModalSelectProduct, IProducts } from "../common/types";
import { styles as commonStyles } from "../common/styles";

const ModalSeleccionarProducto = ({
  show,
  onDismiss,
  db,
  selectedProducts,
  setSelectedProducts,
}: IModalSelectProduct) => {
  const bottomSheetHeight = Dimensions.get("window").height * 0.92;
  const [open, setOpen] = useState(show);
  const [result, setResult] = useState<IProducts[]>([]);
  const [productSelected, setProductSelected] = useState<IProducts[]>([]);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 700,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [bottom, bottomSheetHeight, show]);

  const onGesture = (event) => {
    if (event?.nativeEvent?.translationY > 0) {
      bottom.setValue(-event?.nativeEvent?.translationY);
    }
  };

  const onGestureEnd = (event) => {
    if (event?.nativeEvent?.translationY > bottomSheetHeight / 3) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  const selectProduct = (item: IProducts, isSelected) => {
    if (isSelected) {
      setProductSelected((_productSelected) =>
        _productSelected.filter((x) => x.id !== item.id)
      );
      setSelectedProducts((_productSelected) =>
        _productSelected.filter((x) => x.id !== item.id)
      );
    } else {
      setProductSelected([...productSelected, item]);
      setSelectedProducts([...selectedProducts, item]);
    }
  };

  if (!open) {
    return null;
  }
  return (
    <Animated.View
      style={[styles.container, { height: bottomSheetHeight, bottom: bottom }]}
    >
      <TouchableWithoutFeedback onPress={() => onDismiss()}>
        <View
          style={{
            height: Dimensions.get("window").height * 0.27,
            width: "100%",
          }}
        ></View>
      </TouchableWithoutFeedback>
      <View style={styles.modal}>
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <Text style={styles.title}>Elegir producto</Text>
        </PanGestureHandler>
        <View style={styles.modalContent}>
          <View style={styles.centeredView}>
            <FormSelectProduct
              db={db}
              dataRender={result}
              setDataRender={setResult}
            />
            <View style={[commonStyles.list]}>
              <FlatList
                overScrollMode="never"
                style={commonStyles.scrollView}
                data={result}
                renderItem={(product) => {
                  const isSelected = productSelected.find(
                    (prod) => prod.id === product.item.id
                  );
                  return (
                    <TouchableOpacity
                      style={[
                        styles.box,
                        { backgroundColor: isSelected ? "red" : "#FFF" },
                      ]}
                      onPress={() => selectProduct(product.item, isSelected)}
                    >
                      <Text>{product.item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    justifyContent: "flex-end",
  },
  modal: {
    height: Dimensions.get("window").height * 0.65,
    width: "100%",
    backgroundColor: theme.colors.mediumWhite,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  title: {
    fontSize: theme.fontSize.heading,
    color: theme.colors.tertiary,
    paddingTop: 13,
    paddingBottom: 10,
    paddingHorizontal: 24,
    borderColor: theme.colors.white,
    borderBottomWidth: 2,
  },
  modalContent: {
    width: "100%",
    height: "90%",
    zIndex: 10,
    // paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  centeredView: {
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    paddingBottom: 15,
  },
  scrollView: {
    height: "70%",
    width: "100%",
  },
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: theme.colors.mediumWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    padding: 4,
  },
});

export default ModalSeleccionarProducto;
