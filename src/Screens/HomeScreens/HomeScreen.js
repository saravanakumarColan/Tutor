import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
  Basic_Viewdimension,
  height,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import Icon from "react-native-vector-icons/AntDesign";
import { List, Chip, Divider } from "react-native-paper";
import Button from "../../Components/Button";
import HomeContainer from "../../Components/HomeContainer";
import Label from "../../Components/Label";

HomeContainer;
function HomeScreen(props) {
  return (
    <HomeContainer>
      <Header title="Dashboard" {...props} />
      <View style={{ height: View_Spacing.VS_W2 }} />
      <Image
        source={require("../../Assets/images/dashboard.png")}
        style={{
          width: height/100*60,
          height: height/100*19,
          resizeMode: "contain",
          
         
        }}
      />
 
      <View style={{ height: View_Spacing.VS_W2 }} />
      <TouchableOpacity
        style={{flex:0.2, flexDirection: "row" ,}}
        onPress={() => props.navigation.navigate("MyProfile")}
      >
        <View
          style={{
            flex: 0.4,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: View_Spacing.VS_W4,
              backgroundColor: LG_BG_THEME.App_Text_Blue,
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: Basic_Viewdimension.VD_BorderRadius,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,

                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
              }}
            >
              {"Reviews"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            left: 35,
          }}
        >
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana",
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              right: 2,
            }}
          />

          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text
              style={{
                color: LG_BG_THEME.App_Text_Blue,
                fontSize: 16,
                textAlign: "left",
                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
                paddingTop: 5,
              }}
            >
              {"Full name"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{flex:0.3, padding: 15 ,}}>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Blue,
            fontSize: 16,
            textAlign: "left",
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingTop: 5,
          }}
        >
          {"Bio"}
        </Text>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Inactive,
            fontSize: 12,
            textAlign: "left",
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingTop: 5,
          }}
        >
          {
            "By clicking ???Accept All Cookies???, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."
          }
        </Text>
      </View>
      <View style={{ height: View_Spacing.VS_W2 }} />

      <Label />
 
      <View style={{ height: View_Spacing.VS_W5 }} />
      <Button
        textStyle={{
          color: "#ffffff",
          fontSize: fontSize.Large,
          letterSpacing: 2,
        }}
        onPress={() => props.navigation.navigate("SubjectScreen")}
        name="Add Subject"
      />
      <View style={{ height: height/100*5 }} />
    </HomeContainer>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});

export default HomeScreen;
