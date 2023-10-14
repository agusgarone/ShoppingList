import { StyleSheet } from "react-native";
import theme from "./theme";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.lightWhite,
  },
  firstSection: {
    flex: 3,
    display: "flex",
    justifyContent: "flex-end",
  },
  sectionFilters: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  buttonFilter: {
    width: 100,
    height: 35,
    backgroundColor: theme.colors.darkWhite,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonFilterText: {
    color: theme.colors.black,
  },
  list: {
    flex: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.lightWhite,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: theme.colors.mediumWhite,
    borderWidth: 2,
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
  secondSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
