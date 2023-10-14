import { View, StyleSheet, Text } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import theme from "../common/theme";

const HeaderDrawer = (props) => {
  return (
    <View style={styles.body}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>ShopListApp</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    flex: 1,
    height: 48,
    paddingLeft: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.tertiary,
  },
  textHeader: {
    fontSize: theme.fontSize.subHeading,
    fontWeight: theme.fontWeights.bold as any,
  },
});
export default HeaderDrawer;
