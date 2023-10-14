import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../common/theme";
import * as SQLite from "expo-sqlite";
import { deleteCategory, deleteProduct } from "../data/Controller";

interface IItemRender {
  value: string;
  id: string;
  db: SQLite.WebSQLDatabase;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  screen: string;
}

const ItemRender = ({ value, id, db, setRefresh, screen }: IItemRender) => {
  const onPress = () => {
    switch (screen) {
      case "categorias":
        deleteCategory(db, [id]);
        break;
      case "productos":
        deleteProduct(db, [id]);
        break;
      default:
        return null;
    }
  };

  return (
    <View style={styles.box}>
      <Text>{value}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          onPress();
          setRefresh(true);
        }}
      >
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ItemRender;
