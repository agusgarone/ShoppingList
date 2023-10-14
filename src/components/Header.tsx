import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../common/theme";
import { DrawerProps } from "../common/types";

interface IHeader {
  openDrawer: () => void;
  screen: string;
  buttonAction: () => void;
}

const Header = ({ openDrawer, screen, buttonAction }: IHeader) => {
  const isBurgerMenu =
    screen === "Home" || screen === "Categories" || screen === "Products"
      ? true
      : false;
  return (
    <View style={styles.body}>
      {isBurgerMenu ? (
        <TouchableHighlight style={styles.imgContent} onPress={openDrawer}>
          <Ionicons name="md-menu" size={32} color="white" />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight style={styles.imgContent} onPress={buttonAction}>
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableHighlight>
      )}
      <View>
        <Text style={styles.title}>ShopAppList</Text>
      </View>
      <TouchableHighlight>
        <Text style={{ color: theme.colors.tertiary }}>nose</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: "space-between",
    backgroundColor: theme.colors.tertiary,
    width: "100%",
    height: 80,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
  imgContent: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: theme.fontWeights.bold as any,
    color: theme.colors.white,
  },
});

export default Header;
