import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import loginScreen from '../scr/screens/authScreens/loginScreen';
import splashScreen from '../scr/screens/launchScreen/splashScreen';
import Profile from '../scr/screens/drawerScreens/Profile';
import Subscription from '../scr/screens/drawerScreens/Subscription';
import Home from '../scr/screens/Home';
import CustomDrawer from './CustomDrawer';
import Account from '../scr/screens/bottomScreens/Account';
import Calender from '../scr/screens/bottomScreens/Calender';
import settingScreen from '../scr/screens/drawerScreens/settingScreen';
import { Text, View } from 'react-native';
import { colors } from '../scr/components/Colors';
import ChatVideoCall from '../scr/screens/drawerScreens/ChatVideoCall';


const Drawer = createDrawerNavigator();
const bottomTab = createBottomTabNavigator()
const MainStack = createStackNavigator()
export default function MyStack() {
  return (
    <NavigationContainer>
      <DashboardStack />
    </NavigationContainer>

  );
}
const DashboardStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"splashScreen"}
    >
      <MainStack.Screen name='DrawerStack' component={DrawerStack} />
      <MainStack.Screen name='splashScreen' component={splashScreen} />
      <MainStack.Screen name='loginScreen' component={loginScreen} />
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen name='ChatVideoCall' component={ChatVideoCall} />

    </MainStack.Navigator>
  )
}
/////////////////Drawerstack////////////////////////////////////
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName='HomeStack'
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#0b1c32',
        drawerInactiveTintColor: '#f1f1f1',
        headerShown: false,
        drawerPosition: "right",
        drawerLabelStyle: {
          marginLeft: 5,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen name='HomeStack' component={HomeStack} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Subscription' component={Subscription} />
      <Drawer.Screen name='settingScreen' component={settingScreen} />

    </Drawer.Navigator>
  )
}
////////////////////////BottomTab//////////////////////////////////////
function HomeStack() {
  return (
    <bottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true, // use this props to hide bottom tabs when keyboard shown
      }}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute', borderRadius: 30,
          backgroundColor: colors.signUpBtn,
          height: 55, paddingHorizontal: 5,
          width: "80%", marginLeft: 25,
          bottom: 20,
        },
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        headerShown: false,
      }}
    >

      <bottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <View style={{}}>

              <Text style={[{
                color: "white",
                fontSize: 11,
                marginTop: 10
              }]}>Home</Text>

            </View>
          ),
        }}
      />
      <bottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, size }) => (
            <View style={{}}>

              <Text style={[{
                color: "white",
                fontSize: 11,
                marginTop: 10
              }]}>Account</Text>

            </View>
          ),
        }}
      />
       <bottomTab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarLabel: 'Calender',
          tabBarIcon: ({ focused, size }) => (
            <View style={{}}>

              <Text style={[{
                color: "white",
                fontSize: 11,
                marginTop: 10
              }]}>Calender</Text>

            </View>
          ),
        }}
      />
    </bottomTab.Navigator>
  );
}