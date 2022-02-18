import { React } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-vector-icons/FontAwesome";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={"home"}
      screenOptions={{ headerShown: false, tabBarVisible: false }}
    >
      <Tab.Screen name="home" component={Home} options={{}} />
      {/* <Tab.Screen name="analytics" component={AnalyticsScreen} />
      <Tab.Screen name="notes" component={NotesScreen} />
      <Tab.Screen name="settings" component={SettingScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
