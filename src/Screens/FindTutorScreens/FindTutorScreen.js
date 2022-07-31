import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Button from "../../Components/Button";
import LinearGradient from "react-native-linear-gradient";
import HomeContainer from "../../Components/HomeContainer";
import NewSessionScreen from "./Session/NewSessionScreen";
import {
  View_Spacing,
  Basic_Viewdimension,
  LG_BG_THEME,
  fontSize,
  height
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import ActiveSessionScreen from "./Session/ActiveSessionScreen";
import SessionList from '../../Components/SessionList';

function FindTutorScreen(props) {
  const [isNewTask , setIsNewTask] = React.useState(true)
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
      <Header title={'Tasks'} {...props} />
      <View
        style={{ flex: 0.1, flexDirection: "row", justifyContent: "center" ,paddingVertical:10}}
      >
        <View style={{ flex: 0.3, paddingLeft: 5 }}>
    
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:isNewTask?'#199ECF':'#ffff',
                flexDirection: "row",
              height: View_Spacing.VS_W4,
              borderRadius: Basic_Viewdimension.VD_BorderRadius,
              borderColor: isNewTask?'#fff':LG_BG_THEME.App_Border,
              borderWidth: 1,

              }}
            >
                 <TouchableOpacity
              onPress={() => setIsNewTask(true)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: fontSize.Small, color: !isNewTask?LG_BG_THEME.App_Text_Inactive:'#ffff' }}>
                {"New Tasks"}
              </Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{ flex: 0.05 }} />
        <View style={{ flex: 0.3, paddingLeft: 5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: LG_BG_THEME.App_Border,
              height: View_Spacing.VS_W4,
              borderRadius: Basic_Viewdimension.VD_BorderRadius,
              backgroundColor:!isNewTask?'#199ECF':'#ffff',

            }}
          >
            <TouchableOpacity
              onPress={() => setIsNewTask(false)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: fontSize.Small,
                  color: isNewTask?LG_BG_THEME.App_Text_Inactive:'#ffff',
                }}
              >
                {"Tasks"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Category}
        renderItem={({ item }) => (
          <View style={{padding:10}}>
          <SessionList
        Complete={!isNewTask}
        
         />
         </View>
        )}
      />
    </HomeContainer>
  );
}

export default FindTutorScreen;
