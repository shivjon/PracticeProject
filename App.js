import { StyleSheet, Text, View } from 'react-native'
import { StripeSdk ,StripeProvider} from '@stripe/stripe-react-native';
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './navigation/AppNavigation'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging'
PushNotification.configure({
  onRegister: function (token) {
    // console.log('FCM token value is the', token)
  },
  popInitialNotification: true,
  requestPermissions: true
})
const App = () => {

  useEffect(() => {
   getFcmToken()
  }, [])
  
  const getFcmToken = async () => {
      try {
        const fcmToken = await messaging().getToken()
        console.log("NEW DEVICE FCM", fcmToken);
       
      } catch (error) {
        console.log("error message", error)
      }
 }

 useEffect(() => { 
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log("remote messages",remoteMessage)
    if (remoteMessage.notification.title == "732jwo8efywfwnciwufwlfbnwc90ewfhewlkncw9pcwjwkc8vcl.khsdbnhoshdg,sn,hsdilgsd") {
      alert("hahahahahha")
    }else{

 
    PushNotification.createChannel(
      {
        channelId: "channel-id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
  
      (created) => {
        PushNotification.localNotification({
           channelId: "channel-id", // (required) channelId, if the channel doesn't exist, notification will not trigger.
          // largeIconUrl: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-128.png", // (optional) default: undefined
          // bigLargeIconUrl: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-128.png", // (optional) default: undefined
          title: remoteMessage.notification.title, // (optional)
          message: remoteMessage.notification.body, // (required)
        });
      }
    );
  }
   
  });
  return () => unsubscribe();
}, [])


  return (
    <Provider store={store}>
       <MyStack />
      </Provider>
    
  )
}

export default App

const styles = StyleSheet.create({})


