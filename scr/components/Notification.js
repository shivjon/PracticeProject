import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Notification =async (notification) => {
    const headers = {
        Authorization: `key=AAAANNldCz0:APA91bFk2YxmdFrzlUSxG0VQEyB8UXr50rK0OihJP85ffBJ0dOkTvdiBLn7AaDTzmP-Ip2aR0_T2hGYck-yyUnw6lfBY5XuBJmRlkRx_Mh-syh9rorlt2dRpm-_G_9zx7Bs_voxrKDS-`,
        'Content-Type': 'application/json',
      }
      const bodyToSend = JSON.stringify({
        to: notification.token,
        notification: {
          title:notification.title,
          body:notification.body,
        },
        data:{...notification.data},
      })
      console.log(bodyToSend,"bodyToSend");
        await axios({
          method: 'post',
          url: 'https://fcm.googleapis.com/fcm/send',
          headers: headers,
          data: bodyToSend,
        }).then((response)=>{
            console.log("Notificaiton Coming",response.data, bodyToSend);
        })
      
}

export default Notification;

const styles = StyleSheet.create({

})