import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const loginScreen = () => {
  return (
    <View style={styles.mainConatiner}>
    <Text style={styles.textStyle}>LoginScreen</Text>
  </View>
  )
}

export default loginScreen

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
