import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import HomeContainer from "../../Components/HomeContainer";
import Header from "../../Components/Header";
import {
  LG_BG_THEME,
  Basic_Viewdimension,
  View_Spacing,
  fontSize,
  height,
} from "../../Assets/Constant/fontsAndColors";
import { List, Chip, Divider } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import Button from "../../Components/Button";

function QuizScreen(props) {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const Category = [
    {
      id: 1,
      name: "Business",
    },
    {
      id: 2,
      name: "English",
    },
    {
      id: 3,
      name: "Math",
    },
    {
      id: 4,
      name: "Business",
    },
  ];
  return (
    <HomeContainer>
      <Header title={"Quiz"} {...props} />
      <View style={{ padding: 15 }}>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Blue,
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Poppins-Medium",
            lineHeight: 20,
            paddingTop: 5,
          }}
        >
          {"Start Quiz"}
        </Text>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Inactive,
            fontSize: 12,
            textAlign: "left",
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingTop: 5,
            paddingHorizontal: 10,
          }}
        >
          {
            "This test will determine whether you are qualified to tutor this subject on the Tutory platform, Tutor will have two opportunities to take these tests, with no time limit. Failure to pas these two previous trials will result in a lock out from the particular subject. Each test should presurably take no longer than 15 minutes to complete."
          }
        </Text>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Blue,
            fontSize: 12,
            fontFamily: "Poppins-Regular",
            lineHeight: 18,
            paddingTop: 10,
            paddingHorizontal: 5,
          }}
        >
          {"The passing score for this test is a 6/10 which is a 60% or more."}
        </Text>
      </View>
      <Divider />
      <View style={{ padding: 15 }}>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Blue,
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Poppins-Regular",
            lineHeight: 20,
            paddingTop: 5,
          }}
        >
          {"Question 1 / 10"}
        </Text>
        <Text
          style={{
            color: LG_BG_THEME.App_Text_Inactive,
            fontSize: 12,
            textAlign: "left",
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingTop: 5,
            paddingHorizontal: 10,
          }}
        >
          {
            "D1. Lorem ipsum dolor sit arnet, consectetuer adipiscing elit, seddiam nonummy pibh euismod tincidunt ut laoreet dolore magnaal quam erat volutpat Ut wis enim ad minim veniam, quis nos-trud exerci tat ion ullamcorper suscipit lobortis nisl ut aliquip exea commode consequat"
          }
        </Text>
        {Category.map((item,i)=>{
          return(
            <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckBox
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            boxType={"square"}
            lineWidth={1}
            style={{ width: 15, height: 15 }}
          />
          <Text
            style={{
              color: LG_BG_THEME.App_Text_Inactive,
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              lineHeight: 18,
              paddingTop: 10,
              paddingHorizontal: 5,
            }}
          >
            {
              "(A) Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tin king"
            }
          </Text>
        </View>
          )
         
        })}
      
      </View>
      <Button
          onPress = {()=>{null}}
            textStyle={{
              color: "#ffffff",
              fontSize: fontSize.Large,
              letterSpacing: 2,
            }}
            name="Done"
          />
    </HomeContainer>
  );
}

export default QuizScreen;
