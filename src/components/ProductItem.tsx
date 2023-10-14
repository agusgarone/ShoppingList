import { View, Text, StyleSheet } from "react-native";
import theme from "../common/theme";
import { IProducts } from "../common/types";

const ProductItem = ({ categoria, id, name }: IProducts) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text>Icono</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    marginHorizontal: 16,
    borderBottomColor: theme.colors.white,
    borderStyle: "solid",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSize.body,
  },
});

export default ProductItem;
