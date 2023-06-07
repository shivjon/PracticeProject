

import { StyleSheet, Text, SafeAreaView, Dimensions, PermissionsAndroid } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AgoraUIKit from 'agora-rn-uikit';
import { useNavigation } from '@react-navigation/native';
import { RtcEngine, ChannelProfileType, IRtcEngine, } from 'react-native-agora';
const connection = {
  appId: '3d75f48ae4754e248b42de7244b00d7f',
  channel: "",
};
const ChatVideoCall = (props) => {  

  const [connectionData, setconnectionData] = useState(connection);
  useEffect(() => {
    setconnectionData({
      appId: '3d75f48ae4754e248b42de7244b00d7f',
      channel: props.route.params.channelID,
    })
  }, [])
  

  // useEffect(() => {
  // const connectionData = {
  //   appId: '3d75f48ae4754e248b42de7244b00d7f',
  //   channel: props.route.params.channelID,
  // };
  // }, [props])
  

  const agoraEngine = useRef(null);

  useEffect(() => {
    initializeAgora();
    return () => {
      leaveChannel();
    };
  }, []);

  const initializeAgora = async () => {
    agoraEngine.current = await RtcEngine.create('4a0a9ae5b7c44e5da4ef8d25417ae2cf');
    await agoraEngine.current.setChannelProfile(ChannelProfileType.LiveBroadcasting);
  };

  const joinChannel = async () => {
    RtcEngine.joinChannel('12345678', '4a0a9ae5b7c44e5da4ef8d25417ae2cf', null, 0);
  };

  const leaveChannel = async () => {
    destroyAgora()
  };

  const destroyAgora = async () => {
    await agoraEngine.current?.destroy();
  };

  const navigation = useNavigation();
  const [videoCall, setVideoCall] = useState(true);

  useEffect(() => {
    requestCameraPermission()
  }, [])
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const rtcCallbacks = {
    EndCall: () => {
      setVideoCall(false)
      // RtcEngine.leaveChannel();
      // RtcEngine.destroy();
      leaveChannel()
    }
  };

  const backhandlerCall=()=>{
    navigation.goBack();
  }

  return (
    videoCall ? <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} /> 
    : 
    // <Text
    //   // onPress={() => {
    //   //   // navigation.navigate("Nafz")
    //   //   setVideoCall(true)
    //   // }
    //   // }
    //   style={{ color: 'black', textAlign: "center", fontSize: 23 }}  >Connect Now</Text>
    backhandlerCall()
    // <LinkingEx />
  )

}

export default ChatVideoCall

const styles = StyleSheet.create({})


