import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";
import * as SQLite from "expo-sqlite";

export type StackParamList = {
  Home?: undefined;
  CreateList?: undefined;
  SelectList?: undefined;
  CheckList?: undefined;
  CreateProduct?: undefined;
  Products?: undefined;
};

export type StackProps = NativeStackScreenProps<StackParamList>;
export type DrawerProps = DrawerScreenProps<any>;

export interface IStackNavigation {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

export interface IRedirect {
  navProps: DrawerProps;
  to: string;
}

export interface IFormCreateProduct {
  to: () => void;
  db: SQLite.WebSQLDatabase;
  dataRender?: any[];
}

export interface IFormSelectProduct {
  db: SQLite.WebSQLDatabase;
  dataRender?: IProducts[];
  setDataRender?: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

export interface IModalSelectProduct {
  show: boolean;
  onDismiss: () => void;
  db: SQLite.WebSQLDatabase;
  selectedProducts: IProducts[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

export interface IFormCreateCategorie {
  to: () => void;
  db: SQLite.WebSQLDatabase;
}

export interface ICreateScreen {
  StackNavigation: StackProps;
  DrawerNavigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

export interface ICategoriesScreen {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

export interface ICreateListScreen {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

export interface ICheckListScreen {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

export interface IHomeScreen {
  StackNavigation: StackProps;
  DrawerNavigation: DrawerProps;
}

export interface ISelectListScreen {
  DrawerNavigation: DrawerProps;
}

export interface IProductsScreen {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

export interface IListItem {
  list: ILista;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IItem {
  list: ILista;
  onPress: () => void;
}

export interface ILista {
  id: number;
  name: string;
  created: string;
  products: any[];
}

export interface IProducts {
  id: number;
  name: string;
  categoria: number;
}
