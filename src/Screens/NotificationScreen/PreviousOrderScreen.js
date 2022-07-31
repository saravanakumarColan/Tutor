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
import {
  View_Spacing,
  Basic_Viewdimension,
  LG_BG_THEME,
  fontSize,
  height
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import SessionList from '../../Components/SessionList';

function PreviousOrderScreen(props) {
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
    <Header title={'Previous orders'} {...props} />
  
    <FlatList
      keyExtractor={(item) => item.id}
      data={Category}
      renderItem={({ item }) => (
        <View style={{padding:10}}>
        <SessionList
      Complete={isNewTask}
      
       />
       </View>
      )}
    />
  </HomeContainer>
  )
}

export default PreviousOrderScreen