import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import HomeContainer from '../../Components/HomeContainer'
import Tabbar from '../../Components/Tabbar'
import {
    LG_BG_THEME,
    Basic_Viewdimension,
    View_Spacing,
    fontSize,
  } from "../../Assets/Constant/fontsAndColors";
function SubjectScreen(props)  {
  return (
    <HomeContainer>
<Header  {...props}/>
<Tabbar tab  Tab={(e)=>console.log(e)}/>
    </HomeContainer>
  )
}

export default SubjectScreen

const styles = StyleSheet.create({})