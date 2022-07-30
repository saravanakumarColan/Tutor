import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  LG_BG_THEME,
  View_Spacing,
  Basic_Viewdimension,
} from "../Assets/Constant/fontsAndColors";

function Tabbar(props) {
    const { name, name1,Tab1 ,} = props;
  const [tab, setTab] = React.useState(true);
  const [tab1, setTab1] = React.useState(false);

   

  const _selectTab = () => {
    setTab(true);
    setTab1(false);
 Tab1(true)
  }
  const _selectTab1 = () => {
    
    setTab(false);
    setTab1(true);
Tab1(false)
  };
  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}
    >
      <TouchableOpacity onPress={() => _selectTab()} style={tab? styles.select_btn:styles.unselect_btn}>
        <Text style={tab?styles.text:styles.blue_text}>{"Select Subjects"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _selectTab1()} style={tab1? styles.select_btn:styles.unselect_btn}>
        <Text style={tab1?styles.text:styles.blue_text}>{"Select Subjects"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tabbar;

const styles = StyleSheet.create({
  select_btn: {
    height: View_Spacing.VS_W5,
    backgroundColor: LG_BG_THEME.App_Text_Blue,
    width: "40%",
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  unselect_btn: {
    height: View_Spacing.VS_W5,
   borderWidth:0.5,
   borderColor:LG_BG_THEME.App_Text_Blue,
    width: "40%",
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 14,

    fontFamily: "Poppins-SemiBold",
    lineHeight: 20,
  },
  blue_text: {
    color: LG_BG_THEME.App_Text_Inactive,
    fontSize: 14,

    fontFamily: "Poppins-SemiBold",
    lineHeight: 20,
  },
});
