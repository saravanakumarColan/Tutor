import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import {
  View_Spacing,
  Basic_Viewdimension,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../Assets/icons";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

function SessionList(props) {
  const { Complete, tutor } = props;
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: LG_BG_THEME.App_Border,
        borderRadius: Basic_Viewdimension.VD_BorderRadius,
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{ flexDirection: "row", flex: 1, paddingVertical: 5 }}>
        <View
          style={{
            justifyContent: "center",
            paddingVertical: 10,
            flex: 0.3,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana",
            }}
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              // right: 2,
            }}
          />

          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text
              style={{
                color: LG_BG_THEME.App_Text_Blue,
                fontSize: 14,
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
        <View style={{ flex: 0.7 }}>
          <Text
            style={{
              fontSize: 12,
              color: LG_BG_THEME.App_Text_Blue,
              fontFamily: "Poppins-Medium",
            }}
          >
            {"Description"}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: LG_BG_THEME.App_Text_Inactive,
              fontFamily: "Poppins-Medium",
              letterSpacing: 1,
            }}
          >
            {
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            }
          </Text>
        </View>
      </View>
      <Divider />
      <View>
        <Text
          style={{
            fontSize: 12,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Medium",
            padding: 10,
          }}
        >
          {"Doucment"}
        </Text>
        <View style={{flexDirection:'row',padding:5,justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',padding:5}}>
            <Image source={icons.pdf} style={{ height: 35, width: 35,marginHorizontal:3 }} />
            <View>
              <Text style={styles.title}>{"Mathematics"}</Text>
              <Text style={styles.subTitle}>{"Exam Essay"}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',padding:5}}>
            <Image source={icons.pdf} style={{ height: 35, width: 35,marginHorizontal:3 }} />
            <View>
              <Text style={styles.title}>{"Mathematics"}</Text>
              <Text style={styles.subTitle}>{"Exam Essay"}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',padding:5}}>
            <Image source={icons.chat} style={{ height: 35, width: 35,marginHorizontal:3 }} />
          </View>
          <View style={{padding:5}}>
            {Complete ?
              <View style={{borderRadius:5,backgroundColor:'green',marginVertical:5,flexDirection:'row',paddingHorizontal:3,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#ffff',padding:5,paddingHorizontal:5,}}>{"Completed"}</Text>
            </View>
            :
            <><View style={{ borderRadius: 5, backgroundColor: 'green', marginVertical: 5, flexDirection: 'row', paddingHorizontal: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={"check"} size={15} color={LG_BG_THEME.WHITE_THEME} />
                <Text style={{ color: '#ffff', padding: 5, paddingHorizontal: 5, }}>{"Accept"}</Text>
              </View><View style={{ borderRadius: 5, backgroundColor: 'red', marginVertical: 5, flexDirection: 'row', paddingHorizontal: 3, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name={"close"} size={15} color={LG_BG_THEME.WHITE_THEME} />
                  <Text style={{ color: '#ffff', padding: 5, paddingHorizontal: 5, }}>{"Decline"}</Text>
                </View></>
           }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    color: LG_BG_THEME.App_Text_Blue,
    fontFamily: "Poppins-Medium",
    
  },
  subTitle: {
    fontSize: 10,
    color: LG_BG_THEME.App_Text_Inactive,
    fontFamily: "Poppins-Medium",
    letterSpacing: 1,
  },
});
export default SessionList;
