import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateList from "../screens/CreateList";
import SelectList from "../screens/SelectList";
import CheckList from "../screens/CheckList";
import CreateProduct from "../screens/CreateProduct";
import Home from "../screens/Home";
import { IStackNavigation } from "../common/types";
import CreateCategorie from "../screens/CreateCategorie";

const Stack = createNativeStackNavigator();

const StackNavigation = ({ navigation, db }: IStackNavigation) => {
  const HomeComponent = (props) => (
    <Home DrawerNavigation={navigation} StackNavigation={props} />
  );

  const CreateProductComponent = (props) => (
    <CreateProduct
      DrawerNavigation={navigation}
      StackNavigation={props}
      db={db}
    />
  );

  const CreateCategorieComponent = (props) => (
    <CreateCategorie
      DrawerNavigation={navigation}
      StackNavigation={props}
      db={db}
    />
  );

  const SelectListComponent = (props) => (
    <SelectList DrawerNavigation={navigation} />
  );

  const CreateListComponent = (props) => (
    <CreateList navigation={props} db={db} />
  );

  const CheckListComponent = (props) => (
    <CheckList navigation={props} db={db} />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeComponent}
        options={{ title: "Inicio", headerShown: false }}
      />
      <Stack.Screen
        name="CreateList"
        component={CreateListComponent}
        options={{ title: "Crear lista", headerShown: false }}
      />
      <Stack.Screen
        name="SelectList"
        component={SelectListComponent}
        options={{ title: "Seleccionar lista", headerShown: false }}
      />
      <Stack.Screen
        name="CheckList"
        component={CheckListComponent}
        options={{ title: "Check List", headerShown: false }}
      />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProductComponent}
        options={{ title: "Create Product", headerShown: false }}
      />
      <Stack.Screen
        name="CreateCategorie"
        component={CreateCategorieComponent}
        options={{ title: "Create Category", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
