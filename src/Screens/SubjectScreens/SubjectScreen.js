import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import HomeContainer from "../../Components/HomeContainer";
import Tabbar from "../../Components/Tabbar";
import Button from "../../Components/Button";
import {
  LG_BG_THEME,
  Basic_Viewdimension,
  View_Spacing,
  fontSize,
  height,
} from "../../Assets/Constant/fontsAndColors";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function SubjectScreen(props) {
  const [tab, setTab] = useState(true);
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
      <Header {...props} />
      <View style={{ height: (height / 100) * 3 }} />
      <Tabbar Tab1={(e) => setTab(e)} Tab2={(e) => setTab(e)} />
      {tab ? (
        <>
          <View style={{ height: (height / 100) * 3 }} />
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize.Large,
                color: LG_BG_THEME.App_Text_Blue,
                fontWeight: "700",
              }}
            >
              {"Select Subject"}
            </Text>
          </View>
          <View style={{ height: (height / 100) * 2 }} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: LG_BG_THEME.App_Text_Blue,
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.4,
              shadowRadius: 8,
              elevation: 10,
            }}
          >
            <View style={styles.table_Container}>
              <View
                style={{
                  flex: 0.15,
                  flexDirection: "row",
                  backgroundColor: LG_BG_THEME.App_Text_Blue,
                  height: (height / 100) * 2,
                  borderTopLeftRadius: Basic_Viewdimension.VD_BorderRadius,
                  borderTopRightRadius: Basic_Viewdimension.VD_BorderRadius,
                }}
              >
                <View
                  style={[
                    styles.table_head,
                    { borderRightWidth: 0.3, borderColor: "#fff" },
                  ]}
                >
                  <Text style={styles.table_head_Text}>
                    Add General Category
                  </Text>
                </View>
                <View style={styles.table_head}>
                  <Text style={styles.table_head_Text}>Add Sub Category</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", flex: 0.85 }}>
                <View
                  style={[
                    styles.table_sub_Container,
                    {
                      borderRightWidth: 0.3,
                      borderColor: LG_BG_THEME.App_Text_Blue,
                    },
                  ]}
                >
                  <FlatList
                    keyExtractor={(item) => item.id}
                    data={Category}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ flex: 1, paddingTop: (height / 100) * 5 }}
                      >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
                <View style={styles.table_sub_Container}>
                  <FlatList
                    keyExtractor={(item) => item.id}
                    data={Category}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ flex: 1, paddingTop: (height / 100) * 5 }}
                      >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: (height / 100) * 7 }} />

          <Button
          onPress = {()=>{props.navigation.navigate('QuizScreen')}}
            textStyle={{
              color: "#ffffff",
              fontSize: fontSize.Large,
              letterSpacing: 2,
            }}
            name="StartQuiz"
          />
        </>
      ) : (
        <>
         <View style={{ height: (height / 100) * 3 }} />
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize.Large,
                color: LG_BG_THEME.App_Text_Blue,
                fontWeight: "700",
              }}
            >
              {"My Subject"}
            </Text>
          </View>
          <View style={{ height: (height / 100) * 2 }} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: LG_BG_THEME.App_Text_Blue,
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.4,
              shadowRadius: 8,
              elevation: 10,
            }}
          >
            <View style={styles.table_Container}>
              <View
                style={{
                  flex: 0.15,
               
                 justifyContent:'center',
                  backgroundColor:LG_BG_THEME.App_Text_Blue,
                
                  borderTopLeftRadius: Basic_Viewdimension.VD_BorderRadius,
                  borderTopRightRadius: Basic_Viewdimension.VD_BorderRadius,
                 
                }}
              >
                 <FlatList
                 horizontal={true}
                    keyExtractor={(item) => item.id}
                    data={Category}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{height:height/100*6,justifyContent:'center',paddingLeft:height/100*2}}
                      >
                        
                  <Text style={styles.table_head_Text}>
                    {item.name}
                  </Text>
              
                      </TouchableOpacity>
                    )}
                  />
                
               
              </View>
              <View style={{ flexDirection: "row", flex: 0.85 }}>
                <View
                  style={
                    styles.table_sub_Container
                   
                  }
                >
                  <FlatList
                    keyExtractor={(item) => item.id}
                    data={Category}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ flex: 1, paddingTop: (height / 100) * 5 }}
                      >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
               
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: (height / 100) * 7 }} />

        </>
      )}
    </HomeContainer>
  );
}

export default SubjectScreen;

const styles = StyleSheet.create({
  table_Container: {
    flex: 0.9,
    height: (height / 100) * 45,
    borderWidth: 0.3,
    borderColor: LG_BG_THEME.App_Text_Blue,
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    backgroundColor: "#FFF",
  },
  table_head: {
    flex: 0.5,
    alignItems: "center",

    justifyContent: "center",
  },
  table_head_Text: {
    fontSize: fontSize.Small,
    color: "#FFF",
    fontWeight: "700",
  },
  table_sub_Container: {
    flex: 0.5,
    alignItems: "center",
  },
});
