import { NavigationContainer } from "@react-navigation/native";
import HeaderNavigationDrawer from "../navigation/HeaderNavigationDrawer";

const Main = () => {
  return (
    <NavigationContainer>
      <HeaderNavigationDrawer />
    </NavigationContainer>
  );
};

export default Main;
