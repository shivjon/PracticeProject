import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../components/Colors'

const Account = () => {
  return (
    <View style={styles.mainConatiner}>
      <Text style={styles.textStyle}>Account</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    backgroundColor:colors.white,
   justifyContent:"center"
   },
   textStyle:{
    fontSize:20,
    color:colors.black,
    fontWeight:'500',
    textAlign:"center"
   }
})