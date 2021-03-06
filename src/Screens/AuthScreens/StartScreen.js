import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import HomeContainer from "../../Components/HomeContainer";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
  height,
} from "../../Assets/Constant/fontsAndColors";
import Button from "../../Components/Button";

import { StackActions, useTheme } from "@react-navigation/native";

function StartScreen(props) {
  return (
    <HomeContainer>
      {/* image */}
      <View style={{ flex: 1, height: (height / 100) * 40 }}>
        <Image
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          source={require("../../Assets/images/start.png")}
        />
      </View>
      {/* Label */}
      <View style={{ height: View_Spacing.VS_W2 }} />

      <View
        style={{
          flex: 1,
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: fontSize.ExtraLarge,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"Let's get Started!"}
        </Text>
      </View>

      <View style={{ height: View_Spacing.VS_W5 }} />

      <Button
        textStyle={{
          color: "#ffffff",
          fontSize: fontSize.Large,
          letterSpacing: 2,
        }}
        onPress={() => props.navigation.navigate("SignupScreen")}
        name="Sign up"
      />

      <View style={{ height: View_Spacing.VS_W4 }} />
      <View
        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginScreen")}
        >
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: "#9b9a9a",
            }}
          >
            {"I already have an account"}
            <Text
              style={{
                fontSize: fontSize.Medium,
                color: LG_BG_THEME.App_Text_Blue,
              }}
            >
              {" "}
              {"Sign in"}
            </Text>
          </Text>
        </TouchableOpacity>
        <View style={{ height: View_Spacing.VS_W15 }} />
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: "#9b9a9a",
          }}
        >
          {"By signing up,  you agree to the"}
        </Text>
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"Terms of Services"}{" "}
          <Text
            style={{
              fontSize: fontSize.Large_50,
              color: "#9b9a9a",
            }}
          >
            and
          </Text>{" "}
          {"Privacy Policy"}
        </Text>
      </View>
    </HomeContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  imageStyle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  sub_container: { flex: 0.1, justifyContent: "center", alignItems: "center" },
});
export default StartScreen;
