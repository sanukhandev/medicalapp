import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRef } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarVisible: false,

          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome
                  name="home"
                  size={25}
                  color={focused ? "#206df1" : "gray"}
                ></FontAwesome>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Search"}
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome
                  name="suitcase"
                  size={25}
                  color={focused ? "#206df1" : "gray"}
                ></FontAwesome>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen
          name={"ActionButton"}
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#206df1",
                    borderRadius: 55 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS == "android" ? 50 : 30,
                    shadowColor: "#000",
                    shadowOpacity: 0.06,
                    shadowOffset: {
                      width: 10,
                      height: 10,
                    },
                  }}
                >
                  <FontAwesome
                    name="plus"
                    size={25}
                    color={"white"}
                  ></FontAwesome>
                </View>
              </TouchableOpacity>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Notifications"}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome
                  name="bell"
                  size={25}
                  color={focused ? "#206df1" : "gray"}
                ></FontAwesome>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Settings"}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome
                  name="user"
                  size={25}
                  color={focused ? "#206df1" : "gray"}
                ></FontAwesome>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  width = width - 80;
  // Total five Tabs...
  return width / 5;
}

function EmptyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
