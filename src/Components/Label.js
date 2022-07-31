import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LG_BG_THEME,View_Spacing,Basic_Viewdimension } from "../Assets/Constant/fontsAndColors";

export default function Label(props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flex: 0.1 }} />
        <View style={styles.blue_label}>
          <Text style={styles.text}>{"My Earnings"}</Text>
        </View>

        <View style={styles.white_label}>
          <Text
            style={{
              color: LG_BG_THEME.App_Text_Blue,
              fontSize: 20,
              textAlign: "left",
              fontFamily: "Poppins-SemiBold",
            
            }}
          >
            {"1200.00"}
          </Text>
          <View style={{ flex: 0.1 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: View_Spacing.VS_W6,
    flexDirection: "row",
   
    
  },
  blue_label: {
    flex: 0.4,
    alignItems: "center",
    backgroundColor: LG_BG_THEME.App_Text_Blue,
    justifyContent: "center",
    width: "60%",
    borderTopLeftRadius: Basic_Viewdimension.VD_BorderRadius,
    borderBottomLeftRadius: Basic_Viewdimension.VD_BorderRadius,
  },
  white_label: {
    borderWidth: 0.3,
    borderColor: LG_BG_THEME.App_Text_Blue,
    flex: 0.4,
    
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: Basic_Viewdimension.VD_BorderRadius,
    borderBottomRightRadius: Basic_Viewdimension.VD_BorderRadius,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    
    fontFamily: "Poppins-SemiBold",
   
  },
});
