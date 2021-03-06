import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";
import * as React from "react";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import FastImage from 'react-native-fast-image';

import { My_Home_Tab, My_club_Tab } from "../RootNavigation";
import ChatScreen from "../Screens/ChatScreens/ChatScreen";
import ProfileScreen from "../Screens/ProfileScreens/ProfileScreen";
import HomeScreen from "../Screens/HomeScreens/HomeScreen";
const Tab = createBottomTabNavigator();
// import ProfileScreen from "../Screens/ProfileScreen";
import { icons } from "../Assets/icons";
import { LG_BG_THEME } from "../Assets/Constant/fontsAndColors";
export const CustomTab = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.sublabelTextColor,
        showLabel: true,
        headerShown: false,
        tabBarItemStyle: { width: 100, top: 5, padding: 5 },
        tabBarStyle: {
          paddingBottom: 5,
          borderColor: "#199ECF",
          borderRadius: 23,
          left: 10,
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          height: 55,
          borderTopWidth: 0.5,
          borderTopColor: "#199ECF",
          borderWidth: 0.5,
          shadowColor: LG_BG_THEME.App_Text_Blue,
          bottom:10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
          backgroundColor:'#fff'
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={My_Home_Tab}
        options={{
          tabBarLabelStyle: { fontFamily: "Poppins-SemiBold" },
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {/* <View
                style={
                  focused
                    ? {
                        backgroundColor: colors.primary,
                        height: 2,
                        width: 40,
                        borderRadius: 2,
                        // top: -3,
                        // marginBottom:5

                      }
                    : null
                }
              /> */}
             <Image  source={icons.home_lite} style={{height:20,width:20,tintColor:focused?"#199ECF":"#cccfcd"}} />
              {/* <FastImage
                resizeMode={'contain'}
                tintColor={focused ? colors.primary : colors.sublabelTextColor}
                style={{width: 21, height: 21}}
                source={require('../Assets/icons/home-button.png')}
              /> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={My_club_Tab}
        options={{
          tabBarLabelStyle: { fontFamily: "Poppins-SemiBold" },
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center", }}>
              {/* <View
                style={
                  focused
                    ? {
                        backgroundColor: colors.primary,
                        height: 2,
                        width: 40,
                        borderRadius: 2,
                        // top: -5,
                        marginBottom:7
                      }
                    : null
                }
              /> */}
              <Image source={icons.task} style={{height:20,width:20,tintColor:focused?"#199ECF":"#cccfcd"}} />
              {/* <FastImage
                resizeMode={'contain'}
                tintColor={focused ? colors.primary : colors.sublabelTextColor}
                style={{width: 21, height: 21}}
                source={require('../Assets/clubhome.png')}
              /> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontFamily: "Poppins-SemiBold" },
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              
              <Image source={icons.chat_lite} style={{height:20,width:20,tintColor:focused?"#199ECF":"#cccfcd"}} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Image source={icons.profile} style={{height:20,width:20,tintColor:focused?"#199ECF":"#cccfcd"}} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  circle: {
    marginBottom: 20,
    backgroundColor: "#fff",
    width: 70,
    height: 70,

    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    marginBottom: 30,
  },
  Innercircle: {
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ImgStyle: {
    width: 25,
    tintColor: "#fff",
    height: 25,
    resizeMode: "contain",
  },
});
