import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../components/Colors'

const profile = () => {
  return (
    <View style={styles.mainConatiner}>
    <Text style={styles.textStyle}>profile</Text>
  </View>
  )
}

export default profile

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    backgroundColor:colors.white,
   justifyContent:"center"
   },
   textStyle:{
    fontSize:20,
    color:colors.black,
    // fontWeight:'500',
    textAlign:"center",
    fontFamily:'Montserrat-ExtraBold'
    
   }
})
