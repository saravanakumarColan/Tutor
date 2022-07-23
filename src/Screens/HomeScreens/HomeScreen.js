import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
  Basic_Viewdimension,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import Icon from "react-native-vector-icons/AntDesign";
import { List, Chip, Divider } from "react-native-paper";
import Button from "../../Components/Button";
import HomeContainer from "../../Components/HomeContainer";
HomeContainer
function HomeScreen(props) {
  return (
  <HomeContainer>
      <Header title="Dashboard" {...props} />
      <Image
        source={require("../../Assets/images/dashboard.png")}
        style={{
          width: "100%",
          height: "20%",
          resizeMode: "contain",
          top: View_Spacing.VS_W1,
        }}
      />
      <View style={{height:View_Spacing.VS_W2}}/>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
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
     <View  style={{padding:15}}>
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
              {"By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."}
            </Text>
     </View>
     <View style={{height:View_Spacing.VS_W5}}/>
        <View style={{height:View_Spacing.VS_W6,flexDirection:'row',elevation:1}}>
          <View style={{flex:0.1}} />
          <View style={{flex:0.4,alignItems:'center',backgroundColor:LG_BG_THEME.App_Text_Blue,justifyContent:'center',width:'60%',borderTopLeftRadius:Basic_Viewdimension.VD_BorderRadius,borderBottomLeftRadius:Basic_Viewdimension.VD_BorderRadius}}>
          <Text
              style={{
                color: "#fff",
                fontSize: 16,
                textAlign: "left",
                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
               
              }}
            >
              {"My Earnings"}
            </Text>
          </View>
        
            <View style={{borderWidth:0.3,borderColor:LG_BG_THEME.App_Text_Blue,flex:0.4,alignItems:'center',justifyContent:'center',borderTopRightRadius:Basic_Viewdimension.VD_BorderRadius,borderBottomRightRadius:Basic_Viewdimension.VD_BorderRadius}}>
            <Text
              style={{
                color: LG_BG_THEME.App_Text_Blue,
                fontSize: 20,
                textAlign: "left",
                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
                
              }}
            >
              {"1200.00"}
            </Text>
            </View>
            <View style={{flex:0.1}} />
        </View>
        <View style={{height:View_Spacing.VS_W7}}/>
        <Button textStyle={{
                color: "#ffffff",
                fontSize: fontSize.Large,
                letterSpacing: 2,
       } } 
       onPress={()=>alert("Add subject")} name="Add Subject"/>
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
