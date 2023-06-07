import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaddingBox, VerticalBox } from '../../components/Commonstyles'
const settingScreen = () => {
  return (
    <View style={styles.mainConatiner}>
    <Text style={styles.textStyle}>settingScreen</Text>
  </View>
  )
}

export default settingScreen

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    backgroundColor:"#000",
   justifyContent:"center"
   },
   textStyle:{
    fontSize:20,
    color:"#fff" ,
    fontWeight:'500',
    textAlign:"center"
   }
})