import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import HomeContainer from "../../Components/HomeContainer";
import {
  LG_BG_THEME,
  Basic_Viewdimension,
  fontSize,
  View_Spacing,
  height,
} from "../../Assets/Constant/fontsAndColors";
import { icons } from "../../Assets/icons";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import { Divider } from "react-native-paper";
import CustomTextInput from "../../Components/CustomTextInput";

export default function WithdrawScreen(props) {
  return (
    <HomeContainer>
      <Header title="Withdraw Funds" {...props} />

      <View style={styles.text_align}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"Payment History"}
        </Text>
      </View>
      <View style={styles.text_align}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text
          style={{
            fontSize: (height / 100) * 4.5,
            color: "#000",
            fontWeight: "500",
          }}
        >
          {"$ 1,200.00 "}
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: LG_BG_THEME.App_Text_Inactive,
            }}
          >
            {"usd"}
          </Text>
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Divider />
      </View>
      <View style={{ height: View_Spacing.VS_W2 }} />
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Inactive,
          }}
        >
          {"Released payments"}
        </Text>
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: "#000",
          }}
        >
          {"$550.00"}
        </Text>
      </View>
      <View style={{ height: View_Spacing.VS_W3 }} />
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Inactive,
          }}
        >
          {"pending payments"}
        </Text>
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: "#000",
          }}
        >
          {"$550.00"}
        </Text>
      </View>
      <View style={{ height: View_Spacing.VS_W2 }} />
      <View style={{ padding: 20 }}>
        <Divider />
      </View>
      <View style={styles.text_align}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"Request Withdrawal"}
        </Text>
      </View>
      <View style={{ height: View_Spacing.VS_W4 }} />
      <View style={styles.text_input}>
        <CustomTextInput image={icons.lock} name={"Payout Amount(USD)"} />
      </View>
      <View style={{ height: View_Spacing.VS_W6 }} />
      <Button
        onPress={() => alert("done")}
        textStyle={{
          color: "#fff",
          fontSize: fontSize.Large,
        }}
        name={"Request Withdrawal"}
      />
    </HomeContainer>
  );
}

const styles = StyleSheet.create({
  text_align: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_input: {
    justifyContent: "center",
    alignItems: "center",
  },
});
