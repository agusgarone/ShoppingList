import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Lists from "../data/Lists";
import theme from "../common/theme";
import ModalLista from "../components/ModalList";
import { IItem, IListItem, ISelectListScreen } from "../common/types";
import Header from "../components/Header";
import { openDrawer } from "../common/utils";

const Item = ({ list, onPress }: IItem) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity
      style={styles.sectionText}
      onPress={onPress}
      activeOpacity={1}
    >
      <Text style={styles.title}>{list?.name}</Text>
      <Text
        style={styles.subText}
      >{`${list?.products?.length} productos`}</Text>
      <Text style={styles.subText}>{list?.created}</Text>
    </TouchableOpacity>
  </View>
);

const ListItem = ({ list, setModalVisible }: IListItem) => (
  <Item list={list} onPress={() => setModalVisible(true)} />
);

const SelectList = ({ DrawerNavigation }: ISelectListScreen) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        openDrawer={() => openDrawer(DrawerNavigation)}
        screen="SelectList"
        buttonAction={() => DrawerNavigation.navigation.goBack()}
      />
      <ModalLista
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        overScrollMode="never"
        style={styles.list}
        data={Lists}
        renderItem={({ index, item, separators }) => (
          <ListItem list={item} setModalVisible={setModalVisible} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: theme.colors.lightWhite,
  },
  list: {
    height: 660,
    flexGrow: 0,
    marginTop: 24,
  },
  buttonContainer: {
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  itemContainer: {
    padding: 0,
    height: 150,
    backgroundColor: "red",
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 7,
  },
  sectionText: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: "95%",
    backgroundColor: theme.colors.lightWhite,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: theme.fontWeights.bold as any,
    letterSpacing: 0.5,
  },
  subText: {
    marginTop: 2,
    fontSize: theme.fontSize.body,
  },
});

export default SelectList;
