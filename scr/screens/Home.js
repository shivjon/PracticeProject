import {Modal, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import Incomingvideocall from '../components/Incomingvideocall';
import Notification from '../components/Notification';
import {colors} from '../components/Colors';
import uuid from "react-native-uuid";
const  newChannel = uuid.v4();
const Home = () => {
  const [message, setmessage] = useState("");
  const [isModalVisible, setisModalVisible] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    async function name() {
      const nm = await messaging().getToken();
      setmessage(nm);
    }
    name();
    const unsubscribe = messaging().onMessage(remoteMessage => {
      const notiMessage = remoteMessage;
      const channel = JSON.parse(notiMessage.data.callerInfo);
      console.log(channel,'type');

      switch (notiMessage.data.type) {
        case 'CALL_INITIATED':
          const incomingCallAnswer = ({callUUID}) => {
            console.log(channel.channelID,"channel.CALL_INITIATED");
            navigation.navigate("ChatVideoCall",{channelID:channel.channelID} );
            notification("ACCEPTED","cN0_c0kIQmavHa2AZZiwqO:APA91bEHymWr5EKY6JOh_O-2_Z0Ll6X3Kha-SrlZ_J99QoEhimV9B0VdewZ-xICeGHKGG8Gmbb28GZPZ4um-HqMhMhLjL6yRaXI1MHHHGcLXVwPTYUHRht_kv9gRMHpKekAAWFwmdlNu");
            Incomingvideocall.endIncomingcallAnswer(callUUID);
          };
          const endIncomingCall = () => {
            notification("REJECTED","cN0_c0kIQmavHa2AZZiwqO:APA91bEHymWr5EKY6JOh_O-2_Z0Ll6X3Kha-SrlZ_J99QoEhimV9B0VdewZ-xICeGHKGG8Gmbb28GZPZ4um-HqMhMhLjL6yRaXI1MHHHGcLXVwPTYUHRht_kv9gRMHpKekAAWFwmdlNu");
            Incomingvideocall.endIncomingcallAnswer();
            // updateCallStatus({ callerInfo, type: "REJECTED" });
          };
          Incomingvideocall.configure(incomingCallAnswer, endIncomingCall);
          Incomingvideocall.displayIncomingCall("mukesh");
          break;
        case 'CALL_INITIATED_END':
          Incomingvideocall.endIncomingcallAnswer();
          // updateCallStatus({ callerInfo, type: "REJECTED" });
          break;
        case 'ACCEPTED':
          ToastAndroid.show("Accept",ToastAndroid.LONG);
            setisModalVisible(false);
            console.log(channel.channelID,"channel.ACCEPTED");
            // Add Agora navigation code
            navigation.navigate("ChatVideoCall",{channelID:channel.channelID} );
          break;
        case 'REJECTED':
          // Toast.show("Call Rejected");
          setisModalVisible(false);
          ToastAndroid.show("Rejected",ToastAndroid.LONG);
          console.log('Call Rejected');
          break;
        case 'DISCONNECT':
          Platform.OS === 'ios'
            ? Incomingvideocall.endAllCall()
            : Incomingvideocall.endIncomingcallAnswer();
          break;
        default:
          // Toast.show("Call Could not placed");
          console.log('Call Could not placed');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const callerName = 'mukesh';
  const callerID = '3';
  const senderId = '2';
  const type = 'CALL_INITIATED';

  const notification = ( type,token) => {
    Notification({
      token: token,
      title: 'User calling you.',
      body: `forcallinggg.${callerName}.${callerID}.${senderId}.${type}`,
      data: {
        type: type,
        callerInfo: {
          name: callerName,
          channelID:'Channel'+callerID+senderId,
        },
      },
    });
  };

  return (
    <View style={styles.mainConatiner}>
      <TouchableOpacity
        onPress={() =>{  setisModalVisible(!isModalVisible); notification('CALL_INITIATED',"eFOs4yU6SVCdmzwVOJu9Mb:APA91bFRChFne4ZGlivk6QTsI1DId6aPgR_Ae5le91mnFdhho0DfOB0dPXaZTq6ISQ2jfBwobWxow2gQ-OYJcBf8XZC31VbCZ60h_RuwfjiRxnrhc0M1G3remXIbmsAsXp1ktmCczAMs")}}
        style={styles.button}>
        <Text style={styles.textStyle}>CALL_INITIATED</Text>
      </TouchableOpacity>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setisModalVisible(!isModalVisible);
            }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Call Initiated</Text>
                <TouchableOpacity
                onPress={() => {
                  setisModalVisible(!isModalVisible);
                  }}
                  style={styles.closeButton}>
                    <Text style={styles.closeText}>X</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      <TouchableOpacity
        onPress={() => notification('CALL_INITIATED_END', "eFOs4yU6SVCdmzwVOJu9Mb:APA91bFRChFne4ZGlivk6QTsI1DId6aPgR_Ae5le91mnFdhho0DfOB0dPXaZTq6ISQ2jfBwobWxow2gQ-OYJcBf8XZC31VbCZ60h_RuwfjiRxnrhc0M1G3remXIbmsAsXp1ktmCczAMs")}
        style={styles.button}>
        <Text style={styles.textStyle}>CALL_INITIATED_END</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  modalHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeText:{
    color: '#fff',
    fontSize: 20,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      },
      closeButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        },
  button: {
    padding: 10,
    backgroundColor: colors.greyText,
    borderRadius: 20,
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});
