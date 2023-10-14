import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, View } from "react-native";
import StyledButton from "../components/StyledButton";
import theme from "../common/theme";
import { ICheckListScreen } from "../common/types";
import Header from "../components/Header";
import { openDrawer } from "../common/utils";
import { styles as commonStyles } from "../common/styles";

const CheckList = ({ navigation, db }: ICheckListScreen) => {
  return (
    <SafeAreaView style={commonStyles.screen}>
      <Header
        openDrawer={() => openDrawer(navigation)}
        screen="CheckList"
        buttonAction={() => navigation.navigation.goBack()}
      />
      <View style={styles.firstSection}>
        <View style={[commonStyles.list, { marginTop: 20 }]}>
          <ScrollView overScrollMode="never" style={commonStyles.scrollView} />
        </View>
      </View>
      <View style={commonStyles.secondSection}>
        <StyledButton
          type="Navigate"
          children={"Listo"}
          color={"primary"}
          navigation={navigation}
          to="Home"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  firstSection: {
    flex: 5,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default CheckList;
