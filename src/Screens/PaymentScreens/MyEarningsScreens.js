import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import HomeContainer from "../../Components/HomeContainer";
import {
  LG_BG_THEME,
  Basic_Viewdimension,
  fontSize,
  View_Spacing,
} from "../../Assets/Constant/fontsAndColors";
import { icons } from "../../Assets/icons";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import { Divider } from "react-native-paper";

export default function MyEarningsScreens(props) {
  return (
    <HomeContainer>
      <Header title="My Earnings" {...props} />
      <View style={{ height: View_Spacing.VS_W2 }} />
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.Paypal_btn}>
          <Image
            style={styles.paypal_img}
            source={require("../../Assets/images/paypal.png")}
          />
          <Text  style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Blue,
          }}>{"Add your Account"}</Text>
        </View>
      </View>
      <View style={{ height: View_Spacing.VS_W3 }} />
      <Button
        onPress={() => alert("Link card")}
        textStyle={{
          color: "#fff",
          fontSize: fontSize.Large,
          
        }}
        name={"Withdraw Funds"}
      />
      <View style={{ height: View_Spacing.VS_W3 }} />
      <Label />
      <View style={{ height: View_Spacing.VS_W3 }} />
      <Divider />
      <View style={styles.text_align}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text
          style={{
            fontSize: fontSize.ExtraLarge,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"Payment History"}
        </Text>
      </View>
      <View style={{ flex: 0.2, flexDirection: "row",height:View_Spacing.VS_W10,justifyContent:'center',}}>
        <View style={{flex:0.8,flexDirection:'row',borderBottomWidth:0.3,borderColor:LG_BG_THEME.App_Text_Inactive}}>
        <View style={{ flex: 0.4,justifyContent:'center', }}>
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: LG_BG_THEME.App_Text_Blue,
            }}
          >
            {"Harish"}
          </Text>
          <Text
            style={{
              fontSize: fontSize.Small,
              color: LG_BG_THEME.App_Text_Inactive,
              textAlign:'left'
            }}
          >
            {"Harish"}
          </Text>
        </View>
        <View style={{ flex: 0.3,justifyContent:'center',}}>
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: LG_BG_THEME.App_Text_Blue,
            }}
          >
            {"215.00 $"}
          </Text>
        </View>
        <View style={{ flex: 0.3,justifyContent:'center',alignItems:'flex-end'}}>
        <Text
            style={{
              fontSize: fontSize.Small,
              color: LG_BG_THEME.App_Text_Green,
            }}
          >
            {"Received"}
          </Text>
        </View>
        </View>
      </View>
     
    </HomeContainer>
  );
}

const styles = StyleSheet.create({
  Paypal_btn: {
    height: View_Spacing.VS_W6,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    borderColor: LG_BG_THEME.App_Text_Blue,
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    shadowColor: LG_BG_THEME.App_Text_Blue,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  paypal_img: {
    resizeMode: "contain",
    height: View_Spacing.VS_W5,
    width: View_Spacing.VS_W5,
  },
  text_align: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});
