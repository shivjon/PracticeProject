import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'


const splashScreen = (props) => {
const navigation = useNavigation()
useEffect(() => {
 setTimeout(() => {
    navigation.replace('DrawerStack')
 }, 1000);
}, [])


  return (
    <View style={styles.mainConatiner}>
      <Text style={styles.textStyle}>splashScreen</Text>
    </View>
  )
}

export default splashScreen

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