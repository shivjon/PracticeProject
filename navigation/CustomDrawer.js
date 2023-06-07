import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../scr/components/Colors'



const CustomDrawer = (props) => {
  const dispatch = useDispatch()
  const DrawerNavigationList = [
   { id: 0, title: "Settings",},
   { id: 1, title: "Profile",},
   { id: 2, title: "Subscription"},

   ]
 

  const handleNavigation = (item) => {
      if (item.title == "Settings") {
        props.navigation.navigate("settingScreen")
      } 
      else if (item.title == "Profile") {
        props.navigation.navigate("Profile")
      } 
      else {
        props.navigation.navigate("Subscription")
      } 
    }

  const renderNavigationList = ({ item }) => {
    return (
      <TouchableOpacity style={styles.renderViews} onPress={() => handleNavigation(item)}>
        <Text style={[styles.userName, { fontSize:13 }]}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flex: 1, backgroundColor:colors.signUpBtn }}>
        <View style={styles.topBox}>
          <Text style={styles.menuText}>Menu</Text>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <Text style={{color:colors.buttonColor,fontSize:15,fontWeight:"bold"}}>Closed</Text>
          </TouchableOpacity>
        </View>      
        <View>
          <FlatList
            data={DrawerNavigationList}
            renderItem={renderNavigationList}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  topBox: {
    height: 30,
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
     justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  menuText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500"
  },
  userName: {
    fontSize: 13,
    color: "white", left: 6
  },
  renderViews: {
    height: 30,
    width: "100%",
    marginVertical:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
})